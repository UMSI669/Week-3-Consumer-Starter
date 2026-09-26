import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Input, List } from "week-3-inclass";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";

export default function HydrationScreen() {
  const [value, setValue] = useState("");

  return (
    <View style={styles.screen}>
      <Header />
      <ScrollView style={styles.body} contentContainerStyle={styles.content}>
        <Text style={styles.title}>Hydration</Text>
        <View style={styles.stats}>
          <List variant="bullet" text="Status: Optimal" />
          <List variant="bullet" text="Current Amount: 800 mL" />
          <List variant="bullet" text="Goal: 2000 mL" />
        </View>
        <View style={styles.form}>
          <Input
            value={value}
            onChangeText={setValue}
            variant="secondary"
            placeholder="Jason Miller"
          />
          <Button
            title="Save"
            variant={value.trim() ? "primary" : "secondary"}
          />
        </View>
      </ScrollView>
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: "#FFFFFF", flex: 1 },
  body: { flex: 1 },
  content: { paddingHorizontal: 40, paddingTop: 64 },
  title: {
    color: "#000000",
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 40,
    textAlign: "center",
  },
  stats: { gap: 8, marginTop: 32 },
  form: { gap: 16, marginTop: 24 },
});
