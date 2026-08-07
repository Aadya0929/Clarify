import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProfileImagePicker() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="account-outline"
        size={58}
        color="#94A3B8"
      />

      <View style={styles.camera}>
        <MaterialCommunityIcons
          name="camera"
          size={18}
          color="#FFFFFF"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",

    width: 110,
    height: 110,

    borderRadius: 55,

    backgroundColor: "#F8FAFC",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 30,
  },

  camera: {
    position: "absolute",

    right: 0,
    bottom: 0,

    width: 34,
    height: 34,

    borderRadius: 17,

    backgroundColor: "#3468F6",

    justifyContent: "center",
    alignItems: "center",
  },
});