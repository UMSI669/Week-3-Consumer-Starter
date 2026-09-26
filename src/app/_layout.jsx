import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <Stack screenOptions={{ animation: 'none', headerShown: false }} />
      </SafeAreaView>
    </>
  );
}
