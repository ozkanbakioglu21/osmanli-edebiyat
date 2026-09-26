import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useKullanici } from '../store/kullanici';
import { sozluk } from '../data/sozluk';
import { siirler } from '../data/siirler';

export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { toplam_kelime, okunan_siir, streak } = useKullanici();
  const gununKelimesi = sozluk[Math.floor(Math.random() * sozluk.length)];
  const sonSiirler = siirler.slice(-3);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: insets.top + 16, paddingBottom: 100 }}>
      <Text style={styles.greeting}>Merhaba!</Text>
      <Text style={styles.subGreeting}>Osmanlı Edebiyatı Dünyasına Hoş Geldiniz</Text>

      <View style={styles.statsRow}>
        <View style={[styles.statCard, { borderColor: '#8b5cf630' }]}>
          <Ionicons name="book" size={22} color="#8b5cf6" />
          <Text style={[styles.statValue, { color: '#8b5cf6' }]}>{toplam_kelime}</Text>
          <Text style={styles.statLabel}>Kelime</Text>
        </View>
        <View style={[styles.statCard, { borderColor: '#06b6d430' }]}>
          <Ionicons name="library" size={22} color="#06b6d4" />
          <Text style={[styles.statValue, { color: '#06b6d4' }]}>{okunan_siir}</Text>
          <Text style={styles.statLabel}>Şiir</Text>
        </View>
        <View style={[styles.statCard, { borderColor: '#f59e0b30' }]}>
          <Ionicons name="flame" size={22} color="#f59e0b" />
          <Text style={[styles.statValue, { color: '#f59e0b' }]}>{streak}</Text>
          <Text style={styles.statLabel}>Gün</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Günün Kelimesi</Text>
      <View style={styles.wordCard}>
        <Text style={styles.wordArabic}>{gununKelimesi.osmanlica}</Text>
        <Text style={styles.wordLatin}>{gununKelimesi.latin}</Text>
        <Text style={styles.wordMeaning}>{gununKelimesi.turkce}</Text>
        <Text style={styles.wordExample}>"{gununKelimesi.ornek}"</Text>
      </View>

      <Text style={styles.sectionTitle}>Son Şiirler</Text>
      {sonSiirler.map((s) => (
        <View key={s.id} style={styles.poemCard}>
          <Text style={styles.poemTitle}>{s.baslik}</Text>
          <Text style={styles.poemAuthor}>{s.sair} · {s.donem}</Text>
          <Text style={styles.poemPreview} numberOfLines={2}>{s.latin}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#09090b' },
  greeting: { fontSize: 28, fontWeight: '800', color: '#fff', paddingHorizontal: 20 },
  subGreeting: { fontSize: 14, color: '#71717a', paddingHorizontal: 20, marginTop: 4 },
  statsRow: { flexDirection: 'row', paddingHorizontal: 16, gap: 8, marginTop: 20 },
  statCard: { flex: 1, backgroundColor: '#1a1a1e', borderRadius: 14, padding: 16, alignItems: 'center', borderWidth: 1 },
  statValue: { fontSize: 24, fontWeight: '800', marginTop: 6 },
  statLabel: { fontSize: 11, color: '#71717a', marginTop: 2 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#71717a', paddingHorizontal: 20, marginTop: 24, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.8 },
  wordCard: { backgroundColor: '#1a1a1e', marginHorizontal: 16, borderRadius: 16, padding: 20, borderWidth: 1, borderColor: '#27272a' },
  wordArabic: { fontSize: 32, color: '#8b5cf6', textAlign: 'center', fontWeight: '700' },
  wordLatin: { fontSize: 16, color: '#d4d4d8', textAlign: 'center', marginTop: 8 },
  wordMeaning: { fontSize: 14, color: '#a1a1aa', textAlign: 'center', marginTop: 8, lineHeight: 22 },
  wordExample: { fontSize: 12, color: '#52525b', textAlign: 'center', marginTop: 12, fontStyle: 'italic' },
  poemCard: { backgroundColor: '#1a1a1e', marginHorizontal: 16, borderRadius: 14, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: '#27272a' },
  poemTitle: { fontSize: 15, fontWeight: '700', color: '#fff' },
  poemAuthor: { fontSize: 12, color: '#71717a', marginTop: 2 },
  poemPreview: { fontSize: 13, color: '#a1a1aa', marginTop: 6, lineHeight: 18 },
});
