import { useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SearchField } from 'si669-inclass-3';
import { BookCard } from '../../components/BookCard';
import { HeaderAdapter } from '../../components/LibraryAdapters';
import { CategoryChips, EmptyState, SectionHeading } from '../../components/UI';
import { categories, nearbyBooks } from '../../data/books';
import { colors, space } from '../../theme';
export default function SearchScreen() { const router = useRouter(); const [query, setQuery] = useState(''); const [category, setCategory] = useState('All'); const results = useMemo(() => nearbyBooks.filter((book) => { const matchesText = `${book.title} ${book.author}`.toLowerCase().includes(query.trim().toLowerCase()); const matchesCategory = category === 'All' || book.categories.includes(category) || book.desiredTradeCategories.includes(category); return matchesText && matchesCategory; }), [query, category]); return <View style={styles.page}><HeaderAdapter title="Find your next read" subtitle="Search titles, authors, or browse a shelf." /><ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.content}><View style={styles.searchWrap}><SearchField accessibilityLabel="Search by title or author" onChangeText={setQuery} placeholder="Search title or author" value={query} /></View><SectionHeading title="Browse categories" /><CategoryChips values={categories} selected={category} onSelect={setCategory} /><SectionHeading title={query || category !== 'All' ? `${results.length} matching books` : 'Popular nearby'} />{results.length ? results.map((book) => <BookCard key={book.id} book={book} onPress={() => router.push(`/book/${book.id}`)} />) : <EmptyState query={query} />}</ScrollView></View>; }
const styles = StyleSheet.create({ page: { backgroundColor: colors.paper, flex: 1 }, content: { paddingHorizontal: space.md, paddingBottom: space.md }, searchWrap: { marginTop: space.md } });
