import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Clarify</Text>

      <View style={styles.buttons}>
        <TouchableOpacity>
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton}>
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
    paddingHorizontal: 24,
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
    gap: 18,
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
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});