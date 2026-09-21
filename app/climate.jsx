import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Header, List, colors, spacing } from 'si669-component-library';

const week = [{ id: 'mon', title: 'Monday · Temperate', description: 'Steady energy carried through the afternoon.' }, { id: 'tue', title: 'Tuesday · Mistbound', description: 'A cloudy day with brief windows of clarity.' }, { id: 'wed', title: 'Wednesday · Sunlit', description: 'Bright ideas gathered momentum.' }, { id: 'thu', title: 'Thursday · No reading', description: 'The instruments were quiet.' }];

export default function Climate() {
  return <View style={styles.root}><Header siteName="Weekly climate" /><ScrollView contentContainerStyle={styles.content}><Button variant="secondary" size="small" onPress={() => router.back()}>Back</Button><Text style={styles.title}>A week of weather</Text><Text style={styles.body}>A simple list of the emotional temperatures you have recorded.</Text><List items={week} variant="bordered" /><Button onPress={() => router.push('/new-reading')}>Add another reading</Button></ScrollView></View>;
}

const styles = StyleSheet.create({ root: { backgroundColor: colors.canvas, flex: 1 }, content: { gap: spacing.lg, padding: spacing.xl }, title: { color: colors.ink, fontSize: 34, fontWeight: '800' }, body: { color: colors.muted, fontSize: 16, lineHeight: 24 } });
