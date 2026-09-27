import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { oyunStore } from '../store/oyun';
import { kullaniciStore } from '../store/kullanici';
import { Kategori } from '../types';

const { width } = Dimensions.get('window');

const KATEGORILER: { label: string; icon: string; value?: Kategori; renk: string }[] = [
  { label: 'Tümü', icon: 'apps', renk: '#C9A84C' },
  { label: 'Osmanlı Tarihi', icon: 'castle', renk: '#8D6E63' },
  { label: 'Şairler & Yazarlar', icon: 'person', renk: '#4FC3F7' },
  { label: 'Şiirler', icon: 'document-text', renk: '#AB47BC' },
  { label: 'Roman & Hikaye', icon: 'book', renk: '#66BB6A' },
  { label: 'Türk Dili', icon: 'language', renk: '#EF5350' },
  { label: 'Dünya Edebiyatı', icon: 'globe', renk: '#26C6DA' },
  { label: 'Atasözleri & Deyimler', icon: 'chatbubbles', renk: '#FFA726' },
  { label: 'Tarih & Kültür', icon: 'time', renk: '#78909C' },
  { label: 'Bilim & Felsefe', icon: 'bulb', renk: '#FFEE58' },
];

const CEVAP_RENKLERI = ['#1565C0', '#C62828', '#E65100', '#2E7D32'];

export default function BilgiYolculuguScreen() {
  const { durum, bilgiBaslat, cevapVer, sonrakiSoru, oyunuBitir } = oyunStore();
  const { puanEkle } = kullaniciStore();
  const [secilenKategori, setSecilenKategori] = useState<Kategori | undefined>();
  const [cevaplandi, setCevaplandi] = useState(false);
  const [secilenCevap, setSecilenCevap] = useState<number | null>(null);

  if (!durum.aktif || durum.mod !== 'bilgi') {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.baslikAlani}>
          <Ionicons name="book" size={40} color="#4FC3F7" />
          <Text style={styles.baslik}>Bilgi Yolculuğu</Text>
          <Text style={styles.aciklama}>Süresiz oyna, her cevapta bilgi öğren!</Text>
        </View>

        <Text style={styles.kategoriBaslik}>Kategori Seç</Text>
        <View style={styles.kategoriGrid}>
          {KATEGORILER.map((k) => (
            <TouchableOpacity
              key={k.label}
              style={[styles.kategoriKart, secilenKategori === k.value && { borderColor: k.renk }]}
              onPress={() => setSecilenKategori(k.value)}
            >
              <Ionicons name={k.icon as any} size={24} color={k.renk} />
              <Text style={styles.kategoriMetin}>{k.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.baslatButon} onPress={() => { bilgiBaslat(secilenKategori); setCevaplandi(false); setSecilenCevap(null); }}>
          <Ionicons name="play" size={24} color="#000" />
          <Text style={styles.baslatMetin}>YOLCULUĞA BAŞLA</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  const mevcutSoru = durum.sorular[durum.mevcutSoruIndex];
  if (!mevcutSoru) return null;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.ustBar}>
        <View>
          <Text style={styles.puanEtiket}>Puan</Text>
          <Text style={styles.puanDeger}>{durum.puan.toLocaleString()}</Text>
        </View>
        <View style={styles.soruSayaci}>
          <Text style={styles.soruSayacMetin}>{durum.mevcutSoruIndex + 1} / {durum.sorular.length}</Text>
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
          const secildiMi = secilenCevap === i;
          let bg = CEVAP_RENKLERI[i];
          if (cevaplandi && dogruMu) bg = '#2E7D32';
          else if (cevaplandi && secildiMi && !dogruMu) bg = '#C62828';

          return (
            <TouchableOpacity
              key={i}
              style={[styles.cevapButon, { backgroundColor: bg }, cevaplandi && { opacity: 0.7 }]}
              disabled={cevaplandi}
              onPress={() => {
                setSecilenCevap(i);
                setCevaplandi(true);
                cevapVer(i);
                puanEkle(100);
              }}
            >
              <Text style={styles.cevapHarf}>{['A', 'B', 'C', 'D'][i]}</Text>
              <Text style={styles.cevapMetin}>{s}</Text>
              {cevaplandi && dogruMu && <Ionicons name="checkmark-circle" size={20} color="#FFF" />}
              {cevaplandi && secildiMi && !dogruMu && <Ionicons name="close-circle" size={20} color="#FFF" />}
            </TouchableOpacity>
          );
        })}
      </View>

      {cevaplandi && mevcutSoru.bilgi && (
        <View style={styles.bilgiKart}>
          <View style={styles.bilgiBaslikAlani}>
            <Ionicons name="bulb" size={20} color="#FFD700" />
            <Text style={styles.bilgiBaslik}>Bilgi</Text>
          </View>
          <Text style={styles.bilgiMetin}>{mevcutSoru.bilgi}</Text>
        </View>
      )}

      {cevaplandi && (
        <TouchableOpacity style={styles.devamButon} onPress={() => {
          setCevaplandi(false);
          setSecilenCevap(null);
          if (durum.mevcutSoruIndex + 1 >= durum.sorular.length) {
            Alert.alert('Yolculuk Bitti!', `Toplam puan: ${durum.puan.toLocaleString()}`);
            oyunuBitir();
          } else {
            sonrakiSoru();
          }
        }}>
          <Text style={styles.devamMetin}>{durum.mevcutSoruIndex + 1 >= durum.sorular.length ? 'BİTİR' : 'SONRAKİ SORU →'}</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0A2E' },
  baslikAlani: { alignItems: 'center', paddingTop: 60, paddingBottom: 20 },
  baslik: { fontSize: 28, fontWeight: 'bold', color: '#4FC3F7', marginTop: 10 },
  aciklama: { fontSize: 13, color: '#888', marginTop: 4 },
  kategoriBaslik: { fontSize: 14, color: '#AAA', paddingHorizontal: 20, marginBottom: 8 },
  kategoriGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16, gap: 8 },
  kategoriKart: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 10, borderRadius: 10, backgroundColor: '#121240', borderWidth: 1, borderColor: '#1E1E5A', gap: 8 },
  kategoriMetin: { color: '#FFF', fontSize: 12 },
  baslatButon: { flexDirection: 'row', marginHorizontal: 20, marginTop: 24, backgroundColor: '#4FC3F7', borderRadius: 12, padding: 16, justifyContent: 'center', alignItems: 'center', gap: 8 },
  baslatMetin: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  ustBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50, paddingHorizontal: 16 },
  puanEtiket: { fontSize: 10, color: '#888' },
  puanDeger: { fontSize: 18, fontWeight: 'bold', color: '#4FC3F7' },
  soruSayaci: { backgroundColor: '#1E1E5A', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 6 },
  soruSayacMetin: { color: '#FFF', fontSize: 13, fontWeight: 'bold' },
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
  bilgiKart: { marginHorizontal: 16, marginTop: 12, backgroundColor: '#1B5E2033', borderRadius: 12, padding: 14, borderWidth: 1, borderColor: '#2E7D32' },
  bilgiBaslikAlani: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 8 },
  bilgiBaslik: { fontSize: 14, fontWeight: 'bold', color: '#FFD700' },
  bilgiMetin: { fontSize: 13, color: '#CCC', lineHeight: 20 },
  devamButon: { marginHorizontal: 16, marginTop: 16, backgroundColor: '#C9A84C', borderRadius: 12, padding: 16, alignItems: 'center' },
  devamMetin: { fontSize: 16, fontWeight: 'bold', color: '#000' },
});
