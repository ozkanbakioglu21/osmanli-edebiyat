import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { oyunStore } from '../store/oyun';
import { kullaniciStore } from '../store/kullanici';
import { Kategori } from '../types';

const { width } = Dimensions.get('window');

const KATEGORILER: { label: string; value?: Kategori }[] = [
  { label: 'Tümü' },
  { label: 'Osmanlı Tarihi', value: 'Osmanlı Tarihi' },
  { label: 'Şairler & Yazarlar', value: 'Şairler & Yazarlar' },
  { label: 'Şiirler', value: 'Şiirler' },
  { label: 'Türk Dili', value: 'Türk Dili' },
  { label: 'Atasözleri & Deyimler', value: 'Atasözleri & Deyimler' },
];

const CEVAP_RENKLERI = ['#1565C0', '#C62828', '#E65100', '#2E7D32'];

export default function HizTepkisiScreen() {
  const { durum, hizBaslat, cevapVer, sonrakiSoru, oyunuBitir, sureGuncelle } = oyunStore();
  const { puanEkle, oyunSayisiEkle } = kullaniciStore();
  const [secilenKategori, setSecilenKategori] = useState<Kategori | undefined>();
  const [cevaplandi, setCevaplandi] = useState(false);
  const [secilenCevap, setSecilenCevap] = useState<number | null>(null);
  const sureRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (durum.aktif && durum.mod === 'hiz') {
      sureRef.current = setInterval(() => sureGuncelle(), 1000);
      return () => { if (sureRef.current) clearInterval(sureRef.current); };
    }
    return () => { if (sureRef.current) clearInterval(sureRef.current); };
  }, [durum.aktif, durum.mod]);

  useEffect(() => {
    if (durum.sure === 0 && durum.aktif && durum.mod === 'hiz') {
      oyunSayisiEkle();
      Alert.alert('Süre Doldu!', `Toplam puan: ${durum.puan.toLocaleString()}\nDoğru: ${durum.dogruCevap}`);
      oyunuBitir();
    }
  }, [durum.sure]);

  if (!durum.aktif || durum.mod !== 'hiz') {
    return (
      <View style={styles.container}>
        <View style={styles.baslikAlani}>
          <Ionicons name="flash" size={40} color="#FF5722" />
          <Text style={styles.baslik}>Hız Tepkisi</Text>
          <Text style={styles.aciklama}>60 saniyede mümkün olduğunca çok soru!</Text>
        </View>

        <Text style={styles.kategoriBaslik}>Kategori Seç</Text>
        <View style={styles.kategoriGrid}>
          {KATEGORILER.map((k) => (
            <TouchableOpacity
              key={k.label}
              style={[styles.kategoriButon, secilenKategori === k.value && styles.kategoriAktif]}
              onPress={() => setSecilenKategori(k.value)}
            >
              <Text style={[styles.kategoriMetin, secilenKategori === k.value && styles.kategoriAktifMetin]}>{k.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.baslatButon} onPress={() => { hizBaslat(secilenKategori); setCevaplandi(false); setSecilenCevap(null); }}>
          <Ionicons name="play" size={24} color="#000" />
          <Text style={styles.baslatMetin}>BAŞLA</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const mevcutSoru = durum.sorular[durum.mevcutSoruIndex];
  if (!mevcutSoru) return null;

  const sureOrani = durum.sure / 60;

  return (
    <View style={styles.container}>
      <View style={styles.ustBar}>
        <View style={styles.puanAlani}>
          <Text style={styles.puanEtiket}>Puan</Text>
          <Text style={styles.puanDeger}>{durum.puan}</Text>
        </View>
        <View style={styles.sureAlani}>
          <View style={[styles.sureBar, { width: `${sureOrani * 100}%`, backgroundColor: durum.sure <= 15 ? '#FF5722' : '#FF9800' }]} />
          <Text style={styles.sureDeger}>{durum.sure}s</Text>
        </View>
        <View style={styles.soruAlani}>
          <Text style={styles.soruSayisi}>{durum.dogruCevap} doğru</Text>
        </View>
      </View>

      <View style={styles.soruKutu}>
        <Text style={styles.soruMetin}>{mevcutSoru.soru}</Text>
      </View>

      <View style={styles.cevapListesi}>
        {mevcutSoru.secenekler.map((s, i) => {
          const dogruMu = i === mevcutSoru.dogruCevap;
          let bg = CEVAP_RENKLERI[i];
          if (cevaplandi && dogruMu) bg = '#2E7D32';
          else if (cevaplandi && secilenCevap === i && !dogruMu) bg = '#C62828';

          return (
            <TouchableOpacity
              key={i}
              style={[styles.cevapButon, { backgroundColor: bg }]}
              disabled={cevaplandi}
              onPress={() => {
                setSecilenCevap(i);
                setCevaplandi(true);
                cevapVer(i);
                setTimeout(() => {
                  setCevaplandi(false);
                  setSecilenCevap(null);
                  sonrakiSoru();
                }, 400);
              }}
            >
              <Text style={styles.cevapHarf}>{['A', 'B', 'C', 'D'][i]}</Text>
              <Text style={styles.cevapMetin}>{s}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity style={styles.bitirButon} onPress={() => { oyunSayisiEkle(); oyunuBitir(); }}>
        <Text style={styles.bitirMetin}>BITİR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0A2E' },
  baslikAlani: { alignItems: 'center', paddingTop: 60, paddingBottom: 20 },
  baslik: { fontSize: 28, fontWeight: 'bold', color: '#FF5722', marginTop: 10 },
  aciklama: { fontSize: 13, color: '#888', marginTop: 4 },
  kategoriBaslik: { fontSize: 14, color: '#AAA', paddingHorizontal: 20, marginBottom: 8 },
  kategoriGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16, gap: 6 },
  kategoriButon: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, backgroundColor: '#1E1E5A' },
  kategoriAktif: { backgroundColor: '#FF5722' },
  kategoriMetin: { color: '#AAA', fontSize: 12 },
  kategoriAktifMetin: { color: '#FFF', fontWeight: 'bold' },
  baslatButon: { flexDirection: 'row', marginHorizontal: 20, marginTop: 24, backgroundColor: '#FF5722', borderRadius: 12, padding: 16, justifyContent: 'center', alignItems: 'center', gap: 8 },
  baslatMetin: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  ustBar: { paddingTop: 50, paddingHorizontal: 16, paddingBottom: 8 },
  puanAlani: { alignItems: 'center', marginBottom: 8 },
  puanEtiket: { fontSize: 10, color: '#888' },
  puanDeger: { fontSize: 24, fontWeight: 'bold', color: '#FF5722' },
  sureAlani: { height: 8, backgroundColor: '#1E1E5A', borderRadius: 4, overflow: 'hidden', marginBottom: 4 },
  sureBar: { height: '100%', borderRadius: 4 },
  sureDeger: { fontSize: 16, fontWeight: 'bold', color: '#FF9800', textAlign: 'center' },
  soruAlani: { alignItems: 'center', marginTop: 4 },
  soruSayisi: { fontSize: 13, color: '#888' },
  soruKutu: { marginHorizontal: 16, marginTop: 12, backgroundColor: '#1E1E5A', borderRadius: 12, padding: 16 },
  soruMetin: { fontSize: 16, color: '#FFF', textAlign: 'center', lineHeight: 24 },
  cevapListesi: { marginTop: 12, paddingHorizontal: 16, gap: 8 },
  cevapButon: { flexDirection: 'row', alignItems: 'center', padding: 14, borderRadius: 10, gap: 10 },
  cevapHarf: { fontSize: 16, fontWeight: 'bold', color: '#FFF', width: 24 },
  cevapMetin: { fontSize: 14, color: '#FFF', flex: 1 },
  bitirButon: { marginHorizontal: 16, marginTop: 16, backgroundColor: '#333', borderRadius: 8, padding: 12, alignItems: 'center' },
  bitirMetin: { color: '#888', fontSize: 13, fontWeight: 'bold' },
});
