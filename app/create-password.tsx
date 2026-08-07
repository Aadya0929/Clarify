import { ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";

import ProgressBar from "../components/ProgressBar";
import AuthHeader from "../components/AuthHeader";
import PasswordInput from "../components/PasswordInput";
import PasswordStrength from "../components/PasswordStrength";
import PrimaryButton from "../components/PrimaryButton";

export default function CreatePasswordScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <ProgressBar
        currentStep={2}
        totalSteps={7}
      />

      <AuthHeader
        title="Create your password"
        subtitle="Set a password to secure your account. Use at least 8 characters including numbers and symbols."
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
      />

      <PasswordStrength strength="Strong" />

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm your password"
      />

      <PrimaryButton
  title="Continue"
  onPress={() => router.push("/profile-setup" as any)}
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
    paddingHorizontal: 28,
    paddingTop: 60,
    paddingBottom: 50,
  },
});