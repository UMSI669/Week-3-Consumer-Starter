import { View, Text, StyleSheet } from 'react-native';
import { ProgressRing } from 'design_component';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <ProgressRing value={72} accent="accent1" />
      <Text style={styles.caption}>72% complete</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
  caption: { marginTop: 12 },
});