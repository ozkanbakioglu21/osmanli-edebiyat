const fs = require('fs');
const c = fs.readFileSync(String.raw`C:\Users\User\AppData\Local\Temp\osmanli-edebiyat\src\data\kategoriler\dunya-edebiyati.ts`, 'utf8');
const m = c.match(/id: 'de\d+'/g);
console.log('Total IDs:', m ? m.length : 0);
const ids = m ? m.map(x => x.match(/\d+/)[0]) : [];
const sorted = [...new Set(ids)].sort((a,b) => parseInt(a) - parseInt(b));
console.log('Unique IDs:', sorted.length);
console.log('First:', sorted[0], 'Last:', sorted[sorted.length-1]);
const gaps = [];
for (let i = 1; i < sorted.length; i++) {
  if (parseInt(sorted[i]) !== parseInt(sorted[i-1]) + 1) gaps.push(sorted[i-1] + '->' + sorted[i]);
}
if (gaps.length) console.log('Gaps:', gaps.join(', '));
else console.log('No gaps');
console.log('Last line:', c.trim().split('\n').pop());
const zorluklar = {};
c.split('\n').forEach(l => {
  const z = l.match(/zorluk: '([^']+)'/);
  if (z) zorluklar[z[1]] = (zorluklar[z[1]] || 0) + 1;
});
console.log('Zorluk distribution:', zorluklar);
