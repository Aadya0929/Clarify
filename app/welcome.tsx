import { ScrollView, StyleSheet, View, Text } from "react-native";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProgressBar from "../components/ProgressBar";
import PrimaryButton from "../components/PrimaryButton";

export default function WelcomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <ProgressBar
        currentStep={7}
        totalSteps={7}
      />

      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="check-circle"
          size={90}
          color="#3468F6"
        />
      </View>

      <Text style={styles.title}>
        You're all set! 🎉
      </Text>

      <Text style={styles.subtitle}>
        Welcome to Clarify.
        {"\n\n"}
        Your personalized study companion is ready to help you stay focused,
        organized, and achieve your academic goals.
      </Text>

      <PrimaryButton
        title="Go to Dashboard"
        onPress={() => router.replace("/(tabs)")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 60,
    justifyContent: "center",
  },

  iconContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    color: "#1E293B",
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 17,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 28,
    marginBottom: 50,
  },
});