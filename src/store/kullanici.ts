import { create } from 'zustand';
import { Kullanici } from '../types';

type KullaniciStore = {
  kullanici: Kullanici;
  puanEkle: (puan: number) => void;
  oyunSayisiEkle: () => void;
  kazanmaEkle: () => void;
};

const varsayilanKullanici: Kullanici = {
  id: '1',
  isim: 'Oyuncu',
  toplamPuan: 0,
  oyunSayisi: 0,
  kazanilanOyun: 0,
  enYuksekPuan: 0,
  rozetler: [],
  seviye: 1,
  deneyimPuani: 0,
};

export const kullaniciStore = create<KullaniciStore>((set) => ({
  kullanici: varsayilanKullanici,

  puanEkle: (puan) =>
    set((state) => ({
      kullanici: {
        ...state.kullanici,
        toplamPuan: state.kullanici.toplamPuan + puan,
        enYuksekPuan: Math.max(state.kullanici.enYuksekPuan, puan),
        deneyimPuani: state.kullanici.deneyimPuani + puan,
        seviye: Math.floor((state.kullanici.deneyimPuani + puan) / 1000) + 1,
      },
    })),

  oyunSayisiEkle: () =>
    set((state) => ({
      kullanici: {
        ...state.kullanici,
        oyunSayisi: state.kullanici.oyunSayisi + 1,
      },
    })),

  kazanmaEkle: () =>
    set((state) => ({
      kullanici: {
        ...state.kullanici,
        kazanilanOyun: state.kullanici.kazanilanOyun + 1,
      },
    })),
}));
