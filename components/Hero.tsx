import { View, Text, StyleSheet } from "react-native";

export default function Hero() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Study smarter.{"\n"}
        Know what to do next.
      </Text>

      <Text style={styles.description}>
        Clarify helps students stay organized, manage tasks,
        and focus on what matters with AI-powered study tools.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 40,
    marginBottom: 40,
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#1E293B",
    lineHeight: 46,
  },

  description: {
    marginTop: 16,
    fontSize: 17,
    color: "#64748B",
    lineHeight: 26,
  },
});