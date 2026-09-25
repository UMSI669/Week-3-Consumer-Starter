import { Tabs } from 'expo-router';
import { colors } from 'si669-component-library';

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.primary, tabBarStyle: { backgroundColor: colors.ink, borderTopColor: colors.border }, tabBarLabelStyle: { fontSize: 12 } }}>
      <Tabs.Screen name="index" options={{ title: 'Today' }} />
      <Tabs.Screen name="new-reading" options={{ title: 'New reading' }} />
      <Tabs.Screen name="climate" options={{ title: 'Climate' }} />
    </Tabs>
  );
}
