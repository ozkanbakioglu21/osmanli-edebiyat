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
  { label: 'Roman & Hikaye', value: 'Roman & Hikaye' },
  { label: 'Türk Dili', value: 'Türk Dili' },
  { label: 'Dünya Edebiyatı', value: 'Dünya Edebiyatı' },
  { label: 'Atasözleri & Deyimler', value: 'Atasözleri & Deyimler' },
  { label: 'Tarih & Kültür', value: 'Tarih & Kültür' },
  { label: 'Bilim & Felsefe', value: 'Bilim & Felsefe' },
];

const CEVAP_RENKLERI = ['#1565C0', '#C62828', '#E65100', '#2E7D32'];

export default function MilyonerScreen() {
  const { durum, milyonerBaslat, cevapVer, jokerKullan, sonrakiSoru, oyunuBitir, sureGuncelle } = oyunStore();
  const { puanEkle, oyunSayisiEkle, kazanmaEkle } = kullaniciStore();
  const [secilenKategori, setSecilenKategori] = useState<Kategori | undefined>();
  const [jokerPopup, setJokerPopup] = useState<null | 'elliElli' | 'telefon' | 'seyirci'>(null);
  const [eliSilindi, setEliSilindi] = useState<number[]>([]);
  const sureRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (durum.aktif && durum.sure > 0 && durum.mod === 'milyoner') {
      sureRef.current = setInterval(() => sureGuncelle(), 1000);
      return () => { if (sureRef.current) clearInterval(sureRef.current); };
    }
    return () => { if (sureRef.current) clearInterval(sureRef.current); };
  }, [durum.aktif, durum.sure, durum.mod]);

  useEffect(() => {
    if (durum.sure === 0 && durum.aktif && durum.mod === 'milyoner') {
      oyunuBitir();
      Alert.alert('Süre Doldu!', `Kazanılan puan: ${durum.puan.toLocaleString()}`);
    }
  }, [durum.sure]);

  if (!durum.aktif || durum.mod !== 'milyoner') {
    return (
      <View style={styles.container}>
        <View style={styles.baslikAlani}>
          <Ionicons name="trophy" size={40} color="#FFD700" />
          <Text style={styles.baslik}>Milyoner Modu</Text>
          <Text style={styles.aciklama}>15 soru, 3 joker, 1M puana kadar yarış!</Text>
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

        <TouchableOpacity style={styles.baslatButon} onPress={() => milyonerBaslat(secilenKategori)}>
          <Ionicons name="play" size={24} color="#000" />
          <Text style={styles.baslatMetin}>BAŞLA</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const mevcutSoru = durum.sorular[durum.mevcutSoruIndex];
  if (!mevcutSoru) return null;

  const secenekIsimleri = ['A', 'B', 'C', 'D'];
  const guvenliSoru = durum.mevcutSoruIndex >= 5;
  const soruSirasi = durum.mevcutSoruIndex + 1;

  const jokerElliElli = () => {
    const yanlislar = [0, 1, 2, 3].filter(i => i !== mevcutSoru.dogruCevap);
    const silinecek = yanlislar.sort(() => Math.random() - 0.5).slice(0, 2);
    setEliSilindi(silinecek);
    jokerKullan('elliElli');
    setJokerPopup(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.ustBar}>
        <View style={styles.puanAlani}>
          <Text style={styles.puanEtiket}>Puan</Text>
          <Text style={styles.puanDeger}>{durum.puan.toLocaleString()}</Text>
        </View>
        <View style={styles.sureAlani}>
          <Ionicons name="time" size={16} color={durum.sure <= 10 ? '#FF5722' : '#FFF'} />
          <Text style={[styles.sureDeger, durum.sure <= 10 && { color: '#FF5722' }]}>{durum.sure}</Text>
        </View>
        <View style={styles.soruAlani}>
          <Text style={styles.soruSirasi}>{soruSirasi}/15</Text>
        </View>
      </View>

      <View style={styles.basamakAlani}>
        {[...Array(15)].map((_, i) => (
          <View key={i} style={[styles.basamak, i === durum.mevcutSoruIndex && styles.basamakAktif, durum.bitisNoktalari && (i === 4 || i === 9) && styles.basamakGuvenli]}>
            <Text style={[styles.basamakMetin, i === durum.mevcutSoruIndex && styles.basamakAktifMetin]}>
              {15 - i}. {durum.bitisNoktalari ? durum.bitisNoktalari[15 - i]?.toLocaleString() : ''}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.soruKutu}>
        <Text style={styles.soruMetin}>{mevcutSoru.soru}</Text>
      </View>

      <View style={styles.cevapGrid}>
        {mevcutSoru.secenekler.map((s, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.cevapButon, { backgroundColor: CEVAP_RENKLERI[i] }, eliSilindi.includes(i) && { opacity: 0.2 }]}
            disabled={eliSilindi.includes(i)}
            onPress={() => {
              cevapVer(i);
              setTimeout(() => {
                if (i === mevcutSoru.dogruCevap) {
                  if (durum.mevcutSoruIndex + 1 >= 15) {
                    puanEkle(durum.puan + (durum.bitisNoktalari?.[15] || 0));
                    oyunSayisiEkle();
                    kazanmaEkle();
                    Alert.alert('Tebrikler!', '1 Milyon Puan Kazandınız! 🏆');
                    oyunuBitir();
                  } else {
                    sonrakiSoru();
                  }
                } else {
                  const kazanilan = durum.bitisNoktalari ? durum.bitisNoktalari[Math.max(0, durum.mevcutSoruIndex)] : 0;
                  puanEkle(kazanilan);
                  oyunSayisiEkle();
                  Alert.alert('Yanlış!', `Kazanılan puan: ${kazanilan.toLocaleString()}`);
                  oyunuBitir();
                }
              }, 300);
            }}
          >
            <Text style={styles.cevapHarf}>{secenekIsimleri[i]}</Text>
            <Text style={styles.cevapMetin}>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.jokerAlani}>
        {[
          { key: 'elliElli' as const, label: '50:50', icon: 'remove-circle' as const },
          { key: 'telefon' as const, label: 'Telefon', icon: 'call' as const },
          { key: 'seyirci' as const, label: 'Seyirci', icon: 'people' as const },
        ].map((j) => (
          <TouchableOpacity
            key={j.key}
            style={[styles.jokerButon, !durum.jokerlar[j.key] && styles.jokerPasif]}
            disabled={!durum.jokerlar[j.key]}
            onPress={() => {
              if (j.key === 'elliElli') { jokerElliElli(); }
              else { setJokerPopup(j.key); jokerKullan(j.key); }
            }}
          >
            <Ionicons name={j.icon} size={20} color={durum.jokerlar[j.key] ? '#FFD700' : '#444'} />
            <Text style={[styles.jokerMetin, !durum.jokerlar[j.key] && { color: '#444' }]}>{j.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {guvenliSoru && (
        <TouchableOpacity style={styles.guvenliButon} onPress={() => {
          const kazanilan = durum.bitisNoktalari ? durum.bitisNoktalari[Math.max(0, durum.mevcutSoruIndex)] : 0;
          puanEkle(kazanilan);
          oyunSayisiEkle();
          Alert.alert('Güvenli Soru', `Kazanılan: ${kazanilan.toLocaleString()} puan`);
          oyunuBitir();
        }}>
          <Ionicons name="shield-checkmark" size={20} color="#4FC3F7" />
          <Text style={styles.guvenliMetin}>Güvenli Soru</Text>
        </TouchableOpacity>
      )}

      {jokerPopup && (
        <View style={styles.popupOverlay}>
          <View style={styles.popup}>
            <Text style={styles.popupBaslik}>
              {jokerPopup === 'telefon' ? '📞 Telefon Jokeri' : '👥 Seyirci Jokeri'}
            </Text>
            <Text style={styles.popupMetin}>
              {jokerPopup === 'telefon'
                ? `Arkadaşın diyor ki: "%${60 + Math.floor(Math.random() * 20)} ihtimalle cevap ${mevcutSoru.secenekler[mevcutSoru.dogruCevap].substring(0, 20)}..."`
                : `Seyirci oylaması: %${40 + Math.floor(Math.random() * 20)} ${mevcutSoru.secenekler[0].substring(0, 15)}, %${20 + Math.floor(Math.random() * 15)} ${mevcutSoru.secenekler[1].substring(0, 15)}`}
            </Text>
            <TouchableOpacity style={styles.popupKapat} onPress={() => setJokerPopup(null)}>
              <Text style={styles.popupKapatMetin}>Tamam</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0A2E' },
  baslikAlani: { alignItems: 'center', paddingTop: 60, paddingBottom: 20 },
  baslik: { fontSize: 28, fontWeight: 'bold', color: '#FFD700', marginTop: 10 },
  aciklama: { fontSize: 13, color: '#888', marginTop: 4 },
  kategoriBaslik: { fontSize: 14, color: '#AAA', paddingHorizontal: 20, marginBottom: 8 },
  kategoriGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16, gap: 6 },
  kategoriButon: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, backgroundColor: '#1E1E5A' },
  kategoriAktif: { backgroundColor: '#C9A84C' },
  kategoriMetin: { color: '#AAA', fontSize: 12 },
  kategoriAktifMetin: { color: '#000', fontWeight: 'bold' },
  baslatButon: { flexDirection: 'row', marginHorizontal: 20, marginTop: 24, backgroundColor: '#FFD700', borderRadius: 12, padding: 16, justifyContent: 'center', alignItems: 'center', gap: 8 },
  baslatMetin: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  ustBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 50, paddingHorizontal: 16, paddingBottom: 8 },
  puanAlani: { alignItems: 'center' },
  puanEtiket: { fontSize: 10, color: '#888' },
  puanDeger: { fontSize: 16, fontWeight: 'bold', color: '#FFD700' },
  sureAlani: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  sureDeger: { fontSize: 18, fontWeight: 'bold', color: '#FFF' },
  soruAlani: { alignItems: 'center' },
  soruSirasi: { fontSize: 14, fontWeight: 'bold', color: '#C9A84C' },
  basamakAlani: { paddingHorizontal: 16, paddingVertical: 8 },
  basamak: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 3, marginBottom: 2, borderRadius: 4, backgroundColor: '#121240' },
  basamakAktif: { backgroundColor: '#C9A84C' },
  basamakGuvenli: { backgroundColor: '#1B5E20' },
  basamakMetin: { fontSize: 11, color: '#888' },
  basamakAktifMetin: { color: '#000', fontWeight: 'bold' },
  soruKutu: { marginHorizontal: 16, marginTop: 8, backgroundColor: '#1E1E5A', borderRadius: 12, padding: 16 },
  soruMetin: { fontSize: 16, color: '#FFF', textAlign: 'center', lineHeight: 24 },
  cevapGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16, gap: 8, marginTop: 12 },
  cevapButon: { width: (width - 40) / 2, flexDirection: 'row', alignItems: 'center', padding: 12, borderRadius: 10, gap: 10 },
  cevapHarf: { fontSize: 16, fontWeight: 'bold', color: '#FFF', width: 24 },
  cevapMetin: { fontSize: 13, color: '#FFF', flex: 1 },
  jokerAlani: { flexDirection: 'row', justifyContent: 'center', marginTop: 12, gap: 16 },
  jokerButon: { alignItems: 'center', padding: 8 },
  jokerPasif: { opacity: 0.3 },
  jokerMetin: { fontSize: 11, color: '#FFD700', marginTop: 4 },
  guvenliButon: { flexDirection: 'row', marginHorizontal: 16, marginTop: 8, backgroundColor: '#1B5E2033', borderRadius: 8, padding: 10, justifyContent: 'center', alignItems: 'center', gap: 6 },
  guvenliMetin: { fontSize: 13, color: '#4FC3F7' },
  popupOverlay: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' },
  popup: { backgroundColor: '#1E1E5A', borderRadius: 16, padding: 24, width: '80%' },
  popupBaslik: { fontSize: 18, fontWeight: 'bold', color: '#FFD700', textAlign: 'center', marginBottom: 12 },
  popupMetin: { fontSize: 14, color: '#FFF', textAlign: 'center', lineHeight: 22 },
  popupKapat: { marginTop: 16, backgroundColor: '#C9A84C', borderRadius: 8, padding: 12, alignItems: 'center' },
  popupKapatMetin: { fontSize: 14, fontWeight: 'bold', color: '#000' },
});
