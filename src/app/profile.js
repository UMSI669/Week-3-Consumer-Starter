import { View, Text, StyleSheet } from 'react-native';
import { SleepTracker } from 'design_component';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <SleepTracker hoursSlept={6.5} goalHours={8} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 20, marginBottom: 16 },
});