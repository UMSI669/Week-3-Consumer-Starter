
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Button, Header, ListItem } from 'week-3-starter';
import { useMaintenance } from '../context/MaintenanceContext';

export default function ItemsScreen() {
  const { items } = useMaintenance();

  return (
    <View style={styles.container}>
      <Header title="Maintenance Items" />

      <Text style={styles.description}>
        Equipment and maintenance tasks
      </Text>

      {items.map((item) => (
        <ListItem key={item.id} title={item.name} />
      ))}

      <Button
        label="Add New Item"
        onPress={() => router.push('/add-item')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
    backgroundColor: '#F5F1E8',
  },
  description: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 12,
  },
});