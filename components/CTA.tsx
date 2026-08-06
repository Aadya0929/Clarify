import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CTA() {
  return (
  <View style={styles.container}>

    <View style={styles.circleTop} />
    <View style={styles.circleBottom} />

    <Text style={styles.title}>Ready to excel?</Text>

    <Text style={styles.subtitle}>
      Join thousands of top-performing students mastering their exams with
      Clarify.
    </Text>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Get Started for Free</Text>
    </TouchableOpacity>

  </View>
);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F2A44",
    borderRadius: 28,
    padding: 24,
    marginTop: 28,
    marginBottom: 40,

    overflow: "hidden",
  },

  title: {
  color: "white",
  fontSize: 30,
  fontWeight: "700",
  marginBottom: 12,

  zIndex: 1,
},

  subtitle: {
    color: "#D6DCE5",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,

    zIndex: 1,
  },

  button: {
  backgroundColor: "#3468F6",
  borderRadius: 18,
  paddingVertical: 16,
  alignItems: "center",
  justifyContent: "center",

  zIndex: 1,
},

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  circleTop: {
  position: "absolute",
  width: 120,
  height: 120,
  borderRadius: 60,
  backgroundColor: "#3157B7",

  right: -35,
  top: -25,
},

circleBottom: {
  position: "absolute",
  width: 90,
  height: 90,
  borderRadius: 45,
  backgroundColor: "#27448F",

  left: -25,
  bottom: -30,
},
});