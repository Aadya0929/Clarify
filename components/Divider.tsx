import { View, Text, StyleSheet } from "react-native";

export default function Divider() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />

      <Text style={styles.text}>OR</Text>

      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 28,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },

  text: {
    marginHorizontal: 14,
    color: "#64748B",
    fontSize: 14,
    fontWeight: "600",
  },
});