const fs = require('fs');
const p = 'C:\\Users\\User\\AppData\\Local\\Temp\\osmanli-edebiyat\\src\\data\\kategoriler\\sairler-yazarlar.ts';
let c = fs.readFileSync(p,'utf8').trimEnd();
if(c.endsWith(';')) c=c.slice(0,-1).trimEnd();
if(c.endsWith(']')) c=c.slice(0,-1).trimEnd();

function q(id,s,o,b){
const z=id<='sy050'?'cokKolay':id<='sy150'?'kolay':id<='sy350'?'orta':id<='sy450'?'zor':'cokZor';
return '  { id: \''+id+'\', soru: "'+s+'", secenekler: ['+o.map(x=>'"'+x+'"').join(', ')+'], dogruCevap: '+o._c+', kategori: \'Şairler & Yazarlar\', zorluk: \''+z+'\', bilgi: "'+b+'" },';
}

const L=[];
