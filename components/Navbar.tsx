import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Navbar() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>Clarify</Text>

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => router.push("/sign-up")}
        >
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => router.push("/sign-up")}
        >
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 32,
    paddingTop: 60,
    paddingBottom: 20,
  },

  logo: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1E293B",
  },

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  signIn: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E293B",
  },

  signUpButton: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },

  signUp: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});