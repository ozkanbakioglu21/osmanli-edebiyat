export interface Siir {
  id: string;
  baslik: string;
  sair: string;
  yasi?: string;
  donem: 'Divan' | 'Halk' | 'Tanzimat';
  nazim_sekli: string;
  orijinal: string;
  latin: string;
  turkce: string;
  kaynak: string;
}

export const siirler: Siir[] = [];
