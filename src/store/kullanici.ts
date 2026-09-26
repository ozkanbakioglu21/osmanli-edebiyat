import { create } from 'zustand';

interface Kullanici {
  toplam_kelime: number;
  okunan_siir: number;
  favori_sozluk: string[];
  favori_siir: string[];
  streak: number;
  kelimeEkle: () => void;
  siirEkle: () => void;
  sozlukFavorile: (id: string) => void;
  siirFavorile: (id: string) => void;
}

export const useKullanici = create<Kullanici>((set) => ({
  toplam_kelime: 0,
  okunan_siir: 0,
  favori_sozluk: [],
  favori_siir: [],
  streak: 1,
  kelimeEkle: () => set((s) => ({ toplam_kelime: s.toplam_kelime + 1 })),
  siirEkle: () => set((s) => ({ okunan_siir: s.okunan_siir + 1 })),
  sozlukFavorile: (id) =>
    set((s) => ({
      favori_sozluk: s.favori_sozluk.includes(id)
        ? s.favori_sozluk.filter((x) => x !== id)
        : [...s.favori_sozluk, id],
    })),
  siirFavorile: (id) =>
    set((s) => ({
      favori_siir: s.favori_siir.includes(id)
        ? s.favori_siir.filter((x) => x !== id)
        : [...s.favori_siir, id],
    })),
}));
