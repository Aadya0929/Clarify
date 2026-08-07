import { View, Text, TextInput, StyleSheet } from "react-native";

type Props = {
  label: string;
  placeholder: string;
};

export default function TextField({
  label,
  placeholder,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#94A3B8"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 8,
  },

  input: {
    height: 56,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    borderRadius: 16,

    paddingHorizontal: 18,

    fontSize: 16,

    backgroundColor: "#FFFFFF",
  },
});