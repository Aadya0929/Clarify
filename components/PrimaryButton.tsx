import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
};

export default function PrimaryButton({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    height: 58,
    borderRadius: 18,

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 28,
  },

  text: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
  },
});