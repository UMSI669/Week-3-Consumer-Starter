import { Tabs } from 'expo-router';
import { MenuAdapter } from '../../components/LibraryAdapters';
export default function TabLayout() { return <Tabs tabBar={(props) => <MenuAdapter {...props} />} screenOptions={{ headerShown: false }}><Tabs.Screen name="index" options={{ title: 'Home', tabBarLabel: 'Home', tabBarIconText: '⌂' }} /><Tabs.Screen name="search" options={{ title: 'Search', tabBarLabel: 'Search', tabBarIconText: '⌕' }} /><Tabs.Screen name="profile" options={{ title: 'Profile', tabBarLabel: 'Profile', tabBarIconText: 'profile' }} /></Tabs>; }
