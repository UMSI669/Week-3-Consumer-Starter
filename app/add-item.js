
import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import { Header, TextInput, Button } from 'week-3-starter';

export default function AddItemScreen() {
  const [itemName, setItemName] = useState('');

  function handleSave() {
    if (!itemName.trim()) {
      Alert.alert('Missing information', 'Enter an item name.');
      return;
    }

    Alert.alert('Item entered', itemName, [
      {
        text: 'OK',
        onPress: () => router.push('/items'),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Header title="Add Maintenance Item" />

      <Text style={styles.label}>Equipment name</Text>

      <TextInput
        placeholder="e.g., Air conditioner"
        value={itemName}
        onChangeText={setItemName}
      />

      <Button
        label="Save Item"
        onPress={handleSave}
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#263E32',
  },
});