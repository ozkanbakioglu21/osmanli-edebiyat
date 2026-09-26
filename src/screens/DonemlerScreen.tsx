import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DONEMLER = [
  {
    id: 'divan',
    ad: 'Divan Edebiyatı',
    yil: '1300-1860',
    renk: '#8b5cf6',
    ozet: 'Osmanlı sarayında ve aydın çevrelerinde gelişen edebi gelenek.',
    yazarlar: ['Fuzûlî', 'Bâkî', 'Nedîm', 'Nef\'î', 'Şeyh Galip'],
    ozellikler: ['Aruz vezni', 'Divan şiiri', 'Arapça/Farsça kelimeler', 'Sanat için sanat'],
    metinler: [
      { baslik: 'Beni Candan Usandırdı', yazar: 'Fuzûlî', tur: 'Gazel' },
      { baslik: 'Kanuni Mersiyesi', yazar: 'Bâkî', tur: 'Terkib-i Bend' },
    ],
  },
  {
    id: 'halk',
    ad: 'Halk Edebiyatı',
    yil: '1300-günümüz',
    renk: '#10b981',
    ozet: 'Halk arasında sözlü gelenekle aktarılan edebi eserler.',
    yazarlar: ['Yunus Emre', 'Karacaoğlan', 'Pir Sultan Abdal', 'Âşık Veysel'],
    ozellikler: ['Hece ölçüsü', 'Sade dil', 'Halkın dili', 'Sözlü gelenek'],
    metinler: [
      { baslik: 'Gelin Tanşık Edelim', yazar: 'Yunus Emre', tur: 'Dörtlük' },
      { baslik: 'Dağlar Dağlar', yazar: 'Karacaoğlan', tur: 'Koşma' },
    ],
  },
  {
    id: 'tanzimat',
    ad: 'Tanzimat',
    yil: '1860-1896',
    renk: '#f59e0b',
    ozet: 'Batılılaşma döneminde yazılan edebi eserler.',
    yazarlar: ['Şinasi', 'Namık Kemal', 'Ziya Paşa', 'Ahmet Mithat Efendi'],
    ozellikler: ['Milliyetçilik', 'Halkın dili', 'Batılı formlar', 'Siyasi eleştiri'],
    metinler: [
      { baslik: 'Şair Evlenmesi', yazar: 'Şinasi', tur: 'Tiyatro' },
      { baslik: 'Vatan Yahut Silistre', yazar: 'Namık Kemal', tur: 'Tiyatro' },
    ],
  },
];

export function DonemlerScreen() {
  const insets = useSafeAreaInsets();
  const [seciliDonem, setSeciliDonem] = useState<typeof DONEMLER[0] | null>(null);
  const [aktifSekme, setAktifSekme] = useState<'genel' | 'yazarlar' | 'metinler'>('genel');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: insets.top + 12, paddingBottom: 100 }}>
      <Text style={styles.title}>Edebiyat Dönemleri</Text>

      {DONEMLER.map((donem) => (
        <TouchableOpacity key={donem.id} style={styles.card} onPress={() => { setSeciliDonem(donem); setAktifSekme('genel'); }} activeOpacity={0.7}>
          <View style={[styles.cardDot, { backgroundColor: donem.renk }]} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.cardTitle, { color: donem.renk }]}>{donem.ad}</Text>
            <Text style={styles.cardYear}>{donem.yil}</Text>
            <Text style={styles.cardDesc} numberOfLines={2}>{donem.ozet}</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#3f3f46" />
        </TouchableOpacity>
      ))}

      <Modal visible={!!seciliDonem} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { paddingBottom: insets.bottom + 24 }]}>
            <View style={styles.modalHandle} />
            <TouchableOpacity style={styles.modalClose} onPress={() => setSeciliDonem(null)} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
              <Ionicons name="close" size={22} color="#52525b" />
            </TouchableOpacity>
            {seciliDonem && (
              <>
                <View style={[styles.modalBadge, { backgroundColor: seciliDonem.renk + '20' }]}>
                  <Text style={[styles.modalBadgeText, { color: seciliDonem.renk }]}>{seciliDonem.ad}</Text>
                </View>
                <Text style={styles.modalYear}>{seciliDonem.yil}</Text>
                <Text style={styles.modalDesc}>{seciliDonem.ozet}</Text>

                <View style={styles.tabRow}>
                  {(['genel', 'yazarlar', 'metinler'] as const).map((tab) => (
                    <TouchableOpacity key={tab} style={[styles.tab, aktifSekme === tab && styles.tabActive]} onPress={() => setAktifSekme(tab)} activeOpacity={0.7}>
                      <Text style={[styles.tabText, aktifSekme === tab && styles.tabTextActive]}>
                        {tab === 'genel' ? 'Genel' : tab === 'yazarlar' ? 'Yazarlar' : 'Metinler'}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {aktifSekme === 'genel' && (
                  <View>
                    <Text style={styles.subTitle}>Özellikler</Text>
                    {seciliDonem.ozellikler.map((o, i) => (
                      <View key={i} style={styles.listItem}>
                        <View style={[styles.listDot, { backgroundColor: seciliDonem.renk }]} />
                        <Text style={styles.listText}>{o}</Text>
                      </View>
                    ))}
                  </View>
                )}

                {aktifSekme === 'yazarlar' && (
                  <View style={{ gap: 8 }}>
                    {seciliDonem.yazarlar.map((y, i) => (
                      <View key={i} style={styles.writerCard}>
                        <View style={[styles.writerAvatar, { backgroundColor: seciliDonem.renk + '20' }]}>
                          <Text style={[styles.writerInitial, { color: seciliDonem.renk }]}>{y[0]}</Text>
                        </View>
                        <Text style={styles.writerName}>{y}</Text>
                      </View>
                    ))}
                  </View>
                )}

                {aktifSekme === 'metinler' && (
                  <View style={{ gap: 8 }}>
                    {seciliDonem.metinler.map((m, i) => (
                      <View key={i} style={styles.textCard}>
                        <Text style={styles.textTitle}>{m.baslik}</Text>
                        <Text style={styles.textMeta}>{m.yazar} · {m.tur}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#09090b' },
  title: { fontSize: 24, fontWeight: '800', color: '#fff', paddingHorizontal: 16, marginBottom: 16 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1a1a1e', marginHorizontal: 16, borderRadius: 14, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: '#27272a' },
  cardDot: { width: 10, height: 10, borderRadius: 5, marginRight: 12 },
  cardTitle: { fontSize: 16, fontWeight: '800' },
  cardYear: { fontSize: 12, color: '#71717a', marginTop: 2 },
  cardDesc: { fontSize: 13, color: '#a1a1aa', marginTop: 4, lineHeight: 18 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#1a1a1e', borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 24, maxHeight: '85%' },
  modalHandle: { width: 36, height: 4, backgroundColor: '#3f3f46', borderRadius: 2, alignSelf: 'center', marginBottom: 20 },
  modalClose: { position: 'absolute', right: 20, top: 20 },
  modalBadge: { alignSelf: 'center', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 10 },
  modalBadgeText: { fontSize: 13, fontWeight: '800' },
  modalYear: { fontSize: 14, color: '#71717a', textAlign: 'center', marginTop: 8 },
  modalDesc: { fontSize: 14, color: '#a1a1aa', textAlign: 'center', marginTop: 10, lineHeight: 22 },
  tabRow: { flexDirection: 'row', gap: 8, marginTop: 20 },
  tab: { flex: 1, paddingVertical: 10, borderRadius: 12, backgroundColor: '#27272a', alignItems: 'center' },
  tabActive: { backgroundColor: '#8b5cf625' },
  tabText: { fontSize: 13, fontWeight: '600', color: '#52525b' },
  tabTextActive: { color: '#8b5cf6' },
  subTitle: { fontSize: 12, fontWeight: '700', color: '#71717a', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 10 },
  listItem: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  listDot: { width: 6, height: 6, borderRadius: 3 },
  listText: { fontSize: 14, color: '#d4d4d8' },
  writerCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#27272a', borderRadius: 12, padding: 12, gap: 12 },
  writerAvatar: { width: 36, height: 36, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  writerInitial: { fontSize: 16, fontWeight: '800' },
  writerName: { fontSize: 14, fontWeight: '600', color: '#d4d4d8' },
  textCard: { backgroundColor: '#27272a', borderRadius: 12, padding: 14 },
  textTitle: { fontSize: 14, fontWeight: '700', color: '#fff' },
  textMeta: { fontSize: 12, color: '#71717a', marginTop: 4 },
});
