const fs = require('fs');
const c = fs.readFileSync(String.raw`C:\Users\User\AppData\Local\Temp\osmanli-edebiyat\src\data\kategoriler\dunya-edebiyati.ts`, 'utf8');
const kats = {};
c.split('\n').forEach(l => {
  const k = l.match(/kategori: '([^']+)'/);
  if (k) kats[k[1]] = (kats[k[1]] || 0) + 1;
});
console.log('Kategori values:', kats);
