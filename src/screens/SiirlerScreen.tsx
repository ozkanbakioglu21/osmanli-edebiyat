import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { siirler, Siir } from '../data/siirler';
import { useKullanici } from '../store/kullanici';

export function SiirlerScreen() {
  const insets = useSafeAreaInsets();
  const [seciliDonem, setSeciliDonem] = useState<string | null>(null);
  const [seciliSiir, setSeciliSiir] = useState<Siir | null>(null);
  const [gorunum, setGorunum] = useState<'orijinal' | 'latin' | 'turkce'>('orijinal');
  const { favori_siir, siirFavorile, siirEkle } = useKullanici();

  const donemler = ['Tümü', 'Divan', 'Halk'];
  const filtrelenmis = seciliDonem && seciliDonem !== 'Tümü'
    ? siirler.filter((s) => s.donem === seciliDonem)
    : siirler;

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: insets.top + 12, paddingHorizontal: 16, paddingBottom: 8 }}>
        <Text style={styles.title}>Şiirler</Text>
        <View style={styles.filterRow}>
          {donemler.map((d) => (
            <TouchableOpacity
              key={d}
              style={[styles.filterBtn, seciliDonem === d || (!seciliDonem && d === 'Tümü') ? styles.filterBtnActive : null]}
              onPress={() => setSeciliDonem(d === 'Tümü' ? null : d)}
              activeOpacity={0.7}
            >
              <Text style={[styles.filterText, seciliDonem === d || (!seciliDonem && d === 'Tümü') ? styles.filterTextActive : null]}>{d}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <FlatList
        data={filtrelenmis}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => { setSeciliSiir(item); siirEkle(); }} activeOpacity={0.7}>
            <View style={styles.cardHeader}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{item.baslik}</Text>
                <Text style={styles.cardAuthor}>{item.sair} · {item.nazim_sekli}</Text>
              </View>
              <TouchableOpacity onPress={() => siirFavorile(item.id)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                <Ionicons name={favori_siir.includes(item.id) ? 'heart' : 'heart-outline'} size={20} color={favori_siir.includes(item.id) ? '#ef4444' : '#52525b'} />
              </TouchableOpacity>
            </View>
            <Text style={styles.cardPreview} numberOfLines={2}>{item.latin}</Text>
          </TouchableOpacity>
        )}
      />

      <Modal visible={!!seciliSiir} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { paddingBottom: insets.bottom + 24 }]}>
            <View style={styles.modalHandle} />
            <TouchableOpacity style={styles.modalClose} onPress={() => setSeciliSiir(null)} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
              <Ionicons name="close" size={22} color="#52525b" />
            </TouchableOpacity>
            {seciliSiir && (
              <>
                <Text style={styles.modalTitle}>{seciliSiir.baslik}</Text>
                <Text style={styles.modalAuthor}>{seciliSiir.sair} · {seciliSiir.donem} · {seciliSiir.nazim_sekli}</Text>

                <View style={styles.viewToggle}>
                  {(['orijinal', 'latin', 'turkce'] as const).map((v) => (
                    <TouchableOpacity
                      key={v}
                      style={[styles.viewBtn, gorunum === v && styles.viewBtnActive]}
                      onPress={() => setGorunum(v)}
                      activeOpacity={0.7}
                    >
                      <Text style={[styles.viewText, gorunum === v && styles.viewTextActive]}>
                        {v === 'orijinal' ? 'Orijinal' : v === 'latin' ? 'Latin' : 'Türkçe'}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <Text style={styles.modalText}>
                  {gorunum === 'orijinal' ? seciliSiir.orijinal : gorunum === 'latin' ? seciliSiir.latin : seciliSiir.turkce}
                </Text>

                <Text style={styles.modalKaynak}>Kaynak: {seciliSiir.kaynak}</Text>
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
  filterRow: { flexDirection: 'row', gap: 8, marginTop: 12 },
  filterBtn: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 10, backgroundColor: '#1a1a1e' },
  filterBtnActive: { backgroundColor: '#8b5cf625' },
  filterText: { fontSize: 13, fontWeight: '600', color: '#52525b' },
  filterTextActive: { color: '#8b5cf6' },
  card: { backgroundColor: '#1a1a1e', borderRadius: 14, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: '#27272a' },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  cardTitle: { fontSize: 15, fontWeight: '700', color: '#fff' },
  cardAuthor: { fontSize: 12, color: '#71717a', marginTop: 2 },
  cardPreview: { fontSize: 13, color: '#a1a1aa', marginTop: 8, lineHeight: 18 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#1a1a1e', borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 24, maxHeight: '85%' },
  modalHandle: { width: 36, height: 4, backgroundColor: '#3f3f46', borderRadius: 2, alignSelf: 'center', marginBottom: 20 },
  modalClose: { position: 'absolute', right: 20, top: 20 },
  modalTitle: { fontSize: 20, fontWeight: '800', color: '#fff', textAlign: 'center' },
  modalAuthor: { fontSize: 13, color: '#71717a', textAlign: 'center', marginTop: 4 },
  viewToggle: { flexDirection: 'row', gap: 8, marginTop: 20 },
  viewBtn: { flex: 1, paddingVertical: 10, borderRadius: 12, backgroundColor: '#27272a', alignItems: 'center' },
  viewBtnActive: { backgroundColor: '#8b5cf625' },
  viewText: { fontSize: 13, fontWeight: '600', color: '#52525b' },
  viewTextActive: { color: '#8b5cf6' },
  modalText: { fontSize: 16, color: '#d4d4d8', lineHeight: 28, marginTop: 20, textAlign: 'center' },
  modalKaynak: { fontSize: 11, color: '#52525b', textAlign: 'center', marginTop: 20, fontStyle: 'italic' },
});
