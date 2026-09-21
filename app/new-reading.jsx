import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Header, Input, colors, spacing } from 'si669-component-library';

const moods = ['Frostbound', 'Mistbound', 'Temperate', 'Sunlit', 'Solar flare'];

export default function NewReading() {
  const [selected, setSelected] = useState('');
  const [note, setNote] = useState('');
  return <View style={styles.root}><Header siteName="New reading" /><ScrollView contentContainerStyle={styles.content}><Button variant="secondary" size="small" onPress={() => router.back()}>Back</Button><Text style={styles.title}>Take the temperature</Text><Text style={styles.body}>Which description best matches your inner weather?</Text><View style={styles.choices}>{moods.map((mood) => <Button key={mood} size="small" variant={selected === mood ? 'primary' : 'secondary'} onPress={() => setSelected(mood)}>{mood}</Button>)}</View><Input label="Field note (optional)" value={note} onChangeText={setNote} placeholder="What is moving through the sky?" hint={`${note.length}/180 characters`} maxLength={180} multiline /><Button size="large" disabled={!selected} onPress={() => router.push('/climate')}>Save reading</Button></ScrollView></View>;
}

const styles = StyleSheet.create({ root: { backgroundColor: colors.canvas, flex: 1 }, content: { gap: spacing.lg, padding: spacing.xl }, title: { color: colors.ink, fontSize: 34, fontWeight: '800' }, body: { color: colors.muted, fontSize: 16, lineHeight: 24 }, choices: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm } });
