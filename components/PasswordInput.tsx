import { View, Text, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type PasswordInputProps = {
  label: string;
  placeholder: string;
};

export default function PasswordInput({
  label,
  placeholder,
}: PasswordInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="lock-outline"
          size={22}
          color="#94A3B8"
        />

        <TextInput
          placeholder={placeholder}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#94A3B8"
        />

        <MaterialCommunityIcons
          name="eye-outline"
          size={22}
          color="#94A3B8"
        />
      </View>
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

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#E2E8F0",

    borderRadius: 16,

    paddingHorizontal: 16,
    height: 58,
  },

  input: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 16,
  },
});