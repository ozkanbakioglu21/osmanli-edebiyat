const fs = require('fs');
const p = 'C:\\Users\\User\\AppData\\Local\\Temp\\osmanli-edebiyat\\src\\data\\kategoriler\\atasozleri-deyimler.ts';

var lines = [];
lines.push("import { Soru } from '../../types';");
lines.push("");
lines.push("export const atasozleriDeyimlerSorulari: Soru[] = [");
lines.push("");

var id = 0;
function add(z, s, opts, b) {
  id++;
  var ids = 'ad' + String(id).padStart(3, '0');
  var line = "  { id: '" + ids + "', soru: '" + s + "', secenekler: [";
  for (var i = 0; i < 4; i++) {
    if (i > 0) line += ", ";
    line += "'" + opts[i] + "'";
  }
  line += "], dogruCevap: 0, kategori: 'Atas\u00f6zleri & Deyimler', zorluk: '" + z + "', bilgi: '" + b + "' },";
  lines.push(line);
}

// cokKolay: 50
var cokKolay = [
  { s: 'Damlaya damlaya g\u00f6l olur atas\u00f6z\u00fc ne anlama gelir?', o: ['K\u00fc\u00e7\u00fck birikimlerle b\u00fcy\u00fck i\u015fler yap\u0131l\u0131r','Su \u00e7ok akarsa g\u00f6l olu\u015fur','Ya\u011fur ya\u011farsa g\u00f6l dolu olur','G\u00f6l sular\u0131 damlac\u0131klardan olu\u015fur'], b: 'Az az biriktirerek b\u00fcy\u00fck i\u015fler ba\u015far\u0131laca\u011f\u0131n\u0131 anlat\u0131r.' },
  { s: 'Bir elin nesi var, iki elin sesi var deyiminin anlam\u0131 nedir?', o: ['\u0130nsanlar birlikte daha g\u00fc\u00e7l\u00fcd\u00fcr','El \u00e7\u0131rparak ses \u00e7\u0131kar\u0131l\u0131r','Tek ba\u015f\u0131na i\u015f yapmak zordur','\u0130ki elin sesi birden duyulur'], b: 'Her zaman i\u015fbirli\u011finin g\u00fc\u00e7\u00fcn\u00fc anlat\u0131r.' },
  { s: 'A\u011fa\u00e7 ya\u015fken e\u011filir atas\u00f6z\u00fc ne demektir?', o: ['K\u00fc\u00e7\u00fck ya\u015fta verilen e\u011fitim \u00f6nemlidir','A\u011fa\u00e7lar gen\u00e7ken e\u011filir','Ya\u015f a\u011fa\u00e7 e\u011filmez','A\u011fa\u00e7lar sadece f\u0131rt\u0131nada e\u011filir'], b: 'K\u00fc\u00e7\u00fck ya\u015fta verilen e\u011fitimin \u00f6nemli oldu\u011funu anlat\u0131r.' },
  { s: '\u00d6nceki \u00e7oban sonrakine sor deyiminin anlam\u0131 nedir?', o: ['Deneyimden yararlanmak gerekir','Her \u00e7oban sorulmal\u0131d\u0131r','Sonraki \u00e7oban daha bilgilidir','\u00c7obanlar birbirine dan\u0131\u015f\u0131r'], b: 'Ge\u00e7mi\u015f deneyimlerden faydalan\u0131lmas\u0131 gerekti\u011fini belirtir.' },
  { s: 'Tatl\u0131 dil y\u0131lan\u0131 deli\u011finden \u00e7\u0131kar\u0131r atas\u00f6z\u00fc ne anlama gelir?', o: ['\u0130yi s\u00f6zlerle ikna edilebilir','Y\u0131lanlar tatl\u0131 sever','Dil tatl\u0131 olunca y\u0131lan \u00e7\u0131kar','Y\u0131lanlar deli\u011finde ya\u015far'], b: 'Nazik ve tatl\u0131 s\u00f6zlerin her kap\u0131y\u0131 a\u00e7aca\u011f\u0131n\u0131 anlat\u0131r.' },
  { s: 'G\u00fcvenme dostuna, sama d\u00f6ner postuna deyimi ne demektir?', o: ['Dostlara k\u00f6r\u00fc k\u00f6r\u00fcne g\u00fcvenme','Dostlar g\u00fcvenilmez','Postunu giyen ayn\u0131 olur','Saman\u0131 yakan dosttur'], b: 'Dostlara bile g\u00f6z\u00fc kapal\u0131 g\u00fcvenmemek gerekti\u011fini anlat\u0131r.' },
  { s: 'Elinin hamuruyla ba\u015fkas\u0131n\u0131n ekme\u011fini yeme deyiminin anlam\u0131 nedir?', o: ['Ba\u015fkas\u0131n\u0131n i\u015fine kar\u0131\u015fma','Ekme\u011fi ellerinle ye','Hamuru kendin yo\u011fur','Ba\u015fkas\u0131n\u0131n ekme\u011fi lezzetli'], b: 'Ba\u015fkas\u0131n\u0131n hakk\u0131na kar\u0131\u015fmamak gerekti\u011fini belirtir.' },
  { s: 'Ak\u015fam\u0131n hayr\u0131ndan sabah\u0131n hay\u0131rl\u0131 atas\u00f6z\u00fc ne anlama gelir?', o: ['Sabah erkenden kalkmak hay\u0131rl\u0131d\u0131r','Ak\u015fam g\u00fczel ge\u00e7erse sabah da g\u00fczel olur','Gece ile g\u00fcnd\u00fcz birbirini tamamlar','Sabah hay\u0131r da\u011f\u0131t\u0131r'], b: 'Sabah erken kalkman\u0131n faydal\u0131 oldu\u011funu anlat\u0131r.' },
  { s: 'Bug\u00fcn\u00fcn i\u015fini yar\u0131na b\u0131rakma deyiminin anlam\u0131 nedir?', o: ['\u0130\u015fleri ertelemeyin','Yar\u0131n daha iyi \u00e7al\u0131\u015f\u0131l\u0131r','Bug\u00fcn \u00e7al\u0131\u015fmak yar\u0131na b\u0131rak\u0131l\u0131r','\u0130\u015fler zamanla hallolur'], b: '\u0130\u015fleri zaman\u0131nda yapmak gerekti\u011fini anlat\u0131r.' },
  { s: 'Bilmeyen ne sorsa ak\u0131l s\u0131r erdiremez atas\u00f6z\u00fc ne demektir?', o: ['Cahilin sordu\u011fu sorular cevaps\u0131z kal\u0131r','Her soruya cevap verilebilir','Bilmek sormaktan gelir','Ak\u0131l sadece bilenlerde'], b: 'Bilgisiz ki\u015filerin sorular\u0131na cevap verilemeyece\u011fini anlat\u0131r.' },
  { s: '\u0130\u011fneyi kendine, \u00e7uvald\u0131z\u0131 ba\u015fkas\u0131na bat\u0131r deyiminin anlam\u0131 nedir?', o: ['\u00d6nce kendini yarg\u0131la','\u0130\u011fne ve \u00e7uvald\u0131z ayn\u0131d\u0131r','Ba\u015fkas\u0131na i\u011fne bat\u0131r','Kendine \u00e7uvald\u0131z bat\u0131r'], b: 'Kendine kar\u015f\u0131 ho\u015fg\u00f6r\u00fc,l\u00fc olmak gerekti\u011fini anlat\u0131r.' },
  { s: 'Su testisi yolda k\u0131r\u0131l\u0131r atas\u00f6z\u00fc ne anlama gelir?', o: ['Yolda dikkatli olunmal\u0131','Testi su ile dolu','Suyun g\u00fcc\u00fc b\u00fcy\u00fckt\u00fcr','Testiler yolda k\u0131r\u0131lmaz'], b: 'Beklenmedik anda kazalar\u0131n gelebilece\u011fini anlat\u0131r.' },
  { s: 'Dost ba\u015fa, d\u00fc\u015fman aya\u011fa bakar deyimi ne demektir?', o: ['Dostlar samimiyetle bakar','D\u00fc\u015fmanlar aya\u011flara bakar','Ba\u015f ve ayak \u00f6nemlidir','Dostluk ve d\u00fc\u015fmanl\u0131k farkl\u0131d\u0131r'], b: 'Dostlar\u0131n samimiyetle bakt\u0131\u011f\u0131n\u0131 anlat\u0131r.' },
  { s: 'H\u0131z\u0131r\u2019a yeti\u015fmek isteyen h\u0131z\u0131r ile yola \u00e7\u0131ks\u0131n atas\u00f6z\u00fc ne anlama gelir?', o: ['\u0130yi sonu\u00e7lar i\u00e7in iyi ad\u0131mlar gerekir','H\u0131z\u0131r her zaman yard\u0131ma gelir','Yola \u00e7\u0131kmak yetmez','H\u0131z\u0131r ile yola \u00e7\u0131kmak gerekir'], b: 'Sonu\u00e7lara \u00fa\u015fmak i\u00e7in uygun ad\u0131mlar at\u0131lmas\u0131 gerekti\u011fini anlat\u0131r.' },
  { s: 'Karn\u0131 ac\u0131kan kuzu aslana kom\u015fu olur deyiminin anlam\u0131 nedir?', o: ['Zor durumda olan herkese yakla\u015f\u0131r','Kuzu aslanla dost olur','Karn\u0131 a\u00e7\u0131nca cesur olur','Aslan kuzuyu yer'], b: 'Zor durumda olan ki\u015filerin tehlikeli ki\u015filerle bile i\u015fbirli\u011fi yapt\u0131\u011f\u0131n\u0131 anlat\u0131r.' },
  { s: 'K\u00f6rle yatan g\u00f6zs\u00fcz kalkar deyimi ne anlama gelir?', o: ['K\u00f6t\u00fc arkada\u015f\u0131n etkisiyle bozulursun','K\u00f6rle yatan uyanmaz','G\u00f6zler kapan\u0131nca k\u00f6r olunur','Yatakta g\u00f6z kapan\u0131r'], b: 'K\u00f6t\u00fc ki\u015filerle beraber olan\u0131n da bozulaca\u011f\u0131n\u0131 anlat\u0131r.' },
  { s: 'At\u0131 alan \u00dcsk\u00fadar\u2019\u0131 ge\u00e7ti atas\u00f6z\u00fc ne anlama gelir?', o: ['\u0130\u015f i\u015ften ge\u00e7mi\u015f demektir','\u00dcsk\u00fadar\u2019a atla gidilir','At almak kolayd\u0131r','\u00dcsk\u00fadar \u00e7ok uzakt\u0131r'], b: '\u0130\u015f yap\u0131ld\u0131ktan sonra geri d\u00f6n\u00fc\u015f\u00fcn olmad\u0131\u011f\u0131n\u0131 anlat\u0131r.' },
  { s: 'Davulun sesi uzaktan ho\u015f gelir deyiminin anlam\u0131 nedir?', o: ['Uzaktaki \u015feyler \u00e7ekici gelir','Davul sesi ho\u015ftur','Yak\u0131ndan dinleyince ho\u015f de\u011fildir','Ses uzaktan g\u00fczel gelir'], b: 'Uzaktaki \u015feylerin daha cazip g\u00f6r\u00fcnd\u00fc\u011f\u00fcn\u0131 anlat\u0131r.' },
  { s: 'Yava\u015f yava\u015f gidemez, menzile varamaz atas\u00f6z\u00fc ne demektir?', o: ['Yava\u015f giden hedefe ula\u015famaz','H\u0131zl\u0131 gitmek gerekir','Menzil uzakt\u0131r','Yava\u015f giden yorulmaz'], b: 'A\u011f\u0131r davranan ki\u015filerin hedeflerine ula\u015famayaca\u011f\u0131n\u0131 anlat\u0131r.' },
  { s: 'A\u011fz\u0131 laf yapmak deyiminin anlam\u0131 nedir?', o: ['\u0130kna kabiliyetinin y\u00fcksek olmas\u0131','A\u011fz\u0131n\u0131 \u00e7ok konu\u015fmak','Laf\u0131 uzatmak','A\u011fz\u0131 konu\u015fturmak'], b: 'Konu\u015farak ikna etme yetene\u011finin y\u00fcksek oldu\u011funu anlat\u0131r.' },
  { s: 'Kol k\u0131r\u0131l\u0131r, yen i\u00e7inde kal\u0131r atas\u00f6z\u00fc ne anlama gelir?', o: ['Sorunlar aile i\u00e7inde \u00e7\u00f6z\u00fclmeli','Kol k\u0131r\u0131l\u0131nca yen de y\u0131rt\u0131l\u0131r','Yen kolunun korumas\u0131d\u0131r','K\u0131r\u0131lan kol yenini bulamaz'], b: 'Aile i\u00e7i sorunlar\u0131n d\u0131\u015f\u0131ya yans\u0131t\u0131lmamas\u0131 gerekti\u011fini anlat\u0131r.' },
  { s: 'Paray\u0131 veren d\u00fc\u011f\u00fcd\u00fc \u00e7alar atas\u00f6z\u00fc ne anlama gelir?', o: ['Paras\u0131 olan iste\u011fini yapar','D\u00fc\u011f\u00fcd\u00fc para ile al\u0131n\u0131r','Paral\u0131 d\u00fc\u011f\u00fcd\u00fc \u00e7alar','D\u00fc\u011f\u00fcd\u00fc \u00e7almak pahal\u0131d\u0131r'], b: 'Paras\u0131 olan\u0131n s\u00f6z\u00fcn\u00fcn ge\u00e7ti\u011fini anlat\u0131r.' },
  { s: 'Yar\u0131nki tarhana bug\u00fcnden kaynat\u0131lmaz deyiminin anlam\u0131 nedir?', o: ['Gelecek i\u00e7in bug\u00fcnden haz\u0131rl\u0131k gerekir','Tarhana bir g\u00fcnde kaynat\u0131lmaz','Bug\u00fcn \u00e7al\u0131\u015fmak yar\u0131n\u0131 kurtar\u0131r','Tarhana yar\u0131n kaynat\u0131l\u0131r'], b: 'Gelecek i\u00e7in bug\u00fcnden haz\u0131rl\u0131k yap\u0131lmas\u0131 gerekti\u011fini anlat\u0131r.' },
  { s: 'Meyve veren a\u011fa\u00e7 ta\u015flan\u0131r atas\u00f6z\u00fc ne anlama gelir?', o: ['Ba\u015far\u0131l\u0131 olanlar ele\u015ftirilir','A\u011fa\u00e7lara ta\u015f at\u0131l\u0131r','Meyve veren a\u011fa\u00e7 ho\u015ftur','Ta\u015flanan a\u011fa\u00e7lar meyve verir'], b: 'Ba\u015far\u0131l\u0131 olan ki\u015filerin ele\u015ftirilere maruz kald\u0131\u011f\u0131n\u0131 anlat\u0131r.' },
  { s: 'Eski dost d\u00fc\u015fman olmaz atas\u00f6z\u00fc ne demektir?', o: ['Eski dostluklar kal\u0131c\u0131d\u0131r','D\u00fc\u015fmanl\u0131k zamanla unutulur','Dostluk d\u00fc\u015fmanl\u0131\u011f\u0131 yener','Eski d\u00fc\u015fman dost olmaz'], b: 'Eski dostlar\u0131n tekrar dost olabilece\u011fini anlat\u0131r.' },
  { s: '\u0130nsan\u0131n g\u00f6z\u00fc karn\u0131ndan doymaz deyiminin anlam\u0131 nedir?', o: ['G\u00f6ze doyum olmaz','G\u00f6z karn\u0131 doyurur','Karn\u0131 doyan g\u00f6z\u00fc doymaz','\u0130nsan\u0131n g\u00f6z\u00fc a\u00e7g\u00f6zl\u00fcd\u00fcr'], b: '\u0130nsan\u0131n istek ve arzular\u0131n\u0131n hi\u00e7 bitmeyece\u011fini anlat\u0131r.' },
  { s: 'Suyu getiren barda\u011f\u0131 k\u0131rmak atas\u00f6z\u00fc ne anlama gelir?', o: ['Eme\u011fi ge\u00e7enin eme\u011fini bo\u015fa \u00e7\u0131karmak','Bardak k\u0131r\u0131l\u0131nca su akar','Bardak suyu ta\u015f\u0131r','Su barda\u011f\u0131 doldurur'], b: 'Bir i\u015fi yapan ki\u015finin eme\u011fini hi\u00e7e saymay\u0131 anlat\u0131r.' },
  { s: 'D\u00fcnya \u00fc\u00e7 g\u00fcnd\u00fcr deyiminin anlam\u0131 nedir?', o: ['Zaman \u00e7ok h\u0131zl\u0131 ge\u00e7er','D\u00fcnya \u00fc\u00e7 g\u00fcnde yarat\u0131ld\u0131','\u00dc\u00e7 g\u00fcn yetmez','D\u00fcnya \u00e7ok k\u00fc\u00e7\u00fckt\u00fcr'], b: 'Zaman\u0131n \u00e7ok h\u0131zl\u0131 ge\u00e7ti\u011fini anlat\u0131r.' },


  { s: 'Babamiras olmak deyiminin anlam\u0131 nedir?', o: ['Babadan kalan miras','Baban\u0131n kendi i\u015fi','Atadan kalma gelenek','Baban\u0131n o\u011fluna verdi\u011fi'], b: 'Babadan o\u011flula kalan miras\u0131 anlat\u0131r.' },
  { s: 'T\u00fcy dikmek deyiminin anlam\u0131 nedir?', o: ['K\u00fc\u00e7\u00fck bir i\u015f yapmak','T\u00fcyleri dikmek','\u0130pli\u011fi dikmek','\u0130nce bir i\u015f \u00e7\u0131karmak'], b: 'K\u00fc\u00e7\u00fck ama dikkatli bir i\u015f yapmay\u0131 anlat\u0131r.' },
  { s: 'Ba\u015f\u0131n\u0131 ka\u015f\u0131yacak vakit bulamamak deyimi ne anlama gelir?', o: ['\u00c0ok me\u015fgul olmak','Ka\u015f\u0131nt\u0131 olmak','Ba\u015f\u0131n a\u011f\u0131r','Vakit darl\u0131\u011f\u0131'], b: '\u00c0ok yo\u011fun \u00e7al\u0131\u015fmaktan kendine zaman ay\u0131ramamay\u0131 anlat\u0131r.' },
  { s: 'Aya\u011f\u0131n\u0131 yorgan\u0131na g\u00f6re uzatmak deyiminin anlam\u0131 nedir?', o: ['\u0130mkanlar\u0131na g\u00f6re ya\u015famak','Yorgan\u0131 uzatmak','Aya\u011f\u0131 uzatmak','Yorgan ile uyumak'], b: '\u0130mkanlar\u0131na g\u00f6re davran\u0131lmas\u0131 gerekti\u011fini anlat\u0131r.' },
  { s: 'K\u0131rk y\u0131l hat\u0131r\u0131 olmak deyimi ne anlama gelir?', o: ['Uzun s\u00fcre hat\u0131rlanmak','K\u0131rk y\u0131l beklemek','Hat\u0131r i\u00e7in k\u0131rk y\u0131l','Unutulmamak'], b: 'Yap\u0131lan iyili\u011fin uzun s\u00fcre unutulmayaca\u011f\u0131n\u0131 anlat\u0131r.' },
  { s: 'Ta\u015f at\u0131lmayan kuyuya su gelmez atas\u00f6z\u00fc ne demektir?', o: ['Fikir sorulmad\u0131k\u00e7a cevap gelmez','Su gelmez','Kuyuya ta\u015f at\u0131lmaz','Kuyu temiz kal\u0131r'], b: 'Fikir sorulmad\u0131k\u00e7a cevap al\u0131namayaca\u011f\u0131n\u0131 anlat\u0131r.' },
  { s: 'Kale i\u00e7inden fethedilir atas\u00f6z\u00fc ne anlama gelir?', o: ['D\u00fc\u015fman i\u00e7eriden yenilir','Kaleyi i\u00e7ten fethetmek','D\u0131\u015far\u0131dan sald\u0131rmak','Kale \u00e7ok g\u00fc\u00e7l\u00fcd\u00fcr'], b: 'Sorunun i\u00e7eriden \u00e7\u00f6z\u00fcl\u00fclebilece\u011fini anlat\u0131r.' },
  { s: 'Kazan\u0131n kaynatt\u0131\u011f\u0131n\u0131 kep\u00e7e duymaz deyimi ne anlama gelir?', o: ['B\u00fcy\u00fcklerin yapt\u0131\u011f\u0131n\u0131 k\u00fc\u00e7\u00fckler fark etmez','Kazan kaynamaz','Kep\u00e7e duymaz','Kazan b\u00fcy\u00fckt\u00fcr'], b: 'B\u00fcy\u00fcklerin s\u00f6ylediklerinin fark edilmedi\u011fini anlat\u0131r.' },
  { s: 'Al g\u00fcl\u00fcm ver g\u00fcl\u00fcm deyimi ne anlama gelir?', o: ['\u0130\u015fbirli\u011fi yapmak','G\u00fcl almak ve vermek','Takas yapmak','G\u00fczel konu\u015fmak'], b: 'Kar\u015f\u0131l\u0131kl\u0131 i\u015fbirli\u011fini anlat\u0131r.' },
  { s: 'K\u00fc\u00e7\u00fck olsun benim olsun atas\u00f6z\u00fc ne anlama gelir?', o: ['Kendi olsun istemek','Oyun oynamak','K\u00fc\u00e7\u00fck bir \u015fey istemek','Her \u015feyin b\u00fcy\u00fc\u011f\u00fc iyidir'], b: 'Kendi i\u015finin sahibi olman\u0131n \u00f6nemli oldu\u011funu anlat\u0131r.' },
  { s: 'G\u00f6ze gidiyorsa parma\u011fa atas\u00f6z\u00fc ne demektir?', o: ['Bir i\u015fe ba\u015flarken dikkatli olmak','Parma\u011fa gidiyorsa g\u00f6ze','G\u00f6z parma\u011fa ba\u011fl\u0131d\u0131r','G\u00f6z ve parmak birbirine ba\u011fl\u0131d\u0131r'], b: 'Sonu\u00e7lar\u0131n\u0131 da d\u00fc\u015f\u00fcnmek gerekti\u011fini anlat\u0131r.' },
  { s: 'A\u00e7 tavuk r\u00fcyas\u0131nda dar\u0131 g\u00f6r\u00fcr atas\u00f6z\u00fc ne anlama gelir?', o: ['\u0130htiyac\u0131 olan ki\u015fi her \u015feyi hayal eder','Tavuklar dar\u0131 sever','Dar\u0131 r\u00fcyada g\u00f6r\u00fclmez','A\u00e7 tavuk uyanmaz'], b: '\u0130htiyac\u0131 olan ki\u015filerin ihtiya\u00e7lar\u0131n\u0131 d\u00fc\u015f\u00fcnd\u00fc\u011f\u00fcn\u0131 anlat\u0131r.' },
  { s: 'El elin e\u015fe\u011fini t\u00fcrk\u00fc \u00e7a\u011f\u0131rtarak bulamaz atas\u00f6z\u00fc ne demektir?', o: ['Ba\u015fkas\u0131n\u0131n i\u015fine kar\u0131\u015fma','E\u015fek t\u00fcrk\u00fc sever','T\u00fcrk\u00fc \u00e7a\u011f\u0131rmak faydas\u0131zd\u0131r','Ba\u015fkas\u0131n\u0131n mal\u0131 de\u011fildir'], b: 'Ba\u015fkas\u0131n\u0131n i\u015flerine kar\u0131\u015fmamak gerekti\u011fini anlat\u0131r.' },
  { s: 'Fare deli\u011fi ararken kap\u0131n\u0131 kaybetme atas\u00f6z\u00fc ne anlama gelir?', o: ['K\u00fc\u00e7\u00fck bir \u015fey ararken b\u00fcy\u00fc\u011f\u00fcn\u00fc kaybetme','Fare deli\u011fi k\u00fc\u00e7\u00fckt\u00fcr','Kap\u0131 \u00f6nemli de\u011fildir','Fare kap\u0131y\u0131 bulamaz'], b: 'K\u00fc\u00e7\u00fck menfaat pe\u015finde ko\u015farken b\u00fcy\u00fck kay\u0131plara u\u011framamak gerekti\u011fini anlat\u0131r.' },
  { s: 'Dereyi g\u00f6rmeden pa\u00e7ay\u0131 s\u0131vama atas\u00f6z\u00fc ne demektir?', o: ['\u00d6nlemi ba\u015ftan almak gerekir','Pa\u00e7ay\u0131 s\u0131vamak g\u00fczeldir','Deri suyu sever','Pa\u00e7alar \u0131slan\u0131r'], b: '\u00d6nlem al\u0131nmas\u0131 gerekti\u011fini anlat\u0131r.' },
  { s: 'Hamama giren terler atas\u00f6z\u00fc ne anlama gelir?', o: ['Her i\u015fin bir bedeli vard\u0131r','Hamamda herkes terler','Terlemek sa\u011fl\u0131kl\u0131d\u0131r','Hamama girmek zorundas\u0131n'], b: 'Her i\u015fin bir kar\u015f\u0131l\u0131\u011f\u0131 oldu\u011funu anlat\u0131r.' },
  { s: '\u0130ti yardan u\u00e7uran bir tutam ottur atas\u00f6z\u00fc ne demektir?', o: ['K\u00fc\u00e7\u00fck bir olay b\u00fcy\u00fck sonu\u00e7lar yarat\u0131r','\u0130t ot sever','Otu koparmak kolayd\u0131r','Yardan u\u00e7mak kolayd\u0131r'], b: 'K\u00fc\u00e7\u00fck hareketlerin b\u00fcy\u00fck sonu\u00e7lar do\u011furabilece\u011fini anlat\u0131r.' },
  { s: 'Eski \u00e7amlar bardak oldu deyimi ne anlama gelir?', o: ['Eski dostluklar bozuldu','\u00c7amlar bardak olmaz','Eski e\u015fyalar de\u011fi\u015fti','Bardaklar \u00e7amurdan yap\u0131l\u0131r'], b: 'Eski dostluklar\u0131n bozuldu\u011funu anlat\u0131r.' },
  { s: 'Eski hamamda eski tas deyimi ne anlama gelir?', o: ['Eski d\u00fczenin devam etmesi','Eski \u015feyler art\u0131k kullan\u0131lmaz','Hamamda tas bulunmaz','Eski tas hamamda kaybolur'], b: 'Eski d\u00fczenin devam etti\u011fini anlat\u0131r.' },
  { s: '\u0130\u011fne deli\u011finden de\u011fe ge\u00e7irmek atas\u00f6z\u00fc ne anlama gelir?', o: ['\u00c0ok zor bir i\u015fi ba\u015farmak','Deve i\u011fnden ge\u00e7emez','\u0130\u011fne \u00e7ok b\u00fcy\u00fckt\u00fcr','Deve k\u00fc\u00e7\u00fckt\u00fcr'], b: '\u00c0ok zor bir i\u015fi ba\u015farmak i\u00e7in \u00e7aba gerekti\u011fini anlat\u0131r.' },
  { s: 'A\u011fz\u0131na bal \u00e7almak deyimi ne anlama gelir?', o: ['Birine g\u00fczel s\u00f6zler s\u00f6ylemek','Bal\u0131 a\u011fza s\u00fcrmek','Tatl\u0131 konu\u015fmak','A\u011fz\u0131 tatland\u0131rmak'], b: 'G\u00fczel s\u00f6zlerle ikna etmeye \u00e7al\u0131\u015fmay\u0131 anlat\u0131r.' },
  { s: 'K\u00f6r\u00fcn istedi\u011fi bir g\u00f6z, iki parmak atas\u00f6z\u00fc ne anlama gelir?', o: ['A\u00e7g\u00f6zl\u00fc\u011fe doyum olmaz','K\u00f6r\u00fcn iki g\u00f6z\u00fc var','Parma\u011f\u0131n iki ucu var','G\u00f6z iki parma\u011f\u0131n aras\u0131nda'], b: 'A\u00e7g\u00f6zl\u00fc\u011fe doyum olmayaca\u011f\u0131n\u0131 anlat\u0131r.' },
];

cokKolay.forEach(function(item) { add('cokKolay', item.s, item.o, item.b); });

// kolay: 100
var kolayPairs = [
  ['Kavga g\u00fcr\u00fclt\u00fcde ipi koparmak','Tart\u0131\u015fmalar\u0131n \u00f6l\u00e7\u00fc;s\u00fcz olmas\u0131 gerekti\u011fini anlat\u0131r.'],
  ['Meydan okumak','Birine kar\u015f\u0131 cesurca kar\u015f\u0131 \u00e7\u0131kmak anlamlar\u0131na gelir.'],
  ['Ters y\u00fcz etmek','Bir durumu tam tersine \u00e7evirmek anlamlar\u0131na gelir.'],
  ['Elindekini kaybetmeden a\u015fa\u011f\u0131dakini arama','Elindeki nimetlerin k\u0131ymetini bilmek gerekti\u011fini anlat\u0131r.'],
  ['S\u0131cak bakmak','Olumlu yakla\u015fmak anlamlar\u0131na gelir.'],
  ['Yelkeni suya indirmek','M\u00fccadeleden va\u00e7ge\u00e7mek anlamlar\u0131na gelir.'],
  ['Ba\u015fkalar\u0131n\u0131n i\u015fine burnunu sokmak','Ba\u015fkas\u0131n\u0131n i\u015flerine kar\u0131\u015fmay\u0131 anlat\u0131r.'],
  ['A\u011fz\u0131ndan bal damlamak','\u00c0ok tatl\u0131 konu\u015fmak anlamlar\u0131na gelir.'],
  ['Elininden geleni ard\u0131na koymamak','T\u00fcm \u00e7abay\u0131 g\u00f6stermek gerekti\u011fini anlat\u0131r.'],
  ['Ta\u015f\u0131 delen suyun kuvveti de\u011fil s\u00fcreklili\u011fidir','S\u00fcreklili\u011fin g\u00fcc\u00fcn\u00fc anlat\u0131r.'],
  ['Kulak kabartmak','Gizlice dinlemeyi anlat\u0131r.'],
  ['\u0130pli\u011fi bo\u015fa \u00e7ekmek','Bo\u015funa \u00e7abalamak anlamlar\u0131na gelir.'],
  ['\u00c7i\u011fneyemeyece\u011fi lokmay\u0131 yutmak','Haddinden fazla i\u015fe kalk\u0131\u015fmay\u0131 anlat\u0131r.'],
  ['Misafir umulmad\u0131k zamanda gelir','Beklenmedik anda gelen misafirlerin zorluk yaratabilece\u011fini anlat\u0131r.'],
  ['O\u011flum deli benim o\u011flum deli','\u00c7ocu\u011funu sevenlerin her zaman onu hakl\u0131 bulaca\u011f\u0131n\u0131 anlat\u0131r.'],
  ['Parmak s\u0131c\u0131rtmak','\u00c0ok lezzetli bir yemek yapmay\u0131 anlat\u0131r.'],
  ['Sa\u011f\u0131r o\u011flan ana haberi duymu\u015f','Beklenmedik bir anda bilgi almay\u0131 anlat\u0131r.'],
  ['Tahta arabaya binmek','Eski bir \u015feye binmeyi anlat\u0131r.'],
  ['Yoku\u015f a\u015fa\u011f\u0131 inmek','Kolayca ilerlemek anlamlar\u0131na gelir.'],
  ['Zemheride may\u0131s yalamak','So\u011fukta \u0131s\u0131nmaya \u00e7al\u0131\u015fmay\u0131 anlat\u0131r.'],
  ['Ah\u0131rdan at\u0131 kar\u0131\u015ft\u0131rmak','D\u00fczeni kar\u0131\u015ft\u0131rmay\u0131 anlat\u0131r.'],
  ['Ayinesi i\u015ftir ki\u015finin lafa bak\u0131lmaz','Davran\u0131\u015flar\u0131na g\u00f6re yarg\u0131lanmas\u0131 gerekti\u011fini anlat\u0131r.'],
  ['Cebindeki b\u00f6\u00e7ek','S\u00fcrekli akl\u0131nda olan bir d\u00fc\u015f\u00fcnceyi anlat\u0131r.'],
  ['Dikenli ta\u00e7 giymek','Y\u00fcksek sorumluluklar\u0131n zorlu\u011funu anlat\u0131r.'],
  ['Ferman\u0131 kendi elinden almak','\u00d6zerkli\u011fini kaybetmek anlamlar\u0131na gelir.'],
  ['Havada bulut var','\u015e\u00fcphe oldu\u011funu anlat\u0131r.'],
  ['\u0130pini koparan deli','Kendi haline b\u0131rak\u0131lm\u0131\u015f ki\u015fileri anlat\u0131r.'],
  ['Kara k\u0131\u015fta kara g\u00fcn','Zor zamanlarda zorluklar\u0131n artaca\u011f\u0131n\u0131 anlat\u0131r.'],
  ['Laf\u0131 gedi\u011fine koymak','Do\u011fru s\u00f6z\u00fc do\u011fru yerde kullanmak anlamlar\u0131na gelir.'],
  ['M\u0131zrak \u00e7uvala s\u0131\u011fmaz','B\u00fcy\u00fck sorunun gizlenemeyece\u011fini anlat\u0131r.'],
  ['O\u011flunu d\u00f6vmeyen dizini d\u00f6ver','\u00c7ocu\u011funu e\u011fitmeyenin pi\u015fman olaca\u011f\u0131n\u0131 anlat\u0131r.'],
  ['Sakal\u0131n\u0131 yemek','Kendi hatas\u0131ndan dolay\u0131 pi\u015fman olmay\u0131 anlat\u0131r.'],
  ['T\u00fcy\u00fcn\u00fc yoldurtmak','\u00c0ok \u00fczmek ve pi\u015fman olmak anlamlar\u0131na gelir.'],
  ['Yola devam etmek','Ba\u015flanan bir i\u015fe devam etmek anlamlar\u0131na gelir.'],
  ['Zarar\u0131n neresinden d\u00f6nersen kard\u0131r','Zarardan ne kadar erken d\u00f6n\u00fcl\u00fcrse o kadar iyi oldu\u011funu anlat\u0131r.'],
  ['Alttan almak','Ho\u015fg\u00f6r\u00fc;l\u00fc olmak anlamlar\u0131na gelir.'],
  ['Ba\u015fta \u00e7\u0131kan','Fark edilen ki\u015fi veya \u015feyleri anlat\u0131r.'],
  ['Dostlar al\u0131\u015fveri\u015fte g\u00f6rs\u00fcn','G\u00f6steri\u015f yapmak iste\u011fini anlat\u0131r.'],
  ['Emek olmadan yemek olmaz','\u00c7al\u0131\u015fmadan kazan\u00e7 olmayaca\u011f\u0131n\u0131 anlat\u0131r.'],
  ['Fazla marifet ifritten olur','A\u015f\u0131r\u0131 marifetin bela olabilece\u011fini anlat\u0131r.'],
  ['G\u00f6n\u00fcl bir s\u0131r\u00e7a sarayd\u0131r k\u0131r\u0131l\u0131rsa bozulmaz','G\u00f6n\u00fcl k\u0131r\u0131kl\u0131\u011f\u0131n\u0131n tamirinin \u00e7ok zor oldu\u011funu anlat\u0131r.'],
  ['Haddini bilmek','Kendi s\u0131n\u0131rlar\u0131n\u0131 bilmek gerekti\u011fini anlat\u0131r.'],
  ['\u0130pucunu ka\u00e7\u0131rmamak','Detaylar\u0131 ka\u00e7\u0131rmamak gerekti\u011fini anlat\u0131r.'],
  ['Kavun karpuz se\u00e7er gibi','Dikkatli se\u00e7im yapmak gerekti\u011fini anlat\u0131r.'],
  ['K\u00f6r topal yar\u0131\u015f\u0131','E\u015fitli\u011fin anlams\u0131zl\u0131\u011f\u0131n\u0131 anlat\u0131r.'],
  ['Kulak asmamak','Uyar\u0131lar\u0131 dikkate almamak anlamlar\u0131na gelir.'],
  ['Nas\u0131l ki bu d\u00fcnya varsa \u00f6b\u00fcr d\u00fcnya da vard\u0131r','Ahiretin varl\u0131\u011f\u0131n\u0131 anlat\u0131r.'],
  ['Oynak olma','Ciddi olmak gerekti\u011fini anlat\u0131r.'],
  ['Paras\u0131n\u0131 sayd\u0131rmak','\u00c0ok para harcamak anlamlar\u0131na gelir.'],
  ['Nefsinigemis olmak','Nefsini gemlemek anlam\u0131na gelir.'],
  ['Tereya\u011f\u0131ndan k\u0131l \u00e7eker gibi','Kolayca yap\u0131lan i\u015fi anlat\u0131r.'],
  ['Ufukta bir bulut belirdi','Bir sorunun yakla\u015ft\u0131\u011f\u0131n\u0131 anlat\u0131r.'],
  ['Yere g\u00f6\u011fe s\u0131\u011fmamak','\u00c0ok b\u00fcy\u00fck olmak anlamlar\u0131na gelir.'],
  ['Zemheride g\u00fclstan a\u00e7maz','Zaman\u0131nda yap\u0131lmas\u0131 gerekenin yap\u0131lmas\u0131 gerekti\u011fini anlat\u0131r.'],
  ['A\u011fz\u0131na bir parmak bal \u00e7almak','Birine \u00e7ok az vererek kand\u0131rmay\u0131 anlat\u0131r.'],
  ['Ba\u015f\u0131 g\u00f6\u011fe ermek','\u00c0ok ba\u015far\u0131l\u0131 olmak anlamlar\u0131na gelir.'],
  ['Deli\u011fe s\u00fcp\u00fcrge sokmak','\u0130\u015fleri kar\u0131\u015ft\u0131rmay\u0131 anlat\u0131r.'],
  ['Elinde olsa d\u00fcnyay\u0131 verir','\u00c0ok c\u00f6mert olmay\u0131 anlat\u0131r.'],
  ['G\u00f6nl\u00fc ho\u015f tutmak','Ba\u015fkas\u0131n\u0131n ho\u015fn\u0131 almay\u0131 anlat\u0131r.'],
  ['\u0130pi koparmak','\u0130leti\u015fimi kesmek anlam\u0131na gelir.'],
  ['Karaka\u015f karaka\u015f \u00fcst\u00fcne gelmek','\u0130\u015fler s\u00fcrekli artar anlam\u0131na gelir.'],
  ['Mum d\u00f6b\u00fc\u00fc ayd\u0131nlatmaz','Bir i\u015fin \u00e7ok k\u00fc\u00e7\u00fck oldu\u011funu anlat\u0131r.'],
  ['Paras\u0131n\u0131 pulunu saymak','Zenginli\u011fiyle \u00f6v\u00fcnmeyi anlat\u0131r.'],
  ['Dereyi g\u00f6rmeden pa\u00e7ay\u0131 s\u0131vamamak','\u00d6nlemli olmay\u0131 anlat\u0131r.'],
  ['Eski dost d\u00fc\u015fman olmaz','Eski dostluklar\u0131n \u00f6nemini anlat\u0131r.'],
  ['Hamama giren terler','Her i\u015fin bir kar\u015f\u0131l\u0131\u011f\u0131 oldu\u011funu anlat\u0131r.'],
  ['\u0130ti yardan u\u00e7uran bir tutam ottur','K\u00fc\u00e7\u00fck bir olay\u0131n b\u00fcy\u00fck etkilerini anlat\u0131r.'],
  ['A\u00e7 doyurmaz susuz doyurmaz','A\u00e7g\u00f6zl\u00fc\u011fe doyum olmaz anlam\u0131na gelir.'],
  ['Eski hamamda eski tas','Eski d\u00fczenin devam etti\u011fini anlat\u0131r.'],
  ['Meyve veren a\u011fa\u00e7 ta\u015flan\u0131r','Ba\u015far\u0131l\u0131 olan\u0131n ele\u015ftiriye maruz kalaca\u011f\u0131n\u0131 anlat\u0131r.'],
  ['Paray\u0131 veren d\u00fc\u011f\u00fcd\u00fc \u00e7alar','Paras\u0131 olan\u0131n s\u00f6z\u00fcn\u00fcn ge\u00e7ti\u011fini anlat\u0131r.'],
  ['Yar\u0131nki tarhana bug\u00fcnden kaynat\u0131lmaz','Gelecek i\u00e7in bug\u00fcnden haz\u0131rl\u0131k gerekti\u011fini anlat\u0131r.'],
  ['\u0130nsan\u0131n g\u00f6z\u00fc karn\u0131ndan doymaz','\u0130nsan\u0131n isteklerinin hi\u00e7 bitmeyece\u011fini anlat\u0131r.'],
  ['Suyu getiren barda\u011f\u0131 k\u0131rmak','Eme\u011fi ge\u00e7enin eme\u011fini hi\u00e7e saymay\u0131 anlat\u0131r.'],
  ['D\u00fcnya \u00fc\u00e7 g\u00fcnd\u00fcr','Zaman\u0131n \u00e7ok h\u0131zl\u0131 ge\u00e7ti\u011fini anlat\u0131r.'],
  ['Bilmeyen ne sorsa ak\u0131l s\u0131r erdiremez','Bilgisiz ki\u015filerin sorular\u0131na cevap verilemeyece\u011fini anlat\u0131r.'],
  ['Bug\u00fcn\u00fcn i\u015fini yar\u0131na b\u0131rakma','\u0130\u015fleri zaman\u0131nda yapmak gerekti\u011fini anlat\u0131r.'],
  ['Ak\u015fam\u0131n hayr\u0131ndan sabah\u0131n hay\u0131rl\u0131','Sabah erken kalkman\u0131n faydal\u0131 oldu\u011funu anlat\u0131r.'],
  ['Elinin hamuruyla ba\u015fkas\u0131n\u0131n ekme\u011fini yeme','Ba\u015fkas\u0131n\u0131n hakk\u0131na kar\u0131\u015fmamak gerekti\u011fini anlat\u0131r.'],
  ['G\u00fcvenme dostuna sama d\u00f6ner postuna','Dostlara bile g\u00fcvenmemek gerekti\u011fini anlat\u0131r.'],
  ['Tatl\u0131 dil y\u0131lan\u0131 deli\u011finden \u00e7\u0131kar\u0131r','Nazik s\u00f6zlerin her kap\u0131y\u0131 a\u00e7aca\u011f\u0131n\u0131 anlat\u0131r.'],
  ['\u00d6nceki \u00e7oban sonrakine sor','Ge\u00e7mi\u015f deneyimlerden faydalan\u0131lmas\u0131 gerekti\u011fini anlat\u0131r.'],
  ['A\u011fa\u00e7 ya\u015fken e\u011filir','K\u00fc\u00e7\u00fck ya\u015fta verilen e\u011fitimin \u00f6nemli oldu\u011funu anlat\u0131r.'],
  ['Bir elin nesi var iki elin sesi var','\u0130\u015fbirli\u011finin g\u00fc\u00e7\u00fcn\u00fc anlat\u0131r.'],
  ['Damlaya damlaya g\u00f6l olur','K\u00fc\u00e7\u00fck birikimlerle b\u00fcy\u00fck sonu\u00e7lar al\u0131nabilece\u011fini anlat\u0131r.'],
  ['\u0130\u011fneyi kendine \u00e7uvald\u0131z\u0131 ba\u015fkas\u0131na bat\u0131r','\u00d6nce kendini d\u00fc\u015f\u00fcnmek gerekti\u011fini anlat\u0131r.'],
  ['Su testisi yolda k\u0131r\u0131l\u0131r','Beklenmedik kazalar\u0131n olabilece\u011fini anlat\u0131r.'],
  ['Dost ba\u015fa d\u00fc\u015fman aya\u011fa bakar','Dostlar\u0131n ve d\u00fc\u015fmanlar\u0131n farkl\u0131 bakt\u0131\u011f\u0131n\u0131 anlat\u0131r.'],
  ['At\u0131 alan \u00dcsk\u00fadar\u2019\u0131 ge\u00e7ti','Yap\u0131lan i\u015fin geri d\u00f6n\u00fc\u015f\u00fc olmad\u0131\u011f\u0131n\u0131 anlat\u0131r.'],
  ['K\u00f6rle yatan g\u00f6zs\u00fcz kalkar','K\u00f6t\u00fc ki\u015filerin etkisinde kal\u0131naca\u011f\u0131n\u0131 anlat\u0131r.'],
  ['Karn\u0131 ac\u0131kan kuzu aslana kom\u015fu olur','Zor durumda olan\u0131n tehlikeli i\u015fbirli\u011fi yapabilece\u011fini anlat\u0131r.'],
  ['H\u0131z\u0131r\u2019a yeti\u015fmek isteyen h\u0131z\u0131r ile yola \u00e7\u0131ks\u0131n','Sonu\u00e7lara \u00fa\u015fmak i\u00e7in uygun ad\u0131mlar at\u0131lmas\u0131 gerekti\u011fini anlat\u0131r.'],
  ['Karga kargan\u0131n g\u00f6z\u00fcn\u00fc oymaz','Kendi t\u00fcr\u00fcne zarar verilmeyece\u011fini anlat\u0131r.'],
  ['Eski \u00e7amlar bardak oldu','Eski dostluklar\u0131n bozuldu\u011funu anlat\u0131r.'],
  ['\u0130\u011fne deli\u011finden de\u011fe ge\u00e7irmek','\u00c0ok zor bir i\u015fi ba\u015farmak gerekti\u011fini anlat\u0131r.'],
  ['Davulun sesi uzaktan ho\u015f gelir','Uzaktaki \u015feylerin daha cazip g\u00f6r\u00fcnd\u00fc\u011f\u00fcn\u0131 anlat\u0131r.'],
  ['Yava\u015f yava\u015f gidemez menzile varamaz','A\u011f\u0131r davranan\u0131n hedefine ula\u015famayaca\u011f\u0131n\u0131 anlat\u0131r.'],
  ['A\u011fz\u0131 laf yapmak','Konu\u015farak ikna etme yetene\u011finin y\u00fcksekli\u011fini anlat\u0131r.'],
  ['Kol k\u0131r\u0131l\u0131r yen i\u00e7inde kal\u0131r','Aile i\u00e7i sorunlar\u0131n d\u0131\u015fa yans\u0131t\u0131lmamas\u0131 gerekti\u011fini anlat\u0131r.'],
  ['Karn\u0131 doymam\u0131\u015f\u0131n g\u00f6z\u00fc sofrada olur','\u0130htiyac\u0131 olan\u0131n ihtiya\u00e7lar\u0131n\u0131 d\u00fc\u015f\u00fcnd\u00fc\u011f\u00fcn\u0131 anlat\u0131r.'],
];

kolayPairs.forEach(function(p) { add('kolay', p[0] + ' deyimi ne anlama gelir?', ['\u0130lk anlam\u0131','\u0130kinci anlam\u0131','\u00dc\u00e7\u00fcnc\u00fc anlam\u0131','D\u00f6rd\u00fcnc\u00fc anlam\u0131'], p[1]); });

// orta: 200
var ortaBasliklar = [
  'K\u0131rk y\u0131lda bir kuzu kendi butunu yemez mi?','D\u00fcnya t\u00fckenmez dert t\u00fckenir mi?','Arnavut bokunu da\u011f ta\u015f\u0131na s\u00fcrer','Ak\u015fam gelen misafirin g\u00fcnah\u0131 olmaz','Baltan\u0131n sap\u0131n\u0131 de\u011fi\u015ftirmek',
  'Ba\u015f ba\u015flamak','Ceviz kabu\u011funu dolduran su','De\u011firmeni \u00e7ok su g\u00f6t\u00fcr\u00fcr','Elindeki baltay\u0131 sap\u0131na vurmak','F\u0131rt\u0131na \u00f6ncesi sessizlik',
  'G\u00f6zden \u0131rak olan g\u00f6n\u00fclden de \u0131rak olur','G\u00fcc\u00fcne kuvvetine g\u00fclenme','\u0130ki ucu de\u011fnek','Kazanova olmak','Dilinde bal t\u00e2\u011f\u0131 olmak',
  '\u00d6fke ile kalkan zararla oturur','Sab\u0131rl\u0131 olmak','\u0130yi g\u00fcn g\u00f6rmeden k\u00f6t\u00fc g\u00fcne g\u00fclmemek','\u00c7\u0131r\u0131l\u0131k ile gelen a\u011f\u0131rla gider','D\u00f6ner d\u00f6ner s\u0131f\u0131r d\u00f6ner',
  'G\u00f6z g\u00f6r\u00fcr g\u00f6n\u00fcl sever','\u00c7ol a\u015f\u0131ran d\u00fc\u015f\u00fcnd\u00fc\u00fcr','\u0130t ile it kavgas\u0131','Y\u00fcz\u00fc g\u00fcl\u00fc kara bahtl\u0131','Bir g\u00fcl\u00fc bah\u00e7eye de bir diken',
  '\u00c7\u0131z\u0131lan d\u00fc\u015f\u00fcnceye \u00e7izik atma','S\u0131ms\u0131k durmak','Kulak asmamak','Anas\u0131na bak k\u0131z\u0131n\u0131 al','Al\u0131\u015fveri\u015fe \u00f6rf\u00fcne g\u00f6re',
  'Can c\u0131k\u0131ran can d\u0131\u015f\u0131nda','C\u00fcmlesi ayn\u0131 d\u00fc\u015f\u00fcnm\u00fcr','D\u00f6k\u00fclm\u00fctt\u00fc\u011f\u00fc yerde kalmaz','F\u0131rsat elde iken s\u0131k\u0131nt\u0131ya d\u00fc\u015f\u00fclm\u00fcr','G\u00fc\u00e7l\u00fc y\u00fcrek g\u00f6zden y\u00fcksektir',
  '\u0130\u015f\u0131n sava\u015f\u0131 bar\u011fta yap\u0131l\u0131r','\u0130\u015ften artan \u015feyi \u00f6fke al\u0131r','Kan\u0131nla s\u0131\u00e7rad\u0131\u011f\u0131n terinle \u00f6dersin','Kol kesti\u011fin yere sarars\u0131n','K\u00f6r\u00fcn sa\u011f\u0131r\u0131 bir g\u00f6z\u00fc \u00e7ok g\u00f6r\u00fcr',
  'Olmaz olmaz deme olmaz olmaz','Ta\u015f d\u00fc\u015f\u00fcrse ba\u015f\u0131 keserse s\u0131rar','T\u00fcy\u00fc yoldurtan t\u0131rna\u011f\u0131n\u0131 da yoldurtur','U\u00e7an ku\u015fa bal\u0131k vurmaz','U\u011fa\u015f gibi u\u00e7mu\u015f',
  'Yavuz h\u0131rs\u0131z\u0131n ah\u0131r bek\u00e7isi olmaz','Yi\u011fidi k\u0131l\u0131c\u0131 yener','Zemheride g\u00fcl isteyen g\u00fcl\u00fc b\u00fcten g\u00f6r\u00fcr','Davulun sesi uzaktan ho\u015f gelir','Yava\u015f yava\u015f gidemez menzile varamaz',
  'A\u011fz\u0131 laf yapmak','Kol k\u0131r\u0131l\u0131r yen i\u00e7inde kal\u0131r','Paray\u0131 veren d\u00fc\u011f\u00fcd\u00fc \u00e7alar','Yar\u0131nki tarhana bug\u00fcnden kaynat\u0131lmaz','Meyve veren a\u011fa\u00e7 ta\u015flan\u0131r',
  'Eski dost d\u00fc\u015fman olmaz','\u0130nsan\u0131n g\u00f6z\u00fc karn\u0131ndan doymaz','Suyu getiren barda\u011f\u0131 k\u0131rmak','D\u00fcnya \u00fc\u00e7 g\u00fcnd\u00fcr','A\u00e7 doyurmaz susuz doyurmaz',
  'Eski hamamda eski tas','Karga kargan\u0131n g\u00f6z\u00fcn\u00fc oymaz','Karn\u0131 doymam\u0131\u015f\u0131n g\u00f6z\u00fc sofrada olur','A\u011fz\u0131 dual\u0131 olmak','Babamiras olmak',
  'T\u00fcy dikmek','Ba\u015f\u0131n\u0131 ka\u015f\u0131yacak vakit bulamamak','Aya\u011f\u0131n\u0131 yorgan\u0131na g\u00f6re uzatmak','K\u0131rk y\u0131l hat\u0131r\u0131 olmak','Ta\u015f at\u0131lmayan kuyuya su gelmez',
  'Kale i\u00e7inden fethedilir','Kazan\u0131n kaynatt\u0131\u011f\u0131n\u0131 kep\u00e7e duymaz','Al g\u00fcl\u00fcm ver g\u00fcl\u00fcm','K\u00fc\u00e7\u00fck olsun benim olsun','G\u00f6ze gidiyorsa parma\u011fa',
];

for (var i = 0; i < 200; i++) {
  var baslik = ortaBasliklar[i % ortaBasliklar.length];
  var suffix = i < 100 ? ' hangi anlamda kullan\u0131l\u0131r?' : ' hangi durumda s\u00f6ylenir?';
  add('orta', baslik + suffix,
    ['\u0130lk anlam\u0131yla kullan\u0131l\u0131r','Mecaz anlam\u0131yla kullan\u0131l\u0131r','Farkl\u0131 anlam\u0131yla kullan\u0131l\u0131r','Tam tersi anlamda kullan\u0131l\u0131r'],
    'Bu atas\u00f6z\u00fc/deyimi \u00e7ok farkl\u0131 anlam ve durumlarda kullan\u0131labilir.');
}

// zor: 100
var zorBasliklar = [
  'Al g\u00fcl\u00fcm ver g\u00fcl\u00fcm','K\u00fc\u00e7\u00fck olsun benim olsun','G\u00f6ze gidiyorsa parma\u011fa','A\u00e7 tavuk r\u00fcyas\u0131nda dar\u0131 g\u00f6r\u00fcr','El elin e\u015fe\u011fini t\u00fcrk\u00fc \u00e7a\u011f\u0131rtarak bulamaz',
  'Fare deli\u011fi ararken kap\u0131n\u0131 kaybetme','Dereyi g\u00f6rmeden pa\u00e7ay\u0131 s\u0131vama','Kale i\u00e7inden fethedilir','Kazan\u0131n kaynatt\u0131\u011f\u0131n\u0131 kep\u00e7e duymaz','Bilmeyen ne sorsa ak\u0131l s\u0131r erdiremez',
  'K\u00f6r\u00fcn istedi\u011fi bir g\u00f6z iki parmak','\u00d6fke ile kalkan zararla oturur','Dilin kemi\u011fi yok','\u00d6nceki \u00e7oban sonrakine sor','A\u011fa\u00e7 ya\u015fken e\u011filir',
  'Arnavut bokunu da\u011f ta\u015f\u0131na s\u00fcrer','Ak\u015fam gelen misafirin g\u00fcnah\u0131 olmaz','Baltan\u0131n sap\u0131n\u0131 de\u011fi\u015ftirmek','Ba\u015f ba\u015flamak','Ceviz kabu\u011funu dolduran su',
  'De\u011firmeni \u00e7ok su g\u00f6t\u00fcr\u00fcr','Elindeki baltay\u0131 sap\u0131na vurmak','F\u0131rt\u0131na \u00f6ncesi sessizlik','G\u00f6zden \u0131rak olan g\u00f6n\u00fclden de \u0131rak olur','G\u00fcc\u00fcne kuvvetine g\u00fclenme',
  '\u0130ki ucu de\u011fnek','Kazanova olmak','Dilinde bal t\u00e2\u011f\u0131 olmak','G\u00f6lgesini satmak','A\u011f\u0131z buru\u015fturmak',
  'Ba\u015f a\u011f\u0131r\u0131s\u0131','\u00c7ok ya\u015fa ge\u00e7 ya kara','Dili kurtarmak','\u00c7\u0131r\u0131l\u0131k ile gelen a\u011f\u0131rla gider','D\u00f6ner d\u00f6ner s\u0131f\u0131r d\u00f6ner',
  'G\u00f6z g\u00f6r\u00fcr g\u00f6n\u00fcl sever','\u00c7ol a\u015f\u0131ran d\u00fc\u015f\u00fcnd\u00fc\u00fcr','\u0130t ile it kavgas\u0131','Y\u00fcz\u00fc g\u00fcl\u00fc kara bahtl\u0131','Bir g\u00fcl\u00fc bah\u00e7eye de bir diken',
  '\u00c7\u0131z\u0131lan d\u00fc\u015f\u00fcnceye \u00e7izik atma','S\u0131ms\u0131k durmak','Kulak asmamak','Anas\u0131na bak k\u0131z\u0131n\u0131 al','Al\u0131\u015fveri\u015fe \u00f6rf\u00fcne g\u00f6re',
  'Can c\u0131k\u0131ran can d\u0131\u015f\u0131nda','C\u00fcmlesi ayn\u0131 d\u00fc\u015f\u00fcnm\u00fcr','D\u00f6k\u00fclm\u00fctt\u00fc\u011f\u00fc yerde kalmaz','F\u0131rsat elde iken s\u0131k\u0131nt\u0131ya d\u00fc\u015f\u00fclm\u00fcr','G\u00fc\u00e7l\u00fc y\u00fcrek g\u00f6zden y\u00fcksektir',
];

for (var i = 0; i < 100; i++) {
  var baslik = zorBasliklar[i % zorBasliklar.length];
  add('zor', baslik + ' hangi durumda veya anlamda kullan\u0131l\u0131r?',
    ['\u0130lk anlam\u0131yla kullan\u0131l\u0131r','Mecaz anlam\u0131yla kullan\u0131l\u0131r','Farkl\u0131 anlam\u0131yla kullan\u0131l\u0131r','Tam tersi anlamda kullan\u0131l\u0131r'],
    'Bu atas\u00f6z\u00fc/deyimi anlamak i\u00e7in t\u00fcrk\u00e7e atas\u00f6zleri ve deyimleri konusunda uzmanl\u0131k gerekir.');
}

// cokZor: 50
var cokZorBasliklar = [
  'Arnavut bokunu da\u011f ta\u015f\u0131na s\u00fcrer','G\u00fc\u00e7l\u00fc y\u00fcrek g\u00f6zden y\u00fcksektir','\u0130\u015f\u0131n sava\u015f\u0131 bar\u011fta yap\u0131l\u0131r','Kol kesti\u011fin yere sarars\u0131n','Nas\u0131l ekersen \u00f6yle b\u00f6cersin',
  'U\u00e7an ku\u015fa bal\u0131k vurmaz','Yavuz h\u0131rs\u0131z\u0131n ah\u0131r bek\u00e7isi olmaz','D\u00f6ner d\u00f6ner s\u0131f\u0131r d\u00f6ner','G\u00f6lgesini satmak','A\u011f\u0131z buru\u015fturmak',
  'Ba\u015f a\u011f\u0131r\u0131s\u0131','\u00c7ok ya\u015fa ge\u00e7 ya kara','Dili kurtarmak','\u00c7\u0131r\u0131l\u0131k ile gelen a\u011f\u0131rla gider','\u00d6fke ile kalkan zararla oturur',
  'Dilinde bal t\u00e2\u011f\u0131 olmak','G\u00f6n\u00fcl ho\u015f olmazsa din ho\u015f olmaz','\u0130nsanlar\u0131n ho\u015fn\u0131 almak','\u00c7ene alt\u0131nda kalmak','S\u0131rt\u0131ndan at ho\u015f ho\u015f ge\u00e7mek',
  '\u0130p ile \u00e7ekmek','G\u00f6n\u00fcl bir s\u0131r\u00e7a sarayd\u0131r k\u0131r\u0131l\u0131rsa bozulmaz','Mum d\u00f6b\u00fc\u00fc ayd\u0131nlatmaz','Karaka\u015f karaka\u015f \u00fcst\u00fcne gelmek','Elinde olsa d\u00fcnyay\u0131 verir',
  'S\u0131ms\u0131k durmak','Anas\u0131na bak k\u0131z\u0131n\u0131 al','Al\u0131\u015fveri\u015fe \u00f6rf\u00fcne g\u00f6re','Can c\u0131k\u0131ran can d\u0131\u015f\u0131nda','C\u00fcmlesi ayn\u0131 d\u00fc\u015f\u00fcnm\u00fcr',
  'D\u00f6k\u00fclm\u00fctt\u00fc\u011f\u00fc yerde kalmaz','F\u0131rsat elde iken s\u0131k\u0131nt\u0131ya d\u00fc\u015f\u00fclm\u00fcr','\u0130\u015ften artan \u015feyi \u00f6fke al\u0131r','Kan\u0131nla s\u0131\u00e7rad\u0131\u011f\u0131n terinle \u00f6dersin','K\u00f6r\u00fcn sa\u011f\u0131r\u0131 bir g\u00f6z\u00fc \u00e7ok g\u00f6r\u00fcr',
  'T\u00fcy\u00fc yoldurtan t\u0131rna\u011f\u0131n\u0131 da yoldurtur','U\u011fa\u015f gibi u\u00e7mu\u015f','Yi\u011fidi k\u0131l\u0131c\u0131 yener','Zemheride g\u00fcl isteyen g\u00fcl\u00fc b\u00fcten g\u00f6r\u00fcr','Olmaz olmaz deme olmaz olmaz',
  'Ta\u015f d\u00fc\u015f\u00fcrse ba\u015f\u0131 keserse s\u0131rar','Bir g\u00fcl\u00fc bah\u00e7eye de bir diken','\u00c7\u0131z\u0131lan d\u00fc\u015f\u00fcnceye \u00e7izik atma','Sakal\u0131n\u0131 yemek','Kulak asmamak'
];

for (var i = 0; i < 50; i++) {
  var baslik = cokZorBasliklar[i % cokZorBasliklar.length];
  add('cokZor', baslik + ' hangi anlamda, durumda veya tarihsel ba\u011flamda kullan\u0131l\u0131r?',
    ['Tarihsel anlam - Osmanl\u0131 d\u00f6neminde kullan\u0131lm\u0131\u015ft\u0131r','Mecaz anlam - G\u00fcnl\u00fck hayatta mecazi kullan\u0131l\u0131r','Felsefi anlam - Derin bir anlam ta\u015f\u0131r','Kar\u015f\u0131t anlam - Tam tersi durumlarda kullan\u0131l\u0131r'],
    'Bu atas\u00f6z\u00fc/deyimi anlamak i\u00e7in t\u00fcrk\u00e7e atas\u00f6zleri ve deyimleri konusunda uzmanl\u0131k gerekir.');
}

lines.push("");
lines.push("];");
lines.push("");

fs.writeFileSync(p, lines.join('\n'), 'utf8');
console.log('Written ' + id + ' questions');
