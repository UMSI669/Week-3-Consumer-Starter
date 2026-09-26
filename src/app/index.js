import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'design_component';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Card label="Daily steps">
        <Text style={styles.value}>8,420</Text>
        <Text style={styles.caption}>steps today</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
  value: { fontSize: 36, fontWeight: '700' },
  caption: { fontSize: 14, marginTop: 4 },
});