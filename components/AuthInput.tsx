import { TextInput, StyleSheet } from "react-native";

type Props = {
  placeholder: string;
};

export default function AuthInput({ placeholder }: Props) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#A1A1AA"
      style={styles.input}
      keyboardType="email-address"
      autoCapitalize="none"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 58,

    borderWidth: 1,
    borderColor: "#E5E7EB",

    borderRadius: 18,

    paddingHorizontal: 18,

    fontSize: 18,

    marginBottom: 24,

    backgroundColor: "#FFFFFF",
  },
});