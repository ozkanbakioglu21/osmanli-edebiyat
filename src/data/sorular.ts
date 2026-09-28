import { Soru } from '../types';
import { osmanliTarihiSorulari } from './kategoriler/osmanli-tarihi';
import { sairlerYazarlarSorulari } from './kategoriler/sairler-yazarlar';
import { siirlerSorulari } from './kategoriler/siirler';
import { romanHikayeSorulari } from './kategoriler/roman-hikaye';
import { turkDiliSorulari } from './kategoriler/turk-dili';
import { dunyaEdebiyatiSorulari } from './kategoriler/dunya-edebiyati';
import { muzikSanatSorulari } from './kategoriler/muzik-sanat';
import { atasozleriDeyimlerSorulari } from './kategoriler/atasozleri-deyimler';
import { tarihKulturSorulari } from './kategoriler/tarih-kultur';
import { bilimFelsefeSorulari } from './kategoriler/bilim-felsefe';

export const sorular: Soru[] = [
  ...osmanliTarihiSorulari,
  ...sairlerYazarlarSorulari,
  ...siirlerSorulari,
  ...romanHikayeSorulari,
  ...turkDiliSorulari,
  ...dunyaEdebiyatiSorulari,
  ...muzikSanatSorulari,
  ...atasozleriDeyimlerSorulari,
  ...tarihKulturSorulari,
  ...bilimFelsefeSorulari,
];
