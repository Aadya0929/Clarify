import { Image, StyleSheet, View } from "react-native";

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 60,
  },

  logo: {
    width: 110,
    height: 110,
    borderRadius: 24,
  },
});