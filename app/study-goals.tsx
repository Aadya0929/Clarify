import { ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";

import ProgressBar from "../components/ProgressBar";
import AuthHeader from "../components/AuthHeader";
import GoalOption from "../components/GoalOption";
import PrimaryButton from "../components/PrimaryButton";

export default function StudyGoalsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <ProgressBar
        currentStep={5}
        totalSteps={7}
      />

      <AuthHeader
        title="What's your daily goal?"
        subtitle="Choose the target that feels realistic."
      />

      <GoalOption
        title="30 Minutes"
        subtitle="Build consistency"
      />

      <GoalOption
        title="1 Hour"
        subtitle="Balanced progress"
        selected
      />

      <GoalOption
        title="2 Hours"
        subtitle="Serious preparation"
      />

      <GoalOption
        title="3+ Hours"
        subtitle="Maximum focus"
      />

      <PrimaryButton
        title="Continue"
        onPress={() => router.push("/notifications")}
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