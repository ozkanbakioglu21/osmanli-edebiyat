export type Kategori =
  | 'Osmanlı Tarihi'
  | 'Şairler & Yazarlar'
  | 'Şiirler'
  | 'Roman & Hikaye'
  | 'Türk Dili'
  | 'Dünya Edebiyatı'
  | 'Müzik & Sanat'
  | 'Atasözleri & Deyimler'
  | 'Tarih & Kültür'
  | 'Bilim & Felsefe';

export type Zorluk = 'kolay' | 'orta' | 'zor';

export type Soru = {
  id: string;
  soru: string;
  secenekler: [string, string, string, string];
  dogruCevap: number;
  kategori: Kategori;
  zorluk: Zorluk;
  bilgi?: string;
};

export type OyunModu = 'milyoner' | '1v1' | 'bilgi' | 'hiz' | 'kategori';

export type Joker = 'elliElli' | 'telefon' | 'seyirci';

export type OyunDurumu = {
  aktif: boolean;
  mod: OyunModu;
  mevcutSoruIndex: number;
  toplamSoru: number;
  dogruCevap: number;
  yanlisCevap: number;
  puan: number;
  sure: number;
  jokerlar: Record<Joker, boolean>;
  sorular: Soru[];
  bitisNoktalari: number[];
  secilenKategori?: Kategori;
};

export type Kullanici = {
  id: string;
  isim: string;
  toplamPuan: number;
  oyunSayisi: number;
  kazanilanOyun: number;
  enYuksekPuan: number;
  rozetler: string[];
  seviye: number;
  deneyimPuani: number;
};

export type Rakip = {
  id: string;
  isim: string;
  seviye: number;
  avatar: string;
};

export type MaclSonucu = {
  rakip: Rakip;
  benimPuanim: number;
  rakibinPuan: number;
  kazanan: 'ben' | 'rakip' | 'berabere';
  tarih: Date;
};
