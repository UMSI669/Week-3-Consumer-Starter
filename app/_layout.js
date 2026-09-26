
import { Stack } from 'expo-router';
import { MaintenanceProvider } from '../context/MaintenanceContext';

export default function Layout() {
  return (
    <MaintenanceProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="items" options={{ title: 'Maintenance Items' }} />
        <Stack.Screen name="add-item" options={{ title: 'Add Item' }} />
      </Stack>
    </MaintenanceProvider>
  );
}