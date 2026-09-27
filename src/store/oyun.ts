import { create } from 'zustand';
import { OyunDurumu, Soru, Joker, Kategori } from '../types';
import { sorular } from '../data/sorular';

function sorulariKaristir(s: Soru[]): Soru[] {
  const arr = [...s];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function cevaplariKaristir(soru: Soru): Soru {
  const indices = [0, 1, 2, 3];
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const yeniSecenekler = indices.map(i => soru.secenekler[i]) as [string, string, string, string];
  const yeniDogruCevap = indices.indexOf(soru.dogruCevap);
  return { ...soru, secenekler: yeniSecenekler, dogruCevap: yeniDogruCevap };
}

function sorulariHazirla(sorular: Soru[]): Soru[] {
  return sorulariKaristir(sorular).map(s => cevaplariKaristir(s));
}

function soruSec(kategori?: Kategori, zorluk?: string): Soru[] {
  let filtre = [...sorular];
  if (kategori) filtre = filtre.filter(s => s.kategori === kategori);
  if (zorluk) filtre = filtre.filter(s => s.zorluk === zorluk);
  return sorulariHazirla(filtre);
}

function milyonerSoruSec(kategori?: Kategori): Soru[] {
  let filtre = kategori ? sorular.filter(s => s.kategori === kategori) : [...sorular];
  const cokKolaylar = sorulariKaristir(filtre.filter(s => s.zorluk === 'cokKolay'));
  const kolaylar = sorulariKaristir(filtre.filter(s => s.zorluk === 'kolay'));
  const ortalar = sorulariKaristir(filtre.filter(s => s.zorluk === 'orta'));
  const zorlar = sorulariKaristir(filtre.filter(s => s.zorluk === 'zor'));
  const cokZorlar = sorulariKaristir(filtre.filter(s => s.zorluk === 'cokZor'));
  const secilen = [
    ...cokKolaylar.slice(0, 3),
    ...kolaylar.slice(0, 2),
    ...ortalar.slice(0, 5),
    ...zorlar.slice(0, 4),
    ...cokZorlar.slice(0, 1),
  ];
  return sorulariHazirla(secilen);
}

type OyunStore = {
  durum: OyunDurumu;
  milyonerBaslat: (kategori?: Kategori) => void;
  bilgiBaslat: (kategori?: Kategori) => void;
  hizBaslat: (kategori?: Kategori) => void;
  kategoriBaslat: (kategori: Kategori) => void;
  cevapVer: (cevapIndex: number) => void;
  jokerKullan: (joker: Joker) => void;
  sonrakiSoru: () => void;
  oyunuBitir: () => void;
  sureGuncelle: () => void;
  sureyiAzalt: () => void;
};

const MILYONER_BITIS_NOKTALARI = [0, 1, 2, 5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 1000000, 10000000];

const baslangicDurumu: OyunDurumu = {
  aktif: false,
  mod: 'milyoner',
  mevcutSoruIndex: 0,
  toplamSoru: 0,
  dogruCevap: 0,
  yanlisCevap: 0,
  puan: 0,
  sure: 0,
  jokerlar: { elliElli: true, telefon: true, seyirci: true },
  sorular: [],
  bitisNoktalari: [],
};

export const oyunStore = create<OyunStore>((set, get) => ({
  durum: baslangicDurumu,

  milyonerBaslat: (kategori) => {
    const sorularList = milyonerSoruSec(kategori);
    set({
      durum: {
        ...baslangicDurumu,
        aktif: true,
        mod: 'milyoner',
        sorular: sorularList,
        toplamSoru: 15,
        sure: 30,
        bitisNoktalari: MILYONER_BITIS_NOKTALARI,
        secilenKategori: kategori,
      },
    });
  },

  bilgiBaslat: (kategori) => {
    const sorularList = soruSec(kategori);
    set({
      durum: {
        ...baslangicDurumu,
        aktif: true,
        mod: 'bilgi',
        sorular: sorularList,
        toplamSoru: sorularList.length,
      },
    });
  },

  hizBaslat: (kategori) => {
    const sorularList = soruSec(kategori);
    set({
      durum: {
        ...baslangicDurumu,
        aktif: true,
        mod: 'hiz',
        sorular: sorularList,
        toplamSoru: sorularList.length,
        sure: 60,
      },
    });
  },

  kategoriBaslat: (kategori) => {
    const sorularList = soruSec(kategori);
    set({
      durum: {
        ...baslangicDurumu,
        aktif: true,
        mod: 'kategori',
        sorular: sorularList.slice(0, 10),
        toplamSoru: 10,
        sure: 20,
        secilenKategori: kategori,
      },
    });
  },

  cevapVer: (cevapIndex) => {
    const { durum } = get();
    const mevcutSoru = durum.sorular[durum.mevcutSoruIndex];
    if (!mevcutSoru) return;

    const dogruMu = cevapIndex === mevcutSoru.dogruCevap;
    let puanArttir = 0;

    if (durum.mod === 'milyoner') {
      if (dogruMu) {
        puanArttir = durum.bitisNoktalari[durum.mevcutSoruIndex + 1] || 0;
      }
    } else if (durum.mod === 'hiz') {
      if (dogruMu) puanArttir = 100;
    } else if (durum.mod === 'kategori') {
      if (dogruMu) puanArttir = durum.sorular[durum.mevcutSoruIndex]?.zorluk === 'zor' ? 300 : durum.sorular[durum.mevcutSoruIndex]?.zorluk === 'orta' ? 200 : 100;
    } else {
      if (dogruMu) puanArttir = 100;
    }

    set({
      durum: {
        ...durum,
        dogruCevap: durum.dogruCevap + (dogruMu ? 1 : 0),
        yanlisCevap: durum.yanlisCevap + (dogruMu ? 0 : 1),
        puan: durum.puan + puanArttir,
      },
    });
  },

  jokerKullan: (joker) => {
    const { durum } = get();
    if (!durum.jokerlar[joker]) return;
    set({
      durum: {
        ...durum,
        jokerlar: { ...durum.jokerlar, [joker]: false },
      },
    });
  },

  sonrakiSoru: () => {
    const { durum } = get();
    const nextIndex = durum.mevcutSoruIndex + 1;
    if (nextIndex >= durum.sorular.length) {
      set({ durum: { ...durum, aktif: false } });
      return;
    }
    set({
      durum: {
        ...durum,
        mevcutSoruIndex: nextIndex,
        sure: durum.mod === 'milyoner' ? 30 : durum.mod === 'hiz' ? durum.sure : durum.mod === 'kategori' ? 20 : 0,
      },
    });
  },

  oyunuBitir: () => set({ durum: baslangicDurumu }),

  sureGuncelle: () => {
    const { durum } = get();
    if (durum.sure > 0) {
      set({ durum: { ...durum, sure: durum.sure - 1 } });
    } else if (durum.mod === 'hiz') {
      set({ durum: { ...durum, aktif: false } });
    }
  },

  sureyiAzalt: () => {
    const { durum } = get();
    if (durum.sure > 0) {
      set({ durum: { ...durum, sure: durum.sure - 1 } });
    }
  },
}));
