import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { kullaniciStore } from '../store/kullanici';

export default function HomeScreen() {
  const { kullanici } = kullaniciStore();

  const modlar = [
    { baslik: 'Milyoner Modu', aciklama: '15 soru, 3 joker, 10M puana kadar', icon: 'trophy' as const, renk: '#FFD700' },
    { baslik: 'Bilgi Yolculuğu', aciklama: 'Süresiz, bilgi kartları ile öğren', icon: 'book' as const, renk: '#4FC3F7' },
    { baslik: 'Hız Tepkisi', aciklama: '60 sn, mümkün olduğunca çok soru', icon: 'flash' as const, renk: '#FF5722' },
    { baslik: 'Kategori Masterı', aciklama: 'Kategorilere göre puan topla', icon: 'grid' as const, renk: '#8BC34A' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.baslik}>Edebiyat Savaşı</Text>
        <Text style={styles.altBaslik}>Bilginle Yarış, Kültürünle Kazan</Text>
      </View>

      <View style={styles.istatistikler}>
        <View style={styles.istatistikKutu}>
          <Ionicons name="star" size={24} color="#FFD700" />
          <Text style={styles.istatistikDeger}>{kullanici.toplamPuan.toLocaleString()}</Text>
          <Text style={styles.istatistikEtiket}>Toplam Puan</Text>
        </View>
        <View style={styles.istatistikKutu}>
          <Ionicons name="trophy" size={24} color="#C9A84C" />
          <Text style={styles.istatistikDeger}>{kullanici.kazanilanOyun}</Text>
          <Text style={styles.istatistikEtiket}>Kazanılan</Text>
        </View>
        <View style={styles.istatistikKutu}>
          <Ionicons name="bar-chart" size={24} color="#4FC3F7" />
          <Text style={styles.istatistikDeger}>{kullanici.seviye}</Text>
          <Text style={styles.istatistikEtiket}>Seviye</Text>
        </View>
      </View>

      <View style={styles.modlarBaslik}>
        <Text style={styles.modlarBaslikMetin}>Oyun Modları</Text>
      </View>

      {modlar.map((mod, i) => (
        <TouchableOpacity key={i} style={[styles.modKart, { borderLeftColor: mod.renk }]}>
          <View style={[styles.modIcon, { backgroundColor: mod.renk + '20' }]}>
            <Ionicons name={mod.icon} size={28} color={mod.renk} />
          </View>
          <View style={styles.modBilgi}>
            <Text style={styles.modBaslik}>{mod.baslik}</Text>
            <Text style={styles.modAciklama}>{mod.aciklama}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#666" />
        </TouchableOpacity>
      ))}

      <View style={styles.bilgiKutu}>
        <Ionicons name="bulb" size={20} color="#FFD700" />
        <Text style={styles.bilgiMetin}>Her doğru cevap sana ekstra puan kazandırır. Jokerlerini akıllıca kullan!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0A2E' },
  header: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 20 },
  baslik: { fontSize: 32, fontWeight: 'bold', color: '#C9A84C' },
  altBaslik: { fontSize: 14, color: '#888', marginTop: 4 },
  istatistikler: { flexDirection: 'row', paddingHorizontal: 16, gap: 10 },
  istatistikKutu: { flex: 1, backgroundColor: '#121240', borderRadius: 12, padding: 14, alignItems: 'center' },
  istatistikDeger: { fontSize: 20, fontWeight: 'bold', color: '#FFF', marginTop: 6 },
  istatistikEtiket: { fontSize: 11, color: '#888', marginTop: 2 },
  modlarBaslik: { paddingHorizontal: 20, marginTop: 24, marginBottom: 12 },
  modlarBaslikMetin: { fontSize: 18, fontWeight: 'bold', color: '#FFF' },
  modKart: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#121240', marginHorizontal: 16, marginBottom: 10, borderRadius: 12, padding: 16, borderLeftWidth: 3 },
  modIcon: { width: 48, height: 48, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  modBilgi: { flex: 1, marginLeft: 12 },
  modBaslik: { fontSize: 15, fontWeight: '600', color: '#FFF' },
  modAciklama: { fontSize: 12, color: '#888', marginTop: 2 },
  bilgiKutu: { flexDirection: 'row', marginHorizontal: 16, marginTop: 12, marginBottom: 40, backgroundColor: '#1E1E5A', borderRadius: 12, padding: 14, alignItems: 'center', gap: 10 },
  bilgiMetin: { flex: 1, fontSize: 12, color: '#AAA', lineHeight: 18 },
});
