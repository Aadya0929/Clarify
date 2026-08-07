import { Text, StyleSheet } from "react-native";

export default function TermsText() {
  return (
    <Text style={styles.text}>
      By continuing, you agree to our{" "}
      <Text style={styles.link}>
        Terms of Service
      </Text>{" "}
      and{" "}
      <Text style={styles.link}>
        Privacy Policy
      </Text>
      .
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "#64748B",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 18,
  },

  link: {
    color: "#2563EB",
    fontWeight: "600",
  },
});