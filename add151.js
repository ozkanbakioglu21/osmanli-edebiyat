const fs = require('fs');
const p = String.raw`C:\Users\User\AppData\Local\Temp\osmanli-edebiyat\src\data\kategoriler\dunya-edebiyati.ts`;
let c = fs.readFileSync(p, 'utf8').trimEnd();
if (c.endsWith(';')) c = c.slice(0, -1).trimEnd();

const rows = [];

rows.push({i:'de151',q:'Homeros\'un Ilyada\'sinda Paris hangi kahramani oldurur?',o:['Akhilleus','Ajax','Patroclus','Hektor'],b:'Paris, Patroclus\'u oldurur.'});
rows.push({i:'de152',q:'Shakespeare\'in Hamlet oyununda Rosencrantz ve Guildenstern kimin casuslaridir?',o:['Hamlet','Claudius','Gertrude','Polonius'],b:'Claudius tarafindan gonderilirler.'});
rows.push({i:'de153',q:'Dante\'nin Ilahi Komedya\'sinda Ugolino kimdir?',o:['Bir general','Bir kont','Bir piskopos','Bir tuccar'],b:'Ugolino, Pisa kontudur.'});
rows.push({i:'de154',q:'Tolstoy\'un Savas ve Baris romaninda Borodino Muharebesi ne zaman gerceklesir?',o:['1805','1812','1815','1820'],b:'Borodino 1812\'de olmustur.'});
rows.push({i:'de155',q:'Dostoyevski\'nin Ecinniler romaninda Pyotr Stepanovich kimdir?',o:['Bir devrimci','Bir cifci','Bir general','Bir papaz'],b:'Pyotr, Nihilist bir devrimcidir.'});
rows.push({i:'de156',q:'Kafka\'nin Sato romaninda K.\'nin meslegi nedir?',o:['Avukat','Kadastro muhendisi','Mimar','Doktor'],b:'K., kadastro muhendisidir.'});
rows.push({i:'de157',q:'Orwell\'in 1984 romaninda memory hole nedir?',o:['Bir delik','Bellek silme cihazi','Bir hucre','Bir dolap'],b:'Eski belgelerin yok edildigi cihazdir.'});
rows.push({i:'de158',q:'Hemingway\'in Veda Silahi romaninda Catherine Barkley kimdir?',o:['Bir hemfire','Bir ogretmen','Bir subay','Bir multeci'],b:'Catherine, bir Ingiliz hemfiresidir.'});
rows.push({i:'de159',q:'Garcia Marquez\'in Yuzyillik Yalinlik romaninda Ursula kac yasina kadar yasar?',o:['80','100','115','120'],b:'Ursula 115 yasina kadar yasar.'});
rows.push({i:'de160',q:'Sophokles\'in Filoktetes tragediasinda Herakles ne zaman gorunur?',o:['Basta','Ortada','Sonda','Hic'],b:'Herakles, oyunun sonunda gorunur.'});
rows.push({i:'de161',q:'Shakespeare\'in Macbeth oyununda Lady Macbeth hangi sucu isler?',o:['Cinayet','Hirsizlik','Zehirleme','Ihanet'],b:'Lady Macbeth, suca ortak olur.'});
rows.push({i:'de162',q:'Dante\'nin Ilahi Komedya\'sinda Canto XXXIV\'te Lucifer nasil gorunur?',o:['Insan suretinde','Uc yuzlu dev','Bir yilan','Bir melek'],b:'Lucifer, uc yuzlu devasa figurdur.'});
rows.push({i:'de163',q:'Tolstoy\'un Anna Karenina romaninda Levin hangi konuda yazar?',o:['Felsefe','Ziraat','Edebiyat','Tarih'],b:'Levin, ziraat uzerine yazar.'});
rows.push({i:'de164',q:'Dostoyevski\'nin Karamazov Kardesleri romaninda Zosima hangi unvandadir?',o:['Papaz','Kesif','Bishop','Din adami'],b:'Zosima, bilge bir kesiftir.'});
rows.push({i:'de165',q:'Kafka\'nin Dava romaninda court painter ne anlama gelir?',o:['Bir ressam','Mahkeme uyesi','Bir tanik','Bir avukat'],b:'Mahkeme uyelerinden biridir.'});
rows.push({i:'de166',q:'Orwell\'in 1984 romaninda Emmanuel Goldstein kimdir?',o:['Bir devlet memuru','Parti dusmani','Bir general','Bir bilim insani'],b:'Goldstein, Parti\'nin dusmanidir.'});
rows.push({i:'de167',q:'Hemingway\'in Canlar Kimin Icin Caliyor romaninda Anselmo kimdir?',o:['Bir rehber','Bir general','Bir cifci','Bir tercuman'],b:'Anselmo, partizan rehberdir.'});
rows.push({i:'de168',q:'Garcia Marquez\'in Yuzyillik Yalinlik romaninda Amaranta kimdir?',o:['Bir anne','Bir kiz kardesi','Bir hizmetci','Bir kralice'],b:'Amaranta, bir kiz kardesidir.'});
rows.push({i:'de169',q:'Sophokles\'in Oedipus tragediasinda Oedipus hangi bilmecyi cozer?',o:['Sfenksin bilmesecini','Kahinin bilmesecini','Bir koyluun bilmesecini','Tanrinin bilmesecini'],b:'Sfenksin bilmesecini cozer.'});
rows.push({i:'de170',q:'Shakespeare\'in Othello oyununda Desdemona nasil oldurur?',o:['Zehirle','Bogularak','Kilicala','Gureserek'],b:'Othello, Desdemona\'yi bogarak oldurur.'});
rows.push({i:'de171',q:'Dante\'nin Ilahi Komedya\'sinda Francesca da Rimini hangi gunahin cezasini ceker?',o:['Hirsizlik','Zina','Gurur','Ofke'],b:'Zina gunahinin cezasini ceker.'});
rows.push({i:'de172',q:'Tolstoy\'un Dirilis romaninda Nekhlyudov neden vicdan azabi ceker?',o:['Katyusha\'ya yaptigi haksizlik','Savasta isledigi sucular','Ailesine ihanet','Yalan soylemesi'],b:'Gencindeki haksizlik icin.'});
rows.push({i:'de173',q:'Dostoyevski\'nin Suc ve Ceza romaninda Raskolnikov neden cinayeti isledigini soyler?',o:['Para icin','Yuksek insan olmak icin','Intikam icin','Delirdigi icin'],b:'Yuksek insan teorisini test etmek icin.'});
rows.push({i:'de174',q:'Kafka\'nin Donusum romaninda Gregor\'un babasi ona ne yapar?',o:['Sevgiyle yaklasir','Bir elma firlandir','Kapiyi kilitler','Doktora goturur'],b:'Babasi bir elma firlandir.'});
rows.push({i:'de175',q:'Orwell\'in 1984 romaninda Winston Smith neden tutuklanir?',o:['Hirsizlik','Partiye karsi gelmek','Cinayet','Vergi kacirma'],b:'Partiye karsi Geldigi icin.'});
rows.push({i:'de176',q:'Hemingway\'in Beyaz Tasli Bahce romaninda Madrid hangi savas sirasinda bombalanir?',o:['Birinci Dunya Savasi','Ispanya Ic Savasi','Ikinci Dunya Savasi','Napolyon Savaslari'],b:'Ispanya Ic Savasi sirasinda.'});
rows.push({i:'de177',q:'Garcia Marquez\'in Kolera Gunlerinde Ask romaninda koleraannin sembolu nedir?',o:['Olum','Ask','Yalinlik','Hasret'],b:'Ask temsil eder.'});
rows.push({i:'de178',q:'Sophokles\'in Electra tragediasinda Electra\'nin annesi kimdir?',o:['Jokasta','Klytemnestra','Antigone','Clytemnestra'],b:'Klytemnestra, annesidir.'});
rows.push({i:'de179',q:'Shakespeare\'in Kral Lear oyununda Lear hangi kitaya surgune gider?',o:['Fransa','Irlanda','Galler','Almanya'],b:'Lear, Fransa\'ya gider.'});
rows.push({i:'de180',q:'Dante\'nin Ilahi Komedya\'sinda Canto V\'te hangi karakterin hikayesi anlatilir?',o:['Ulysses','Francesca da Rimini','Farinata','Brunetto'],b:'Francesca da Rimini\'nin hikayesi.'});
rows.push({i:'de181',q:'Tolstoy\'un Savas ve Baris romaninda Rostov ailesinin reisi kimdir?',o:['Bir kont','Bir general','Bir tuccar','Bir diplomat'],b:'Rostov kontu.'});
rows.push({i:'de182',q:'Dostoyevski\'nin Budala romaninda Rogojin kimdir?',o:['Bir aristokrat','Bir tuccar','Bir general','Bir avukat'],b:'Zengin bir tuccardir.'});
rows.push({i:'de183',q:'Kafka\'nin Dava romaninda K.\'ya yuklenen suclama nedir?',o:['Hirsizlik','Cinayet','Dolandiricilik','Bilinmiyor'],b:'Suclama belirsizdir.'});
rows.push({i:'de184',q:'Orwell\'in 1984 romaninda vaporize olmak ne anlama gelir?',o:['Buhar olmak','Yok edilmek','Surgune edilmek','Hapse atilmak'],b:'Tamamen yok edilmek.'});
rows.push({i:'de185',q:'Hemingway\'in Yasli Adam ve Deniz romaninda Santiago hangi sembolu temsil eder?',o:['Yalinlik','Direnis','Zenginlik','Mutluluk'],b:'Dogaya karsi direnis.'});
rows.push({i:'de186',q:'Garcia Marquez\'in Yuzyillik Yalinlik romaninda Aureliano Segundo kimdir?',o:['Bir general','Bir tuccar','Bir cifci','Bir bilim insani'],b:'Zengin bir tuccardir.'});
rows.push({i:'de187',q:'Sophokles\'in Oedipus tragediasinda Oedipus hangi kralin yerine gecer?',o:['Laios','Kreon','Polybus','Creon'],b:'Laios\'un yerine gecer.'});
rows.push({i:'de188',q:'Shakespeare\'in Macbeth oyununda Macbeth hangi krali oldurur?',o:['Iskoc krali Duncan','Ingiltere krali','Norvec krali','Irlanda krali'],b:'Kral Duncan\'i oldurur.'});
rows.push({i:'de189',q:'Dante\'nin Ilahi Komedya\'sinda Canto X\'te hangi gunahin cezasi anlatilir?',o:['Zina','Gurur','Hirsizlik','Ofke'],b:'Gurur gunahi.'});
rows.push({i:'de190',q:'Tolstoy\'un Anna Karenina romaninda Anna neden intihar eder?',o:['Vronsky\'den ayrildigi icin','Toplumsal baski','Hastalik','Ekonomik sorunlar'],b:'Toplumsal baski.'});
rows.push({i:'de191',q:'Dostoyevski\'nin Ecinniler romaninda Kirillov kimdir?',o:['Bir general','Bir mimar','Bir doktor','Bir avukat'],b:'Bir mimar.'});
rows.push({i:'de192',q:'Kafka\'nin Sato romaninda K.\'nin yardimcisinin adi nedir?',o:['Arthur','Jeremias','Friedrich','Wilhelm'],b:'Jeremias.'});
rows.push({i:'de193',q:'Orwell\'in 1984 romaninda Two Minutes Hate nedir?',o:['Iki dakikalik nefret rituelleri','Iki dakikalik ders','Iki dakikalik tatil','Iki dakikalik toplanti'],b:'Nefret ritueli.'});
rows.push({i:'de194',q:'Hemingway\'in Guneste Dogar romaninda hangi edebi akillin etkisi hissedilir?',o:['Romantizm','Kayip Nesil','Modernizm','Realizm'],b:'Kayip Nesil.'});
rows.push({i:'de195',q:'Garcia Marquez\'in Yuzyillik Yalinlik romaninda Colonel Aureliano kac cocuga sahibi olur?',o:['On yedi','Yirmi','Otuz','Kirk'],b:'On yedi erkek cocuk.'});
rows.push({i:'de196',q:'Sophokles\'in Antigone tragediasinda Haemon kimdir?',o:['Kreon\'un oglu','Antigone\'nin babasi','Bir general','Bir kahin'],b:'Kreon\'un oglu.'});
rows.push({i:'de197',q:'Shakespeare\'in Venedik Tircaci oyununda Antonio neden borc alir?',o:['Ticaret icin','Bassanio icin','Kendisi icin','Ailesi icin'],b:'Bassanio icin.'});
rows.push({i:'de198',q:'Dante\'nin Ilahi Komedya\'sinda cimriler hangi halkadadir?',o:['Dorduncu','Besinci','Altinci','Yedinci'],b:'Dorduncu halkada.'});
rows.push({i:'de199',q:'Tolstoy\'un Savas ve Baris romaninda Austerlitz Muharebesi ne zaman olur?',o:['1805','1812','1815','1820'],b:'1805 yilinda.'});
rows.push({i:'de200',q:'Dostoyevski\'nin Karamazov Kardesleri romaninda Smerdyakov kimin ogludur?',o:['Dmitri\'nin','Ivan\'in','Alyosa\'nin','Fyodor\'un'],b:'Fyodor\'un gayri mefru oglu.'});

function esc(s){return s.replace(/'/g,"\\'")}
const lines = rows.map(r => {
  const opts = r.o.map(o => "'"+esc(o)+"'").join(',');
  return "  { id: '"+r.i+"', soru: '"+esc(r.q)+"', secenekler: ["+opts+"], dogruCevap: 0, kategori: 'Dunya Edebiyati', zorluk: 'orta', bilgi: '"+esc(r.b)+"' },";
});

fs.writeFileSync(p, c + '\n' + lines.join('\n') + '\n];\n', 'utf8');
console.log('Batch 1 done: de151-de200, total 200');
