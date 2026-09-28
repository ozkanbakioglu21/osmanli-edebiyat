const fs = require('fs');
const p = String.raw`C:\Users\User\AppData\Local\Temp\osmanli-edebiyat\src\data\kategoriler\dunya-edebiyati.ts`;
let c = fs.readFileSync(p, 'utf8');
c = c.replace(/kategori: 'Dunya Edebiyati'/g, "kategori: 'D\u00fcnya Edebiyat\u0131'");
fs.writeFileSync(p, c, 'utf8');
console.log('Fixed kategori field for all questions');
