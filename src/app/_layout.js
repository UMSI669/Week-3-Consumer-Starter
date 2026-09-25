import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from '../theme';
export default function RootLayout() { return <SafeAreaProvider><StatusBar style="dark" /><Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.paper } }}><Stack.Screen name="(tabs)" /><Stack.Screen name="book/[id]" options={{ presentation: 'card' }} /></Stack></SafeAreaProvider>; }
