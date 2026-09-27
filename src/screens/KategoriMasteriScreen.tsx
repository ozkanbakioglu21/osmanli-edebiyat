import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { oyunStore } from '../store/oyun';
import { kullaniciStore } from '../store/kullanici';
import { Kategori } from '../types';

const { width } = Dimensions.get('window');

const KATEGORILER: { label: string; value: Kategori; icon: string; renk: string; soruSayisi: number }[] = [
  { label: 'Osmanlı Tarihi', value: 'Osmanlı Tarihi', icon: 'castle', renk: '#8D6E63', soruSayisi: 10 },
  { label: 'Şairler & Yazarlar', value: 'Şairler & Yazarlar', icon: 'person', renk: '#4FC3F7', soruSayisi: 10 },
  { label: 'Şiirler', value: 'Şiirler', icon: 'document-text', renk: '#AB47BC', soruSayisi: 10 },
  { label: 'Roman & Hikaye', value: 'Roman & Hikaye', icon: 'book', renk: '#66BB6A', soruSayisi: 10 },
  { label: 'Türk Dili', value: 'Türk Dili', icon: 'language', renk: '#EF5350', soruSayisi: 10 },
  { label: 'Dünya Edebiyatı', value: 'Dünya Edebiyatı', icon: 'globe', renk: '#26C6DA', soruSayisi: 10 },
  { label: 'Müzik & Sanat', value: 'Müzik & Sanat', icon: 'musical-notes', renk: '#FF7043', soruSayisi: 10 },
  { label: 'Atasözleri & Deyimler', value: 'Atasözleri & Deyimler', icon: 'chatbubbles', renk: '#FFA726', soruSayisi: 10 },
  { label: 'Tarih & Kültür', value: 'Tarih & Kültür', icon: 'time', renk: '#78909C', soruSayisi: 10 },
  { label: 'Bilim & Felsefe', value: 'Bilim & Felsefe', icon: 'bulb', renk: '#FFEE58', soruSayisi: 10 },
];

const CEVAP_RENKLERI = ['#1565C0', '#C62828', '#E65100', '#2E7D32'];

export default function KategoriMasteriScreen() {
  const { durum, kategoriBaslat, cevapVer, sonrakiSoru, oyunuBitir, sureGuncelle } = oyunStore();
  const { puanEkle, oyunSayisiEkle, kazanmaEkle } = kullaniciStore();
  const [seciliKategori, setSeciliKategori] = useState<Kategori | null>(null);
  const [cevaplandi, setCevaplandi] = useState(false);
  const [secilenCevap, setSecilenCevap] = useState<number | null>(null);
  const sureRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (durum.aktif && durum.mod === 'kategori' && durum.sure > 0) {
      sureRef.current = setInterval(() => sureGuncelle(), 1000);
      return () => { if (sureRef.current) clearInterval(sureRef.current); };
    }
    return () => { if (sureRef.current) clearInterval(sureRef.current); };
  }, [durum.aktif, durum.mod, durum.sure]);

  useEffect(() => {
    if (durum.sure === 0 && durum.aktif && durum.mod === 'kategori') {
      oyunSayisiEkle();
      Alert.alert('Süre Doldu!', `Kazanılan puan: ${durum.puan}`);
      oyunuBitir();
    }
  }, [durum.sure]);

  if (!durum.aktif || durum.mod !== 'kategori') {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.baslikAlani}>
          <Ionicons name="grid" size={40} color="#8BC34A" />
          <Text style={styles.baslik}>Kategori Masterı</Text>
          <Text style={styles.aciklama}>Kategorilerde uzmanlaş, puan topla!</Text>
        </View>

        <View style={styles.kategoriListesi}>
          {KATEGORILER.map((k) => (
            <TouchableOpacity
              key={k.value}
              style={styles.kategoriKart}
              onPress={() => { setSeciliKategori(k.value); }}
            >
              <View style={[styles.kategoriIcon, { backgroundColor: k.renk + '20' }]}>
                <Ionicons name={k.icon as any} size={28} color={k.renk} />
              </View>
              <View style={styles.kategoriBilgi}>
                <Text style={styles.kategoriBaslik}>{k.label}</Text>
                <Text style={styles.kategoriSoru}>{k.soruSayisi} soru</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          ))}
        </View>

        {seciliKategori && (
          <TouchableOpacity
            style={styles.baslatButon}
            onPress={() => { kategoriBaslat(seciliKategori); setCevaplandi(false); setSecilenCevap(null); }}
          >
            <Ionicons name="play" size={24} color="#000" />
            <Text style={styles.baslatMetin}>BAŞLA</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    );
  }

  const mevcutSoru = durum.sorular[durum.mevcutSoruIndex];
  if (!mevcutSoru) return null;

  return (
    <View style={styles.container}>
      <View style={styles.ustBar}>
        <View>
          <Text style={styles.puanEtiket}>Puan</Text>
          <Text style={styles.puanDeger}>{durum.puan}</Text>
        </View>
        <View style={styles.sureAlani}>
          <Ionicons name="time" size={16} color={durum.sure <= 5 ? '#FF5722' : '#FFF'} />
          <Text style={[styles.sureDeger, durum.sure <= 5 && { color: '#FF5722' }]}>{durum.sure}s</Text>
        </View>
        <View style={styles.soruAlani}>
          <Text style={styles.soruSayisi}>{durum.mevcutSoruIndex + 1}/{durum.sorular.length}</Text>
        </View>
      </View>

      <View style={styles.kategoriEtiket}>
        <Text style={styles.kategoriEtiketMetin}>{mevcutSoru.kategori}</Text>
        <View style={[styles.zorlukEtiket, mevcutSoru.zorluk === 'zor' && { backgroundColor: '#C62828' }, mevcutSoru.zorluk === 'orta' && { backgroundColor: '#E65100' }]}>
          <Text style={styles.zorlukMetin}>{mevcutSoru.zorluk.toUpperCase()}</Text>
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
                const puanArttir = mevcutSoru.zorluk === 'zor' ? 300 : mevcutSoru.zorluk === 'orta' ? 200 : 100;
                puanEkle(puanArttir);
              }}
            >
              <Text style={styles.cevapHarf}>{['A', 'B', 'C', 'D'][i]}</Text>
              <Text style={styles.cevapMetin}>{s}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {cevaplandi && mevcutSoru.bilgi && (
        <View style={styles.bilgiKart}>
          <Ionicons name="bulb" size={16} color="#FFD700" />
          <Text style={styles.bilgiMetin}>{mevcutSoru.bilgi}</Text>
        </View>
      )}

      {cevaplandi && (
        <TouchableOpacity style={styles.devamButon} onPress={() => {
          setCevaplandi(false);
          setSecilenCevap(null);
          if (durum.mevcutSoruIndex + 1 >= durum.sorular.length) {
            oyunSayisiEkle();
            if (durum.dogruCevap >= 7) kazanmaEkle();
            Alert.alert('Kategori Tamamlandı!', `Doğru: ${durum.dogruCevap}/${durum.sorular.length}\nPuan: ${durum.puan}`);
            oyunuBitir();
          } else {
            sonrakiSoru();
          }
        }}>
          <Text style={styles.devamMetin}>{durum.mevcutSoruIndex + 1 >= durum.sorular.length ? 'BİTİR' : 'SONRAKİ →'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0A2E' },
  baslikAlani: { alignItems: 'center', paddingTop: 60, paddingBottom: 20 },
  baslik: { fontSize: 28, fontWeight: 'bold', color: '#8BC34A', marginTop: 10 },
  aciklama: { fontSize: 13, color: '#888', marginTop: 4 },
  kategoriListesi: { paddingHorizontal: 16, gap: 8 },
  kategoriKart: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#121240', borderRadius: 12, padding: 14, gap: 12 },
  kategoriIcon: { width: 48, height: 48, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  kategoriBilgi: { flex: 1 },
  kategoriBaslik: { fontSize: 14, fontWeight: '600', color: '#FFF' },
  kategoriSoru: { fontSize: 11, color: '#888', marginTop: 2 },
  baslatButon: { flexDirection: 'row', marginHorizontal: 16, marginTop: 20, marginBottom: 40, backgroundColor: '#8BC34A', borderRadius: 12, padding: 16, justifyContent: 'center', alignItems: 'center', gap: 8 },
  baslatMetin: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  ustBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50, paddingHorizontal: 16 },
  puanEtiket: { fontSize: 10, color: '#888' },
  puanDeger: { fontSize: 18, fontWeight: 'bold', color: '#8BC34A' },
  sureAlani: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  sureDeger: { fontSize: 18, fontWeight: 'bold', color: '#FFF' },
  soruAlani: { backgroundColor: '#1E1E5A', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 6 },
  soruSayisi: { color: '#FFF', fontSize: 13, fontWeight: 'bold' },
  kategoriEtiket: { flexDirection: 'row', paddingHorizontal: 16, marginTop: 12, gap: 8, alignItems: 'center' },
  kategoriEtiketMetin: { color: '#AAA', fontSize: 12 },
  zorlukEtiket: { backgroundColor: '#2E7D32', borderRadius: 4, paddingHorizontal: 6, paddingVertical: 2 },
  zorlukMetin: { color: '#FFF', fontSize: 9, fontWeight: 'bold' },
  soruKutu: { marginHorizontal: 16, marginTop: 12, backgroundColor: '#1E1E5A', borderRadius: 12, padding: 16 },
  soruMetin: { fontSize: 16, color: '#FFF', textAlign: 'center', lineHeight: 24 },
  cevapListesi: { marginTop: 12, paddingHorizontal: 16, gap: 8 },
  cevapButon: { flexDirection: 'row', alignItems: 'center', padding: 14, borderRadius: 10, gap: 10 },
  cevapHarf: { fontSize: 16, fontWeight: 'bold', color: '#FFF', width: 24 },
  cevapMetin: { fontSize: 14, color: '#FFF', flex: 1 },
  bilgiKart: { flexDirection: 'row', marginHorizontal: 16, marginTop: 10, backgroundColor: '#1B5E2033', borderRadius: 8, padding: 10, gap: 8, alignItems: 'flex-start' },
  bilgiMetin: { flex: 1, fontSize: 12, color: '#CCC', lineHeight: 18 },
  devamButon: { marginHorizontal: 16, marginTop: 12, backgroundColor: '#C9A84C', borderRadius: 12, padding: 16, alignItems: 'center' },
  devamMetin: { fontSize: 16, fontWeight: 'bold', color: '#000' },
});
