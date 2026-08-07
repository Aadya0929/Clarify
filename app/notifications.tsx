import { ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";

import ProgressBar from "../components/ProgressBar";
import AuthHeader from "../components/AuthHeader";
import NotificationOption from "../components/NotificationOption";
import PrimaryButton from "../components/PrimaryButton";

export default function NotificationsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <ProgressBar
        currentStep={6}
        totalSteps={7}
      />

      <AuthHeader
        title="Stay on track"
        subtitle="Choose the reminders you'd like to receive."
      />

      <NotificationOption
        title="Daily Study Reminder"
        subtitle="Never miss your study session."
        selected
      />

      <NotificationOption
        title="Upcoming Exam Alerts"
        subtitle="Important exam countdowns."
      />

      <NotificationOption
        title="Weekly Progress Report"
        subtitle="See your learning streak."
      />

      <PrimaryButton
        title="Continue"
        onPress={() => router.push("/welcome")}
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