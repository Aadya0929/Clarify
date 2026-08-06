import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  subtitle: string;
};

export default function AuthHeader({
  title,
  subtitle,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 40,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 28,
  },
});