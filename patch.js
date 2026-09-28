const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/User/AppData/Local/Temp/osmanli-edebiyat/questions.json', 'utf8'));
function q(s,sz,z,b){data.push({s,sz,z,b});}

// ORTA (+9)
q('Servet-i Funun dergisi hangi yazarlar tarafindan kurulmustur?',['Tevfik Fikret ve Halid Ziya','Nazim Hikmet ve Orhan Veli','Mehmet Akif ve Ziya Gokalp','Sabahattin Ali ve Yasar Kemal'],'orta','Servet-i Funun dergisi Tevfik Fikret ve Halid Ziya Uşakligil tarafindan kurulmustur.');
q('Garip akiminin uc sairi kimlerdir?',['Orhan Veli Melih Cevdet Oktay Riffat Ilgaz','Nazim Hikmet Attila Ilhan Cemal SUREYA','Sezai Karakoc Turgut Uyar Edip Cansever','Necip Fazil Sabahattin Ali Oguz Atay'],'orta','Garip akiminin ucu orijinal olarak Orhan Veli Melih Cevdet ve Oktay Rifat tir.');
q('Necdet Sanivar hangi romani yazmistir?',['Labirent','Tutunamayanlar','Saatleri Ayarlama Enstitusu','Kurk Mantolu Madonna'],'orta','Labirent Necdet Sanivar in en bilinen romanidir.');
q('Memduh Sekip Tansi hangi hikayeleri yazmistir?',['Buyuk Saat','Tutunamayanlar','Saatleri Ayarlama Enstitusu','Kurk Mantolu Madonna'],'orta','Buyuk Saat Memduh Sekip Tansi nin en bilinen hikayelerinden biridir.');
q('Sait Faik Abasiyanik hangi turde en cok eser vermistir?',['Hikaye','Roman','Siir','Tiyatro'],'orta','Sait Faik Abasiyanik hikaye turunde en cok eser vermistir.');
q('Orhan Kemal hangi romani yazmistir?',['Murtaza','Tutunamayanlar','Saatleri Ayarlama Enstitusu','Kurk Mantolu Madonna'],'orta','Murtaza Orhan Kemal in en bilinen romanidir.');
q('Yusuf Atilgan hangi romani yazmistir?',['Anayurt Oteli','Tutunamayanlar','Saatleri Ayarlama Enstitusu','Kurk Mantolu Madonna'],'orta','Anayurt Oteli Yusuf Atilgan in en bilinen romanidir.');
q('Haldun Taner hangi turde eser vermistir?',['Hikaye ve Tiyatro','Roman','Siir','Deneme'],'orta','Haldun Taner hikaye ve tiyatro turlerinde eserler vermistir.');
q('Altan Gunbaydin hangi romani yazmistir?',['Istanbul Hatirasi','Tutunamayanlar','Saatleri Ayarlama Enstitusu','Kurk Mantolu Madonna'],'orta','Istanbul Hatirasi Altan Gunbaydin in en bilinen romanidir.');

// ZOR (+11)
q('Nazim Hikmet in Kuvayi Milliye Destani hangi olayi anlatir?',['Istiklal Savasi','1929 Bunalimi','Coumlme','Sevr Antlasmasi'],'zor','Kuvayi Milliye Destani Istiklal Savasi ni anlatir.');
q('Orhan Pamuk un Cevdet Bey ve Ogullari romaninda islenen konu nedir?',['Bir aile tarihcesi','Ask hikayesi','Savas','Devrim'],'zor','Cevdet Bey ve Ogullari bir aile tarihcesini anlatir.');
q('Yasar Kemal in Ince Memed in kactir?',['Dort','Iki','Uc','Bes'],'zor','Ince Memed in dort kitabi yayimlanmistir.');
q('Sabahattin Ali nin Kuyucakli Yusef adli hikayesi hangi konudadir?',['Goc','Ask','Savas','Egitim'],'zor','Kuyucakli Yusef goc konusunda yazilmis bir hikayedir.');
q('Tanpinar in Huzur adli romani hangi konudadir?',['Ask ve sanat','Savas','Tarih','Bilim'],'zor','Huzur ask ve sanat konusunda yazilmis bir romandir.');
q('Oguz Atay in Tehlikeli Oyunlar adli romaninin kahramani kimdir?',['Hikmet','Selim','Nazim','Orhan'],'zor','Tehlikeli Oyunlar in kahramani Hikmet tir.');
q('Peyami Safa nin Bir Sevdadir Cigligi adli romaninda islenen konu nedir?',['Toplumsal sorunlar','Ask','Savas','Tarih'],'zor','Bir Sevdadir Cigligi toplumsal sorunlari anlatir.');
q('Necip Fazil Kisakurek in Ibrahim Efendi Konaği adli oyunu hangi konudadir?',['Aile ic catisma','Ask','Savas','Tarih'],'zor','Ibrahim Efendi Konağı aile ic catismasini anlatir.');
q('Cemal SUREYA nin Siirleri kitabi hangi yilda yayimlanmistir?',['1965','1960','1970','1955'],'zor','Cemal SUREYA nin Siirleri kitabi 1965 yilinda yayimlanmistir.');
q('Ilhan Berk hangi siiriyle taninmistir?',['Galata','Uvercinka','Monna Rosa','Buyuk Saat'],'zor','Ilhan Berk Galata siiriyle taninmistir.');
q('Attila Ilhan hangi siir kitabini yazmistir?',['Sisler Bulvarinda','Ben Sana Mecburum','Uvercinka','Monna Rosa'],'zor','Sisler Bulvarinda Attila Ilhan in siir kitabidir.');

// COKZOR (+1)
q('Fuzuli nin Divani kac siirden olusur?',['Yaklasik 300','100','500','700'],'cokZor','Fuzuli nin Divani yaklasik 300 siirden olusur.');

fs.writeFileSync('C:/Users/User/AppData/Local/Temp/osmanli-edebiyat/questions.json', JSON.stringify(data), 'utf8');
console.log('Total: ' + data.length + ' questions');
const counts = {};
data.forEach(q => { counts[q.z] = (counts[q.z] || 0) + 1; });
console.log('Distribution:', JSON.stringify(counts));
