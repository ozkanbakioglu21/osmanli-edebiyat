const fs = require('fs');
const Q = [];
let id = 0;
function q(s,sz,z,b){Q.push({id:'sy'+String(++id).padStart(3,'0'),s,sz,z,b});}

// Will be loaded from data file
const dataPath = 'C:/Users/User/AppData/Local/Temp/osmanli-edebiyat/questions.json';
if (fs.existsSync(dataPath)) {
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  data.forEach(item => q(item.s, item.sz, item.z, item.b));
}

const out = ["export const sairlerYazarlarSorulari = ["];
Q.forEach(q => {
  const line = "  { id: '" + q.id + "', soru: " + JSON.stringify(q.s) + ", secenekler: " + JSON.stringify(q.sz) + ", dogruCevap: 0, kategori: 'Şairler & Yazarlar', zorluk: '" + q.z + "', bilgi: " + JSON.stringify(q.b) + " },";
  out.push(line);
});
out.push("];");
out.push("");
fs.writeFileSync('C:/Users/User/AppData/Local/Temp/osmanli-edebiyat/src/data/kategoriler/sairler-yazarlar.ts', out.join('\n'), 'utf8');
console.log('Generated ' + Q.length + ' questions');
const counts = {};
Q.forEach(q => { counts[q.z] = (counts[q.z] || 0) + 1; });
console.log('Distribution:', JSON.stringify(counts));
