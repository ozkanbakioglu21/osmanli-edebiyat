import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { sozluk, Sozluk } from '../data/sozluk';
import { useKullanici } from '../store/kullanici';

export function SozlukScreen() {
  const insets = useSafeAreaInsets();
  const [arama, setArama] = useState('');
  const [secili, setSecili] = useState<Sozluk | null>(null);
  const { favori_sozluk, sozlukFavorile, kelimeEkle } = useKullanici();

  const filtrelenmis = sozluk.filter(
    (s) =>
      s.latin.toLowerCase().includes(arama.toLowerCase()) ||
      s.turkce.toLowerCase().includes(arama.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: insets.top + 12, paddingHorizontal: 16, paddingBottom: 8 }}>
        <Text style={styles.title}>Osmanlıca Sözlük</Text>
        <View style={styles.searchRow}>
          <Ionicons name="search" size={18} color="#52525b" style={{ marginRight: 8 }} />
          <View style={styles.searchInput}>
            <Text style={arama ? styles.searchText : styles.searchPlaceholder}>
              {arama || 'Kelime ara...'}
            </Text>
          </View>
        </View>
        <View style={styles.filterRow}>
          {['Tümü', 'Favoriler'].map((f) => (
            <TouchableOpacity key={f} style={[styles.filterBtn, arama === f && styles.filterBtnActive]} onPress={() => setArama(f === 'Tümü' ? '' : f)} activeOpacity={0.7}>
              <Text style={[styles.filterText, arama === f && styles.filterTextActive]}>{f}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <FlatList
        data={arama === 'Favoriler' ? sozluk.filter((s) => favori_sozluk.includes(s.id)) : filtrelenmis}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => { setSecili(item); kelimeEkle(); }} activeOpacity={0.7}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardArabic}>{item.osmanlica}</Text>
              <TouchableOpacity onPress={() => sozlukFavorile(item.id)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                <Ionicons name={favori_sozluk.includes(item.id) ? 'heart' : 'heart-outline'} size={20} color={favori_sozluk.includes(item.id) ? '#ef4444' : '#52525b'} />
              </TouchableOpacity>
            </View>
            <Text style={styles.cardLatin}>{item.latin}</Text>
            <Text style={styles.cardTurkce} numberOfLines={2}>{item.turkce}</Text>
          </TouchableOpacity>
        )}
      />

      <Modal visible={!!secili} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { paddingBottom: insets.bottom + 24 }]}>
            <View style={styles.modalHandle} />
            <TouchableOpacity style={styles.modalClose} onPress={() => setSecili(null)} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
              <Ionicons name="close" size={22} color="#52525b" />
            </TouchableOpacity>
            {secili && (
              <>
                <Text style={styles.modalArabic}>{secili.osmanlica}</Text>
                <Text style={styles.modalLatin}>{secili.latin}</Text>
                <View style={styles.modalDivider} />
                <Text style={styles.modalLabel}>Anlamı</Text>
                <Text style={styles.modalMeaning}>{secili.turkce}</Text>
                <Text style={styles.modalLabel}>Örnek</Text>
                <Text style={styles.modalExample}>"{secili.ornek}"</Text>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#09090b' },
  title: { fontSize: 24, fontWeight: '800', color: '#fff' },
  searchRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1a1a1e', borderRadius: 12, paddingHorizontal: 12, paddingVertical: 10, marginTop: 12, borderWidth: 1, borderColor: '#27272a' },
  searchInput: { flex: 1 },
  searchText: { fontSize: 14, color: '#d4d4d8' },
  searchPlaceholder: { fontSize: 14, color: '#52525b' },
  filterRow: { flexDirection: 'row', gap: 8, marginTop: 10 },
  filterBtn: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 10, backgroundColor: '#1a1a1e' },
  filterBtnActive: { backgroundColor: '#8b5cf625' },
  filterText: { fontSize: 13, fontWeight: '600', color: '#52525b' },
  filterTextActive: { color: '#8b5cf6' },
  card: { backgroundColor: '#1a1a1e', borderRadius: 14, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: '#27272a' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardArabic: { fontSize: 24, color: '#8b5cf6', fontWeight: '700' },
  cardLatin: { fontSize: 14, color: '#d4d4d8', marginTop: 4 },
  cardTurkce: { fontSize: 13, color: '#a1a1aa', marginTop: 6, lineHeight: 18 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#1a1a1e', borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 24 },
  modalHandle: { width: 36, height: 4, backgroundColor: '#3f3f46', borderRadius: 2, alignSelf: 'center', marginBottom: 20 },
  modalClose: { position: 'absolute', right: 20, top: 20 },
  modalArabic: { fontSize: 40, color: '#8b5cf6', textAlign: 'center', fontWeight: '700' },
  modalLatin: { fontSize: 18, color: '#d4d4d8', textAlign: 'center', marginTop: 8 },
  modalDivider: { height: 1, backgroundColor: '#27272a', marginVertical: 20 },
  modalLabel: { fontSize: 11, fontWeight: '700', color: '#71717a', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 },
  modalMeaning: { fontSize: 15, color: '#d4d4d8', lineHeight: 24, marginBottom: 16 },
  modalExample: { fontSize: 13, color: '#a1a1aa', fontStyle: 'italic', lineHeight: 20 },
});
