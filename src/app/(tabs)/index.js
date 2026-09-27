import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BookCard } from '../../components/BookCard';
import { HeaderAdapter } from '../../components/LibraryAdapters';
import { SectionHeading } from '../../components/UI';
import { nearbyBooks } from '../../data/books';
import { colors, space } from '../../theme';
export default function NearbyScreen() { const router = useRouter(); return <View style={styles.page}><HeaderAdapter title="Books nearby" subtitle="Trade a good read for your next one." /><ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}><SectionHeading title="Fresh on the shelf" action="Browse all" onAction={() => router.navigate('/search')} />{nearbyBooks.map((book) => <BookCard key={book.id} book={book} onPress={() => router.push(`/book/${book.id}`)} />)}</ScrollView></View>; }
const styles = StyleSheet.create({ page: { backgroundColor: colors.paper, flex: 1 }, content: { paddingHorizontal: space.md, paddingBottom: space.md } });
