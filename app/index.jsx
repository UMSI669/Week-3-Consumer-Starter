import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Header, List, colors, spacing } from 'si669-component-library';

const recent = [{ id: '1', title: 'Sunlit', description: 'A bright start with a few clouds of doubt.' }, { id: '2', title: 'Temperate', description: 'Steady energy carried through the afternoon.' }];

export default function Today() {
  return <View style={styles.root}><Header siteName="Weather Notes" loggedIn userName="Navigator" /><ScrollView contentContainerStyle={styles.content}><Text style={styles.eyebrow}>TODAY&apos;S READING</Text><Text style={styles.title}>How is your sky?</Text><Text style={styles.body}>Choose an emotional temperature, add a note, and keep a gentle record of the week.</Text><View style={styles.illustration}><Text style={styles.sun}>☼</Text></View><Button size="large" onPress={() => router.push('/new-reading')}>Create a reading</Button><View style={styles.section}><Text style={styles.sectionTitle}>Recent notes</Text><List items={recent} variant="bordered" /></View><Button variant="secondary" onPress={() => router.push('/climate')}>Open weekly climate</Button></ScrollView></View>;
}

const styles = StyleSheet.create({ root: { backgroundColor: colors.canvas, flex: 1 }, content: { gap: spacing.lg, padding: spacing.xl }, eyebrow: { color: colors.primary, fontSize: 12, fontWeight: '800', letterSpacing: 1 }, title: { color: colors.ink, fontSize: 36, fontWeight: '800' }, body: { color: colors.muted, fontSize: 16, lineHeight: 24 }, illustration: { alignItems: 'center', alignSelf: 'center', backgroundColor: '#dbeafe', borderRadius: 90, height: 150, justifyContent: 'center', marginVertical: spacing.lg, width: 150 }, sun: { color: colors.primary, fontSize: 72 }, section: { gap: spacing.md, marginTop: spacing.lg }, sectionTitle: { color: colors.ink, fontSize: 20, fontWeight: '800' } });
