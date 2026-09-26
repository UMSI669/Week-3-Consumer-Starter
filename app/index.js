
import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Button, Header } from 'week-3-starter';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title="Home Maintenance Tracker" />

      <Button
        label="View Maintenance Items"
        onPress={() => router.push('/items')}
      />

      <Button
        label="Add Maintenance Item"
        onPress={() => router.push('/add-item')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 20,
    backgroundColor: '#F5F1E8',
  },
});