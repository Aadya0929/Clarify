import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

type SocialButtonProps = {
  provider: "google" | "apple";
};

export default function SocialButton({
  provider,
}: SocialButtonProps) {
  const isGoogle = provider === "google";

  return (
    <TouchableOpacity style={styles.button}>
      {isGoogle ? (
        <AntDesign
          name="google"
          size={22}
          color="#EA4335"
        />
      ) : (
        <Ionicons
          name="logo-apple"
          size={22}
          color="#000"
        />
      )}

      <Text style={styles.text}>
        Continue with {isGoogle ? "Google" : "Apple"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "#E5E7EB",

    borderRadius: 16,

    paddingVertical: 16,

    marginBottom: 14,

    backgroundColor: "#FFFFFF",
  },

  text: {
    marginLeft: 12,
    fontSize: 17,
    fontWeight: "600",
    color: "#1E293B",
  },
});