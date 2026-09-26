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

export const siirler: Siir[] = [
  {
    id: '1',
    baslik: 'Beni Candan Usandırdı',
    sair: 'Fuzûlî',
    yasi: '1480-1556',
    donem: 'Divan',
    nazim_sekli: 'Gazel',
    orijinal: 'بنی جاندن اوصاندردی صفا دان یار وصانماز می\nفلکلر یاندی آهمدن مرادم شعله یانماز می\n\nکمو بیمارنه جانان دوائی درت ادر احسان\nنیچین قلمز بانا درمان بیمار سنماز می\n\nگامم پنھان قلاردم بن ددیلر یاره قل رشن\nدسم اول بی وفا بلمم اینانورمی اینانمازمی\n\nشبی حصران یانر جانم دوکر قان چشمشم گریانم\nاویاندرر خلقی افغانم قره بختم اویانماز می\n\nگلی رוחصارینه قرشو گوژمدن قانلی اقار صو\nحبیبم فصلی گلدر اقار صوالر بولانماز می\n\nدگلدم بن سانا مائل سن اتدين اكلمي زائل\nبانا تن ایلیان غافل سنی گورگج اوتانماز می\n\nفصولی رند و شیدادر هر زمان خلقه روسودر\nسورن کیم بو نه سودادر بو سودان اوصانماز می',
    latin: 'Beni candan usandırdı cefâdan yâr usanmaz mı?\nFelekler yandı âhimden murâdım şem-i yanmaz mı?\n\nKamu bîmârına cânân devayı-dert eder ihsan\nNeçin kılmaz bana derman beni bîmar sanmaz mı?\n\nGamım pinhan kılardım ben, dediler yare kıl ruşen\nDesem, ol bivefa bilmem, inanır mı, inanmaz mı?\n\nŞebi-hicran yanar cânım, döker kan çeşmi-giryânım\nUyandırır halkı efgânım, kara bahtım uyanmaz mı?\n\nGûli-ruhsârına karşu gözümden kanlı akar su\nHabîbim faslı-güldür bu, akar sular bulanmaz mı?\n\nDeğildim ben sana mâil, sen ettin aklımı zâil\nBana tan eyleyen gafîl, seni görgeç utanmaz mı?\n\nFuzûlî rindü şeydâdır, her zaman halka rüsvâdır\nSorun kim, bu ne sevdâdır, bu sevdâdan usanmaz mı?',
    turkce: 'Beni canımdan usandırdı, cefasından yar usanmaz mı? Felekler yandı feryadımdan, dileğim alev yanmaz mı? Her hastasına sevgili derdini derman eder ihsan, neden bana derman etmez, beni hasta sanmaz mı? Gamımı gizlerdim, dediler yare göster. Desem, o vefasızı bilmem, inanır mı inanmaz mı? Ayrılık gecesi yanar canım, kan döker gözlerim, feryadım halkı uyandırır, kara bahtım uyanmaz mı? Gül yanaklarının karşısında gözlerimden kanlı akar su, sevgilim gül mevsimidir bu, akan sular bulanmaz mı? Benden senden değildi eğilim, sen aklımı zayıflattın, bana günah gösteren gafil, seni görünce utanmaz mı? Fuzûlî rind ve mecnundur, her zaman halka rezildir, sorun bu ne sevdadır, bu sevdadan usanmaz mı?',
    kaynak: 'Vikikaynak - Fuzûlî Divanı',
  },
  {
    id: '2',
    baslik: 'Kanuni Mersiyesi',
    sair: 'Bâkî',
    yasi: '1526-1600',
    donem: 'Divan',
    nazim_sekli: 'Terkib-i Bend',
    orijinal: 'اے پاۓ بندی دام گہی قیدی نام و ننگ\nتا کی هواۓ مشغلوی دہری بیدرنگ\n\nآن اول کی آHIR اولوب نوبہاری عمر\nبرگی خزانہ دونسمک گرک روحی لالہ رنگ\n\nآخر مکانی اولسه گرکچوراگیب خاک\nدرون ایلندی ارسه گرک جامی عیشاسنگ\n\nاینسان ادرکی عاینہ وش قلبی صاف اولا\nسیننده نایلر آدم ایسن کینہ یی پلنگ\n\nابرت گوزنده نیچیه دک غفلت اوخوسو\nیتmez می سانا واقعہ یی شاهی شیرچنگ\n\nاول شهرسواری مملکتی سعادتکی رخشنہ\nجولان دمیندہ ارصایی عالم گلوردی تنگ\n\nباش اغدی آبی تیغینا کفاری انگریس\nشمشیری گوہرینی پسند ایلدی فرنگ\n\nیوز یره کودو لطف ایله گلبرگی ترگیبی\n sanduka saldı hazin-i devran güher gibi',
    latin: 'Ey pây-bend-i dâm-geh-i kayd-ı nâm ü neng\nTâ key havâyı meşgale-i dehri bî-direng\n\nAn ol günü ki âhir olub nev-bahâr-ı ömr\nBerg-i hazana dönse gerek rûy-ı lale-reng\n\nÂhir mekânının olsa gerek cür\'a gibi hâk\nDevrân elinde irse gerek câm-ı ayşa seng\n\nİnsân odur ki âyine veş kalbi sâf ola\nSînende n\'eyler âdem isen kîne-i peleng\n\nİbret gözünde niceye dek gaflet uyhusu\nYetmez mi sana vâkıa-i şâh-ı şîr-çeng\n\nOl şeh-süvâr-ı mülk-i saâdet ki rahşına\nCevlân deminde arsa-i âlem gelürdi teng\n\nBaş eğdi âb-ı tîğına küffâr-ı Engerüs\nŞemşîri gevherini pesend eyledi Freng\n\nYüz yire kodu lûtf ile gül-berg-i ter gibi\nSanduka saldı hâzin-i devrân güher gibi',
    turkce: 'Ey nam ve şeref zincirinin ayağı! Ne zamana kadar dünyanın yorulmak bilmez meşgalesine hedef olacaksın? O gün ki ömrün son baharı olup, lale renkli yüzün yaprak gibi sonbahara dönmeli. Son mekanının toprak gibi olması gerek, devran elinde yaşamak için bardağı sert taşa vurmalı. İnsanoğludur ki aynası kalbi saf olsun, göğsünde düşmanlık varsa aslan gibi olursun. İbret gözünde ne zamana kadar gaflet uykusu? Şirinçengin (cesur padişahın) hadisesi yetmez mi sana? O mutluluk mülkünün atlısı ki atının hoşaftan olduğu anda bütün âlem daralırdı. Engürüslerin (Avrupalıların) kılıcının suyuna baş eğdi, Franklar (Avrupalılar) kılıcının mücevherini beğendi. Lütfuyla gül yaprağı gibi yere koydu, devran hazinesini sandık gibi bıraktı.',
    kaynak: 'Vikikaynak - Bâkî Divanı',
  },
  {
    id: '3',
    baslik: 'Su Kasidesi',
    sair: 'Fuzûlî',
    yasi: '1480-1556',
    donem: 'Divan',
    nazim_sekli: 'Kaside',
    orijinal: 'صاچما ای گوز اشکدن گو نلده کی اودلره صو\nکم بو دنلو دوتوشن اودلره قلمز چارہ صو\n\nآبگوندر گونبدی دوّار رنگی بلملزہم\nیا موحیت اولمش گوژمدن گونبدی دوّارہ صو\n\nزوقی تیغندن عجب یوخ اولسه گونلم چاک چاک\nکم مروت ایلن براگور رخنلری دیوارہ صو\n\nوہم ایلن سویلر دلی مجرّح پیکانن سوزین\nاحتیاط ایلن ایچر هر کیمده اولسہ یارہ صو\n\nسویہ ویرسون باخبان گلزاری زحمت چکمسون\nبر گل آچلمز یوزن تک ویرسہ بن گلزارہ صو\n\nاغشادابلmez گوبارینی محرر حطّنہ\nحامہ تک باحمادن اینسہ گوژلرینہ قارا صو\n\nعازون یادیلا نمناک اولسا مجگانم نولا\nزایی اولماز گل تمنّا سیلا ویرمک حارہ صو\n\nگام گونی ایتمہ دلی بیماردن تیغون دیریğ\nخیردرویرمک قارانو گیچہ دہ بیمارہ صو\n\nایستہ پیکانن گونل حجرنده شوقم ساکن ایت\nسوسزام برکز بو صحرادا منومچون آرا صو\n\nمن لبم مشتاقیم زوّاد کوثر طالبی\nنیتکیم مستہ می ایچمک خوش گلور هوشیارہ صو\n\nراوزای کوینہ ہرم دومنایوب ایلر گوزار\nعاشق اولمش غالبا اول سروی خوش رفتارہ صو\n\nسو یولن اول کویدن تراغ اولوب دوتسام گرک\nچون رقیبمدر دخی اول کویا کویمان وارا صو\n\nدستبوسی آرزو سیلا گر اولسم دوستلر\nکوزہ ایلن تراغوم سونون اونلا یارا صو\n\nسرو سرکشلق قیلور کومری نیازندن مگر\nدامنن دوتا ایاغینہ دوشہ یلوارا صو\n\nایچمک ایستر بولبلون قانن مگر بر رنگ ایلہ\nگل بوداغینون مزاجینہ گیرہ قوتارا صو\n\nطینتی پاکینی روشن قلمش اہلی عالمہ\nاقتدا قلمش طریقی احمدی مختارہ صو\n\nسیدی نوی بشر دریایی دوّری اصطفا\nکیم سپوردر معجزاتی آتشی اشرارہ صو\n\nقولماغیچن تازہ گلزاری نبوت رعنکن\nمعجزندن ایلهمش اizard سنجی حارہ صو\n\nمعجزہ بر بحری بی پایان امشی عالمدہ کیم\nیتмыш اندن من من آتشخانہ یی کفارہ صو\n\nحیرت ایلن بارماغن دیشلر کیم ایتسہ استما\nبارماغندرد ویردیکن شدّت گونی انصارہ صو\n\nدوستی گر زہری مار ایچسہ اولور آبی حیات\nحاسمر ایچسہ دوّرہ البتّہ زہری مارا صو\n\nایلهمش ہر قطعہ دن من بحری رحمت موجخیز\nإل سونوب اورغاچ وضو ایچن گلی روحسارہ صو\n\nخاکی پایینہ یتم دیر عمرلردر متصّل\nباشنی داشdan داشہ اوروب گزر آوارہ صو\n\nزرّہ زرّہ خاکی درگاہینہ یستر سالینور\nدونmez اول درگاہدن گر اولسا پارہ پارہ صو\n\nذکری نautün وردینی درمان بلور اہلی خطا\nایلہ کیم دفعی همّار ایچن ایچر میخوارہ صو\n\nیا حبیب اللہ یا خیر البشر مشتاقنم\nایلہ کیم لبتشنلر یانوب دیلر هموا رہ صو\n\nسنسن اول بحری کرامت کیم شہبی میراچ دا\nشبنمی فیزون یتارمش ثابت و سیّارہ صو\n\nچشمه یی خورشیدن ہرم دم زلالی فیز اینر\nحاجت اولسا مرقدن تجدید ایدن معمارہ صو\n\nبیمی دوزخ ناری گام سالمش دلی سوزانما\nوار امیدم ابری احسانون سپہ اول نارہ صو\n\nیومنی نautündن گوہر اولمش فضولی سوزلری\nابری نیساندن اولن تک لؤلویی شهروارہ صو\n\nھبی گافلتدن اولان بیدار اولندا روزی ھشر\nاشکی ھشردن توکندہ دیدہ یی بیدارہ صو\n\nامدیغوم اولدر کی روزی ھشر محروم اولمام\nچشمه یی وصلون ویرہ من تشنہ یی دیدارہ صو',
    latin: 'Saçma ey göz eşkden gönlümdeki odlara su\nKim bu denlü dutuşan odlara kılmaz çâre su\n\nÂb-gûn-dur günbed-i devvâr rengi bilmezem\nYâ muhît olmuş gözümden günbed-i devvâra su\n\nZevk-i tîğundan aceb yok olsa gönlüm çâk çâk\nKim mürûr ile bırağur rahneler dîvâra su\n\nVehm ile söyler dil-i mecrûh peykânun sözün\nİhtiyât ile içer her kimde olsa yara su\n\nSuya virsün bâğ-bân gül-zârı zahmet çekmesin\nBir gül açılmaz yüzün tek verse bin gül-zâra su\n\nOhşadabilmez gubârını muharrir hattına\nHâme tek bahmahtan inse gözlerine kara su\n\nÂrızun yâdıyla nem-nâk olsa müjgânum n\'ola\nZayi olmaz gül temennâsıyla virmek hâra su\n\nGam güni itme dil-i bîmârdan tîgun dirîğ\nHayrdur virmek karını gicede bîmâra su\n\nİste peykânın gönül hecrinde şevkum sâkin it\nSusuzam bir kez bu sahrâda menüm-çün ara su\n\nMen lebün müştâkıyam zühhâd kevser tâlibi\nNitekim meste mey içmek hoş gelür hûş-yâra su\n\nRavza-i kûyuna her dem durmayup eyler güzâr\nÂşık olmış galibâ o serv-i hoş-reftâra su\n\nSu yolın o kûydan toprağ olup dutsam gerek\nÇün rakîbümdür dahi o kûya koyman vara su\n\nDest-bûsı arzûsıyla ger ölsem dostlar\nKûze eylen toprağum sunun anunla yâra su\n\nServ ser-keşlik kılur kumrî niyâzından meger\nDâmenin duta ayağına düşe yalvara su\n\nİçmek ister bülbülün kanın meger bir reng ile\nGül budağının mizâcına gire kurtara su\n\nTıynet-i pâkini rûşen kılmış ehl-i âleme\nİktidâ kılmış târîk-i Ahmed-i Muhtâr\'a su\n\nSeyyid-i nev-i beşer deryâ-yı dürr-i ıstıfâ\nKim sepüptür mu\'cizâtı âteş-i eşrâra su\n\nKılmağ içün tâze gül-zârı nübüvvet revnakın\nMu\'cizinden eylemiş izhâr seng-i hâra su\n\nMu\'cizi bir bahr-i bî-pâyân imiş âlemde kim\nYetmiş andan min min âteş-hâne-i küffâra su\n\nHayret ilen barmağın dişler kim itse istimâ\nBarmağından virdügin şiddet günü Ensâr\'a su\n\nDostı ger zehr-i mâr içse olur âb-ı hayât\nHasmı su içse döner elbette zehr-i mâra su\n\nEylemiş her katreden min bahr-ı rahmet mevc-hîz\nEl sunup urgaç vuzû içün gül-i ruhsâra su\n\nHâk-i pâyine yetem dir ömrlerdür muttasıl\nBaşını daşdan daşa urup gezer âvâre su\n\nZerre zerre hâk-i dergâhına ister salınur\nDönmez o dergâhdan ger olsa pâre pâre su\n\nZikr-i na\'tün virdini dermân bilür ehl-i hatâ\nEyle ki def-i humâr içün içer mey-hâra su\n\nYâ Habîballah yâ Hayre\'l beşer müştakunam\nEyle ki leb-teşneler yanup diler hemvâra su\n\nSenensen ol bahr-ı kerâmet ki şeb-i Mi\'râc\'da\nŞebnem-i feyzün yetürmüş sâbit ü seyyâra su\n\nÇeşme-i hurşîdden her dem zülâl-i feyz iner\nHâcet olsa merkadün tecdîd iden mimâra su\n\nBîm-i dûzah nâr-ı gam salmış dil-i sûzânuma\nVar ümîdüm ebr-i ihsânun sepe ol nâra su\n\nYümn-i na\'tünden güher olmış Fuzûlî sözleri\nEbr-i nîsândan dönen tek lü\'lü-i şeh-vâra su\n\nHâb-ı gafletden olan bîdâr olanda rûz-ı haşr\nEşk-i hasretden tökende dîde-i bîdâra su\n\nUmduğum oldur ki rûz-ı haşr mahrûm olmayam\nÇeşme-i vaslun vire men teşne-i dîdâra su',
    turkce: 'Saçma göz, gözyaşlarını gönlümdeki ateşlere su olarak. Bu kadar yanan ateşlere su çare olmaz. Suyun rengi dönen kubbenin rengi gibi, gözlerimden dönen kubbenin etrafı su olmuş. Kılıcının zevkinden gönlüm paramparça olmasa, geçerken duvarlarda yaralar bırakır. Yaralı dilin okunun sözünü vehimle söyler, her kimde yara varsa ihtiyatla içer. Bağ-bahçıvan gülzarı suya versin, zahmet çekmesin. Yüzünün gülü açılmaz, verse bin gülzara su. Mürekkebin tozunu yazamaz, gözlerine kara su iner. Gam gününde yaralı dilden kılıcı esirgeme, hayırdır gecede hastaya su vermek. Sevgilinin yoluna her an durmadan gider, âşık olmuş galiba o hoşaftan serv-i revana su. Dostlar, eğer ölümle arzusunu dilersem, toprağımı testi yapın onunla sevgiliye su verin. Bülbül kanını ister, bir renkle, gül dalının mizacına girip kurtarır su. Temiz ahlakını âleme göstermiş, Ahmed-i Muhtâr\'ın yoluna uymuş su.',
    kaynak: 'Vikikaynak - Fuzûlî Divanı',
  },
  {
    id: '4',
    baslik: 'Gerçi Ey Dil Yâr İçün',
    sair: 'Fuzûlî',
    yasi: '1480-1556',
    donem: 'Divan',
    nazim_sekli: 'Gazel',
    orijinal: 'گرچہ ای دل یار ایچون یوز وردی یوز مہنت سنا\nزره‌چی قطعی محبت اتمدن رحمت سنا\n\nعشق اہلین آتشی حجرانہ ایلرسن کباب\nدونہ دونہ امتحان اتدم بو در عادت سنا\n\nصاقلما نقذی گامی عشقینی ای جان ظاہر ات\nکیم ویرم حبسی بدنمدن چیقماğ رخصت سنا\n\nچارہ یی بہبودومی سوردم مؤالحدن دیدی\nدرد دردی عشق ایسه ممکن دگل صحت سنا\n\nدوترام یارین قیامتده حبیبم دامنن\nمست ایسن غفلت شرابندن بو گون موہلت سنا\n\nاینچیدور نالم سنی وہ نولا گر بر تیغ ایلہ\nچشمی جلدون ایدہ احسان مانا منت سنا\n\nسنده دن کوردم فضولی میلی محرابی نماز\nترکی عشق اتمکمی ایسترسن ندر نیت سنا',
    latin: 'Gerçi ey dil yâr içün yüz verdi yüz mihnet sana\nZerrece kat\'-ı mahabbet etmedün rahmet sana\n\nIşk ehlin âteş-i hicrâna eylersen kebâb\nDöne döne imtihân etdün budur âdet sana\n\nSaklama nakd-i gam-ı ışkını ey cân zâhir et\nKim verem habs-i bedenden çıkmağa ruhsat sana\n\nÇâre-i bihbûdumu sordum mu\'âlicden dedi\nDerd derd-i ışk ise mümkin degül sıhhat sana\n\nDutaram yarın kıyâmetde habîbüm dâmenün\nMest isen gaflet şarâbından bu gün möhlet sana\n\nİncidür nâlem seni veh n\'ola ger bir tîğ ile\nÇeşm-i cellâdun ede ihsân mana minnet sana\n\nSende dün gördüm Fuzûlî meyl-i mihrâb-ı namâz\nTerk-i ışk etmek mi istersen nedür niyyet sana',
    turkce: 'Ey dil, sevgili için yüz mihnet verdi sana. Aşk ehlinin ayrılık ateşini kebap yapsan, defalarca imtihan ettin, bu adetindir sana. Aşk gamının nakdini gizleme ey can, göster ki bedenin hapsinden çıkmağa ruhsat vereyim sana. Çaremi sordum doktora, dedi ki: Derdin aşk ise, sağlık mümkün değildir sana. Yarın kıyamette sevgilimin eteğini tutarım, bugün sarhoşsan gaflet şarabından müsaade sana. Nalım seni incitir, ya bir kılıçla olursa, celladın gözünden ihsan olur bana, minnet sana. Dün sende gördüm Fuzûlî, namaz kılmaya meylin var, aşkından vazgeçmek mi istiyorsun, niyetin nedir sana?',
    kaynak: 'Vikikaynak - Fuzûlî Divanı',
  },
  {
    id: '5',
    baslik: 'Hançer Kasidesi',
    sair: 'Fuzûlî',
    yasi: '1480-1556',
    donem: 'Divan',
    nazim_sekli: 'Kaside',
    orijinal: 'چکر بی رحمار یاننده ہر ساعت زبان حنجر\nگناہم ثابت ایدر اولمه گی حاترنشان حنجر\n\nور پروانہ از جاننی سناغ چون اختیار ایلہ\nنی حاکت شولدن ای شمع چکمه ہر زمان حنجر\n\nحزر قیل گزمه چوق پرواسز ای بولبل کی قتل چون\nدیکنن دامنی آلتنده قلمش گل نیهان حنجر\n\nمجن قانم دوکوب گامزن الیر قانم عجوب سانما\nایشیدر دوکسه قان او عادتدر الSA قان حنجر\n\nدهانن یوق دیمشلر سویله بو گوپتار کندندن\nبلن پیدا دگیلی کندہ طوتدرمش مکان حنجر\n\nروحی زرم سالیپدر حنجرنگ گوزگوسنه اکسن\nو یا سیمین بلندہ طوتدوغوندر زرنشان حنجر\n\nزبانی تیز ایله اورتایہ گیرمش متوصل گویا\nاولم در مادحی پیغمبری اخیر زمان حنجر\n\nعدوی جاهنگ کاتی حیاتین چکر ہر آی\nگلافی لاچوردینن هلالی اسمان حنجر\n\nمنافق ایدهلمز شرعینہ مدحل کی چورندہ\nملائیک پر و بالن گورسه ایدردی گومان حنجر\n\nبہمده اللہ کی حالا دیدہ یی بدحالہ ناتیندن\nفضولی نظمینہ ہر سطر در بر قان سیتان حنجر\n\nبودر امید کی محفوظ اولام حصنی پناهنده\nگلف اینکر نتکین ساقلنر گورمز زیان حنجر',
    latin: 'Çeker bî-rahmlar yanında her sâat zebân hançer\nGünâhım sâbit eyler ölmeğim hâtır-nişân hançer\n\nVerir pervâne öz cânın sana çün ihtiyâr ile\nNe hâcet şu\'leden ey şem çekmek her zaman hançer\n\nHazer kıl gezme çok pervâsız ey bülbül ki katlinçün\nDikenden dâmeni altında kılmış gül nihân hançer\n\nMüjen kanım döküp gamzen alır cânım aceb sanma\nİşidir dökse kan ok âdetidir alsa cân hançer\n\nDehânın yok demişler söyle bu güftâr kandandır\nBelin peydâ değildi kanda tutmuştur mekân hançer\n\nRuh-ı zerdim salıptır hançerin, gözgüsüne aksin\nVeyâ sîmîn belinde tuttuğundur zer-nişân hançer\n\nZebân-ı tiz ile ortaya girmiş muttasıl gûyâ\nOlam der mâdih-i peygamber-i âhir zamân hançer\n\nAdû-yı câhının kat\'-ı hayâtıyçün çeker her ay\nGılâf-ı lâciverdîden hilâl-ı âsmân hançer\n\nMünâfık edebilmez şer\'ine medhal ki çevrende\nMelâ\'ik perr ü bâlin görse eylerdi gümân hânçer\n\nBihamdi\'llâh ki hâlâ dide-i bed-hâha nâ\'tinden\nFuzûlî nazmının her satrıdır bir cân sitân hançer\n\nBudur ümmid kim mahfûz olam hısn-ı penâhında\nGılaf içre netekim saklanır görmez ziyân hançer',
    turkce: 'Merhametsizlerin yanında her an dil hançer çeker. Günahımı sabit eder, ölümümü hatırlatır hançer. Kelebek canını sana gönüllü verince, ne lüzum var her an bu ışıktan hançer çekmeye. Dikkat et çok pervasız gezme ey bülbül, çünkü katlin için gül dikenin altında hançer saklamış. Kanımı döküp gamzen canımı alsın, sakın sanma. Ok kan döker, hançer can alır, bu adetindir. Dilin yok demişler, bu söz neredendir? Belin görünmüyor, kanda tutuyor mekanı hançer. Ruhum altındandır, hançerin aksin gözyaşına, ya da belinde tuttuğun altındandır hançer. Dilin hançerle ortaya çıkmış, Peygamber\'in övgüsüne derim hançer. Düşmanının hayatını kesmek için her ay çeker hançer. Münafık edemez şeriatın kapısını, çevrende melekler kanatlı olsa şüphe ederdi hançer. Allah\'a hamdolsun ki hâlâ kötü gözlerin övgüsünden, Fuzûlî\'nin dizisinin her satırı bir can alan hançerdir.',
    kaynak: 'Vikikaynak - Fuzûlî Divanı',
  },
  {
    id: '6',
    baslik: 'Gelin Tanşık Edelim',
    sair: 'Yunus Emre',
    yasi: '1240-1320',
    donem: 'Halk',
    nazim_sekli: 'Dörtlük',
    orijinal: 'گلین طانیش ایدلیم ایش قولاین طوتالم\nسوملیم سویلیم دنیایا کمسه قالماز\n\nایشی قولای طوتان قولای یاپار\nقولای ایدوب قولای یاپماق کیمینه عسیر اولماز',
    latin: 'Gelin tanış edelim iş kolayın tutalım\nSevelim sevilelim dünyâya kimse kalmaz\n\nİşi kolay tutan kolay yapar\nKolay edip kolay yapmak kimseye müşkül olmaz',
    turkce: 'Tanışalım, işimizi kolay tutalım. Sevelim, sevilelim, dünyada kimse kalmaz. İşi kolay tutan kolay yapar, kolay edip kolay yapmak kimseye zor olmaz.',
    kaynak: 'Yunus Emre Divanı',
  },
];
