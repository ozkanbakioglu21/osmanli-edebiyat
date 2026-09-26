export interface Siir {
  id: string;
  baslik: string;
  sair: string;
  donem: 'Divan' | 'Halk' | 'Tanzimat' | 'Servet-i Fünun' | 'Fecr-i Ati';
  nazim_sekli: string;
  orijinal: string;
  latin: string;
  turkce: string;
  kaynak: string;
}

export const siirler: Siir[] = [
  {
    id: '1',
    baslik: 'Beni Candan Usandırdı',
    sair: 'Fuzûlî',
    donem: 'Divan',
    nazim_sekli: 'Gazel',
    orijinal: 'بنی جاندن اوصاندردی صفا دان یار وصانماز می\nفلکلر یاندی آهمدن مرادم شعله یانماز می\n\nکمو بیمارنه جانان دوائی درت ادر احسان\nنیچین قلمز بانا درمان بیمار سنماز می',
    latin: 'Beni candan usandırdı cefâdan yâr usanmaz mı?\nFelekler yandı âhimden murâdım şem-i yanmaz mı?\n\nKamu bîmârına cânân devayı-dert eder ihsan\nNeçin kılmaz bana derman beni bîmar sanmaz mı?',
    turkce: 'Beni canımdan usandırdı, cefasından yar usanmaz mı? Ateşler yandı feryadımdan, dileğim alev yanmaz mı? Her hastasına sevgili derdini derman eder ihsan, neden bana derman etmez, beni hasta sanmaz mı?',
    kaynak: 'Vikikaynak - Fuzûlî Divanı',
  },
  {
    id: '2',
    baslik: 'Gelin Tanşık Edelim',
    sair: 'Yunus Emre',
    donem: 'Halk',
    nazim_sekli: 'Dörtlük',
    orijinal: 'گلین طانیش ایدلیم ایش قولاین طوتالم\nسوملیم سویلیم دنیایا کمسه قالماز',
    latin: 'Gelin tanış edelim iş kolayın tutalım\nSevelim sevilelim dünyâya kimse kalmaz',
    turkce: 'Tanışalım, işimizi kolay tutalım. Sevelim, sevilelim, dünyada kimse kalmaz.',
    kaynak: 'Yunus Emre Divanı',
  },
  {
    id: '3',
    baslik: 'Kanuni Mersiyesi (Birinci Bend)',
    sair: 'Bâkî',
    donem: 'Divan',
    nazim_sekli: 'Terkib-i Bend',
    orijinal: 'اے پاۓ بندی دام گەہی قیدی نام و ننگ\nتا کی هواۓ مشغلوی دہری بیدرنگ\n\nآن اول کی آHIR اولوب نوبہاری عمر\nبرگی خزانہ دونسمک گرک روحی لالہ رنگ',
    latin: 'Ey pây-bend-i dâm-geh-i kayd-ı nâm ü neng\nTâ key havâyı meşgale-i dehri bî-direng\n\nAn ol günü ki âhir olub nev-bahâr-ı ömr\nBerg-i hazana dönse gerek rûy-ı lale-reng',
    turkce: 'Ey nam ve şeref zincirinin bağlandığı yerin ayağı! Ne zamana kadar dünyanın yorulmak bilmez meşgalesine hedef olacaksın? O gün ki ömrün son baharı olup, lale renkli yüzün yaprak gibi sonbahara dönmeli.',
    kaynak: 'Vikikaynak - Bâkî Divanı',
  },
  {
    id: '4',
    baslik: 'Aşk Belasına',
    sair: 'Fuzûlî',
    donem: 'Divan',
    nazim_sekli: 'Gazel',
    orijinal: 'عشق بیلاسینا ات بنی یارب دوش ایدرسین\nگر چی تشنہ اولسون جانم ساقی دوش ایدرسین',
    latin: 'Aşk belasına at beni yârab dûş edersin\nGerçi tâşın olursa canım sâkî dûş edersin',
    turkce: 'Aşk belasına at beni yarab, dökersin. Taş gibi olursa canım, saki dökersin.',
    kaynak: 'Vikikaynak - Fuzûlî Divanı',
  },
  {
    id: '5',
    baslik: 'Öyle Ser-Mestem',
    sair: 'Fuzûlî',
    donem: 'Divan',
    nazim_sekli: 'Gazel',
    orijinal: 'اولی سرمستم کی ادرک اتمزوم دنیا ندر\nاوتورم یا قارار ایدم کویمده بو حال ایله',
    latin: 'Öyle ser-mestem ki idrâk etmezem dünyâ nedir\nOtururum kârâr idem köyümde bu hâl ile',
    turkce: 'Öylesine sarhoşum ki, dünyanın ne olduğunu kavrayamıyorum. Köyümde bu hal ile otururum.',
    kaynak: 'Vikikaynak - Fuzûlî Divanı',
  },
  {
    id: '6',
    baslik: 'Ezel Kâtipleri',
    sair: 'Fuzûlî',
    donem: 'Divan',
    nazim_sekli: 'Gazel',
    orijinal: 'ازل کاتبلری عشقلی بخت قری یازمشلر\nگرچی قسمتیمده یوقدر حاصل قی ایتمشلر',
    latin: 'Ezel kâtipleri uşşâk bahtın kâre yazmışlar\nGerçi kısmetimde yoktur hâsıl kîyâ eylemişler',
    turkce: 'Ezeldeki yazıcılar âşıkların bahtını kara yazmışlar. Kısmetimde olmasa da, böyle yazmışlar.',
    kaynak: 'Vikikaynak - Fuzûlî Divanı',
  },
  {
    id: '7',
    baslik: 'Saçma Ey Göz',
    sair: 'Fuzûlî',
    donem: 'Divan',
    nazim_sekli: 'Gazel',
    orijinal: 'صاچما ای گوز اشکدن گو نلده کی اودلره صو\nسنی اوتار اگر سودارسن اوت اولو زار ایدر صو',
    latin: 'Saçma ey göz eşkden gönlümdeki odlara su\nSeni otar eger sódarsın ot ulu zâr eder su',
    turkce: 'Saçma göz, gözyaşlarını gönlümdeki ateşlere su olarak. Seni yakar, eğer sularsan, ateş ulu bir feryat eder.',
    kaynak: 'Vikikaynak - Fuzûlî Divanı',
  },
  {
    id: '8',
    baslik: 'Cânı Kim Cânânı İçün',
    sair: 'Fuzûlî',
    donem: 'Divan',
    nazim_sekli: 'Gazel',
    orijinal: 'جانی کی جاننی ایچون سوسه جاننین سویرمی\nای گونل سنسیز یارم بیوک درد اولور سویرمی',
    latin: 'Cânı kim cânânı için sódse cânânın sódsemî\nEy gönül sensiz yârim bikr derd olur sódsemî',
    turkce: 'Canı ki sevgilisi için satsa, sevgilisi satar mı? Ey gönül, sensiz sevgilim, büyük dert olur satar mıyım?',
    kaynak: 'Vikikaynak - Fuzûlî Divanı',
  },
  {
    id: '9',
    baslik: 'Saçma Ey Göz',
    sair: 'Fuzûlî',
    donem: 'Divan',
    nazim_sekli: 'Gazel',
    orijinal: 'صاچما ای گوز اشکدن گو نلده کی اودلره صو\nسنی اوتار اگر سودارسن اوت اولو زار ایدر صو',
    latin: 'Saçma ey göz eşkden gönlümdeki odlara su\nSeni otar eger sódarsın ot ulu zâr eder su',
    turkce: 'Saçma göz, gözyaşlarını gönlümdeki ateşlere su olarak. Seni yakar, eğer sularsan, ateş ulu bir feryat eder.',
    kaynak: 'Vikikaynak - Fuzûlî Divanı',
  },
  {
    id: '10',
    baslik: 'Şeyh Galip - Hüsn ü Aşk\'tan',
    sair: 'Şeyh Galip',
    donem: 'Divan',
    nazim_sekli: 'Mesnevi',
    orijinal: 'عشق ایله دل بیر اولور سودندر که عالم اولدی\nکیمیا عشقدر کی بی‌پایان اولور',
    latin: 'Aşk ile dil bir olur sevdenmdir ki âlem oldu\nKîm-yâ aşkdır kî bî-pâyân olur',
    turkce: 'Aşk ile dil bir olur, sevgiden dolayı âlem oldu. Kimya aşktır ki sonsuz olur.',
    kaynak: 'Şeyh Galip - Hüsn ü Aşk',
  },
];
