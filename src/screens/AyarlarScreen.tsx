import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useKullanici } from '../store/kullanici';

export function AyarlarScreen() {
  const insets = useSafeAreaInsets();
  const { toplam_kelime, okunan_siir } = useKullanici();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: insets.top + 12, paddingBottom: 100 }}>
      <Text style={styles.title}>Ayarlar</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>İSTATİSTİKLER</Text>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Ionicons name="book-outline" size={22} color="#8b5cf6" />
            <Text style={[styles.statValue, { color: '#8b5cf6' }]}>{toplam_kelime}</Text>
            <Text style={styles.statLabel}>Kelime</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="library-outline" size={22} color="#06b6d4" />
            <Text style={[styles.statValue, { color: '#06b6d4' }]}>{okunan_siir}</Text>
            <Text style={styles.statLabel}>Şiir</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>HAKKINDA</Text>
        <View style={styles.card}>
          <View style={styles.aboutHeader}>
            <View style={styles.aboutIcon}>
              <Ionicons name="book" size={24} color="#8b5cf6" />
            </View>
            <View>
              <Text style={styles.aboutTitle}>Osmanlı'da Edebiyat</Text>
              <Text style={styles.aboutVersion}>Sürüm 1.0.0</Text>
            </View>
          </View>
          <Text style={styles.aboutDesc}>
            Osmanlı Türkçesi edebiyatını günümüz kullanıcılarına ulaştırmak amacıyla geliştirilmiş bir mobil uygulamadır.
          </Text>
          <View style={styles.aboutDivider} />
          <Text style={styles.aboutCredit}>
            Kaynaklar: Vikikaynak, Vikipedi, Kamu malı klasik Osmanlıca sözlükler ve edebi metinler kullanılmıştır.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#09090b' },
  title: { fontSize: 24, fontWeight: '800', color: '#fff', paddingHorizontal: 16, marginBottom: 16 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 11, fontWeight: '700', color: '#52525b', paddingHorizontal: 20, marginBottom: 10, letterSpacing: 1.2 },
  statsRow: { flexDirection: 'row', paddingHorizontal: 16, gap: 8 },
  statCard: { flex: 1, backgroundColor: '#1a1a1e', borderRadius: 14, padding: 16, alignItems: 'center', borderWidth: 1, borderColor: '#27272a' },
  statValue: { fontSize: 24, fontWeight: '800', marginTop: 8 },
  statLabel: { fontSize: 11, color: '#71717a', marginTop: 4 },
  card: { backgroundColor: '#1a1a1e', marginHorizontal: 16, borderRadius: 16, borderWidth: 1, borderColor: '#27272a', overflow: 'hidden' },
  aboutHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 16 },
  aboutIcon: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#8b5cf615', alignItems: 'center', justifyContent: 'center' },
  aboutTitle: { fontSize: 15, fontWeight: '700', color: '#fff' },
  aboutVersion: { fontSize: 12, color: '#71717a', marginTop: 2 },
  aboutDesc: { fontSize: 13, color: '#a1a1aa', lineHeight: 20, paddingHorizontal: 16, paddingBottom: 16 },
  aboutDivider: { height: 1, backgroundColor: '#27272a' },
  aboutCredit: { fontSize: 11, color: '#52525b', fontStyle: 'italic', padding: 16, lineHeight: 18 },
});
