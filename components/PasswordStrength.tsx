import { View, Text, StyleSheet } from "react-native";

type PasswordStrengthProps = {
  strength: "Weak" | "Medium" | "Strong";
};

export default function PasswordStrength({
  strength,
}: PasswordStrengthProps) {
  const fillWidth =
    strength === "Weak"
      ? "33%"
      : strength === "Medium"
      ? "66%"
      : "100%";

  const fillColor =
    strength === "Weak"
      ? "#EF4444"
      : strength === "Medium"
      ? "#F59E0B"
      : "#22C55E";

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Password Strength:{" "}
        <Text style={{ color: fillColor }}>
          {strength}
        </Text>
      </Text>

      <View style={styles.barBackground}>
        <View
          style={[
            styles.barFill,
            {
              width: fillWidth,
              backgroundColor: fillColor,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 22,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 8,
  },

  barBackground: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 999,
    overflow: "hidden",
  },

  barFill: {
    height: "100%",
    borderRadius: 999,
  },
});