import { StyleSheet, Text, View } from 'react-native';
import HealthIcon from '../../assets/health.svg';
import ProfileIcon from '../../assets/profile.svg';

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.brand}>
        <HealthIcon height={24} width={24} />
        <Text style={styles.title}>Health</Text>
      </View>
      <ProfileIcon height={24} width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    borderBottomColor: '#C3C3C3',
    borderBottomWidth: 2,
    flexDirection: 'row',
    height: 88,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  brand: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  title: {
    color: '#000000',
    fontSize: 20,
    lineHeight: 24,
  },
});
