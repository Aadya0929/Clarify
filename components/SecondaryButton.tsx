import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
};

export default function SecondaryButton({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,

    height: 50,

    borderRadius: 14,

    borderWidth: 1,
    borderColor: "#D1D5DB",

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FFFFFF",
  },

  text: {
    color: "#334155",
    fontWeight: "600",
    fontSize: 15,
  },
});