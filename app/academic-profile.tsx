import { ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";

import ProgressBar from "../components/ProgressBar";
import AuthHeader from "../components/AuthHeader";
import ExamOption from "../components/ExamOption";
import PrimaryButton from "../components/PrimaryButton";

export default function AcademicProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <ProgressBar
        currentStep={4}
        totalSteps={7}
      />

      <AuthHeader
        title="What are you preparing for?"
        subtitle="Select all that apply. This helps us customize your study guides."
      />

      <ExamOption
        title="JEE"
        subtitle="Joint Entrance Examination"
        selected
      />

      <ExamOption
        title="NEET"
        subtitle="National Eligibility cum Entrance Test"
      />

      <ExamOption
        title="CBSE Boards"
        subtitle="Class 12 Board Examination"
      />

      <ExamOption
        title="ICSE"
        subtitle="Council for the Indian School Certificate Examinations"
      />

      <ExamOption
        title="College / University Exams"
        subtitle="Semester and Admission Tests"
      />

      <ExamOption
        title="UPSC"
        subtitle="Union Public Service Commission"
      />

      <PrimaryButton
        title="Continue"
        onPress={() => router.push("/study-goals" as any)}
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