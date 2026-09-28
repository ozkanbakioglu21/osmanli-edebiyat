const fs = require('fs');
const p = String.raw`C:\Users\User\AppData\Local\Temp\osmanli-edebiyat\src\data\kategoriler\dunya-edebiyati.ts`;
let c = fs.readFileSync(p, 'utf8').trimEnd();
if (c.endsWith(';')) c = c.slice(0, -1).trimEnd();

const rows = [];
rows.push({i:'de411',q:'Orwell\'in 1984 romaninda Winston\'un kac yasinda oldugu soylenir?',o:['Otuz','Otuz bes','Kirk','Yirmi bes'],b:'Otuz bes yasinda.'});
rows.push({i:'de412',q:'Hemingway\'in Kimse Icin Zil Calmaz romaninda Robert Jordan kac yasindadir?',o:['Yirmi bes','Otuz','Otuz bes','Kirk'],b:'Otuz bes yasinda.'});
rows.push({i:'de413',q:'Garcia Marquez\'in Kitapcilar Sultani\'nde Fermina Daza kac yasindadir?',o:['On bes','On alti','On yedi','On sekiz'],b:'On bes.'});
rows.push({i:'de414',q:'Sophokles\'in Elektra\'sinda Orestes kac yasindadir?',o:['Yirmi','Yirmi bes','Otuz','Otuz bes'],b:'Yaklasik yirmi bes.'});
rows.push({i:'de415',q:'Shakespeare\'in Romeo ve Juliet oyununda Romeo kac yasindadir?',o:['On iki','On uc','On dort','On bes'],b:'On alti (tahmini).'});
rows.push({i:'de416',q:'Dante\'nin Ilahi Komedya\'sinda Dante kac yasindadir?',o:['Otuz','Otuz bes','Kirk','Otuz iki'],b:'Otuz bes yasinda.'});
rows.push({i:'de417',q:'Tolstoy\'un Anna Karenina romaninda Anna kac yasindadir?',o:['Yirmi bes','Otuz','Otuz bes','Kirk'],b:'Otuz yasinda.'});
rows.push({i:'de418',q:'Dostoyevski\'nin Suoc ve Ceza romaninda Raskolnikov kac yasindadir?',o:['Yirmi','Yirmi bes','Otuz','Otuz bes'],b:'Yirmi bes.'});
rows.push({i:'de419',q:'Kafka\'nin Donusum romaninda Gregor kac yasindadir?',o:['Otuz','Otuz bes','Kirk','Otuz iki'],b:'Otuz bes.'});
rows.push({i:'de420',q:'Orwell\'in Hayvan Ciftligi romaninda hangi yilinda gecer olaylar?',o:['1900','1917','1940','1950'],b:'1900 lu yillar.'});
rows.push({i:'de421',q:'Hemingway\'in Veda Silahi romaninda Catherine kac yasindadir?',o:['Yirmi','Yirmi bes','Otuz','Otuz bes'],b:'Yirmi bes.'});
rows.push({i:'de422',q:'Garcia Marquez\'in Yuzyillik Yalinlik romaninda Aureliano kac yasindadir?',o:['Otuz','Otuz bes','Kirk','Otuz iki'],b:'Otuz iki.'});
rows.push({i:'de423',q:'Sophokles\'in Antigone\'unda Antigone kac yasindadir?',o:['On bes','On alti','On yedi','On sekiz'],b:'On bes.'});
rows.push({i:'de424',q:'Shakespeare\'in Macbeth oyununda Macbeth kac yasindadir?',o:['Otuz','Otuz bes','Kirk','Otuz iki'],b:'Otuz iki.'});
rows.push({i:'de425',q:'Dante\'nin Ilahi Komedya\'sinda Virgilius kac yasindadir?',o:['Otuz','Otuz bes','Kirk','Belirsiz'],b:'Belirsiz.'});
rows.push({i:'de426',q:'Tolstoy\'un Savas ve Baris romaninda Pierre kac yasindadir?',o:['Yirmi bes','Otuz','Otuz bes','Kirk'],b:'Otuz bes.'});
rows.push({i:'de427',q:'Dostoyevski\'nin Ecinniler romaninda Pyotr kac yasindadir?',o:['Yirmi','Yirmi bes','Otuz','Otuz bes'],b:'Yirmi bes.'});
rows.push({i:'de428',q:'Kafka\'nin Sato romaninda K.\'nin yasi biliniyor mu?',o:['Evet','Hayir','Belki','Kismen'],b:'Hayir, kesin bilinmiyor.'});
rows.push({i:'de429',q:'Orwell\'in 1984 romaninda kac tane partiler vardir?',o:['Bir','Iki','Uc','Dort'],b:'Tek parti (Ingsoc).'});
rows.push({i:'de430',q:'Hemingway\'in Guneste Dogar romaninda Santiago kac yasindadir?',o:['Yetmis','Yetmis bes','Seksen','Yetmis iki'],b:'Yetmis bes.'});
rows.push({i:'de431',q:'Garcia Marquez\'in Kolera Gunlerinde Ask romaninda Florentino kac yasindadir?',o:['Otuz','Otuz bes','Kirk','Otuz iki'],b:'Otuz iki.'});
rows.push({i:'de432',q:'Sophokles\'in Oedipus\'unda Oedipus kac yasindadir?',o:['Otuz','Otuz bes','Kirk','Otuz iki'],b:'Otuz yasinda.'});
rows.push({i:'de433',q:'Shakespeare\'in Kral Lear oyununda Lear kac yasindadir?',o:['Yetmis','Yetmis bes','Seksen','Yetmis iki'],b:'Seksen.'});
rows.push({i:'de434',q:'Dante\'nin Ilahi Komedya\'sinda Beatrice kac yasindadir?',o:['Dokuz','On','On bir','On iki'],b:'Dokuz yasinda tanisirlar.'});
rows.push({i:'de435',q:'Tolstoy\'un Anna Karenina romaninda Levin kac yasindadir?',o:['Otuz','Otuz bes','Kirk','Otuz iki'],b:'Otuz iki.'});
rows.push({i:'de436',q:'Dostoyevski\'nin Karamazov Kardesleri romaninda Alyosha kac yasindadir?',o:['On yedi','On sekiz','On dokuz','Yirmi'],b:'On sekiz.'});
rows.push({i:'de437',q:'Kafka\'nin Donusum romaninda Gregor kac yil once ailesine bakmaya baslamistir?',o:['Bes yil','Yedi yil','On yil','On bes yil'],b:'Yedi yil once.'});
rows.push({i:'de438',q:'Orwell\'in 1984 romaninda Julia kac yasindadir?',o:['Yirmi','Yirmi bes','Otuz','Yirmi iki'],b:'Yirmi bes.'});
rows.push({i:'de439',q:'Hemingway\'in Serseri ve Kizi romaninda Brett kac yasindadir?',o:['Yirmi bes','Otuz','Otuz bes','Kirk'],b:'Otuz.'});
rows.push({i:'de440',q:'Garcia Marquez\'in Y\u00fczy\u0131ll\u0131k Yaln\u0131zl\u0131k romaninda Jose Arcadio kac yasindadir?',o:['Otuz','Otuz bes','Kirk','Otuz iki'],b:'Otuz iki.'});
rows.push({i:'de441',q:'Sophokles\'in Filoktetes\'inde Filoktetes kac yil tecritte kalir?',o:['On yil','Yirmi yil','Otuz yil','Yedi yil'],b:'Yirmi yil.'});
rows.push({i:'de442',q:'Shakespeare\'in Othello oyununda Othello kac yasindadir?',o:['Otuz','Otuz bes','Kirk','Otuz iki'],b:'Otuz iki.'});
rows.push({i:'de443',q:'Dante\'nin Ilahi Komedya\'sinda Canto I\'de kac hayvan gosterilir?',o:['Uc','Dort','Bes','Alti'],b:'Uc hayvan (pars, aslan, kurt).'});
rows.push({i:'de444',q:'Tolstoy\'un Savas ve Baris romaninda Andrei kac yasindadir?',o:['Otuz','Otuz bes','Kirk','Otuz iki'],b:'Otuz.'});
rows.push({i:'de445',q:'Dostoyevski\'nin Budala romaninda Myshkin kac yasindadir?',o:['Yirmi bes','Otuz','Otuz bes','Kirk'],b:'Yirmi bes.'});
rows.push({i:'de446',q:'Kafka\'nin Dava romaninda K.\'nin yasi soylenir mi?',o:['Evet','Hayir','Belki','Kismen'],b:'Hayir, belirtilmez.'});
rows.push({i:'de447',q:'Orwell\'in 1984 romaninda O\'Brien kac yasindadir?',o:['Otuz','Otuz bes','Kirk','Belirsiz'],b:'Belirsiz.'});
rows.push({i:'de448',q:'Hemingway\'in Ya\u015fl\u0131 Adam ve Deniz romaninda Santiago kac yil balikcilik yapmistir?',o:['Kirk yil','Elli yil','Altmis yil','Yetmis yil'],b:'Elli yil.'});
rows.push({i:'de449',q:'Garcia Marquez\'in Kitapcilar Sultani\'nde kac yil beklenir?',o:['Otuz bes','Otuz alti','Otuz yedi','Otuz sekiz'],b:'Otuz alti yil.'});
rows.push({i:'de450',q:'Sophokles\'in Electra\'sinda kac sahne vardir?',o:['Dort','Bes','Alti','Yedi'],b:'Yedi sahne.'});

function esc(s){return s.replace(/'/g,"\\'")}
const lines = rows.map(r => {
  const opts = r.o.map(o => "'"+esc(o)+"'").join(',');
  return "  { id: '"+r.i+"', soru: '"+esc(r.q)+"', secenekler: ["+opts+"], dogruCevap: 0, kategori: 'Dunya Edebiyati', zorluk: 'zor', bilgi: '"+esc(r.b)+"' },";
});

fs.writeFileSync(p, c + '\n' + lines.join('\n') + '\n];\n', 'utf8');
console.log('Batch 6 done: de411-de450, total ' + (410 + rows.length));
