import { ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

import ProgressBar from "../components/ProgressBar";
import AuthHeader from "../components/AuthHeader";
import ExamOption from "../components/ExamOption";
import PrimaryButton from "../components/PrimaryButton";

export default function AcademicProfileScreen() {
  const [selectedExams, setSelectedExams] = useState<string[]>([]);

  const toggleExam = (exam: string) => {
    setSelectedExams((current) =>
      current.includes(exam)
        ? current.filter((item) => item !== exam)
        : [...current, exam]
    );
  };

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
        selected={selectedExams.includes("JEE")}
        onPress={() => toggleExam("JEE")}
      />

      <ExamOption
        title="NEET"
        subtitle="National Eligibility Cum Entrance Test"
        selected={selectedExams.includes("NEET")}
        onPress={() => toggleExam("NEET")}
      />

      <ExamOption
        title="CBSE Boards"
        subtitle="Class 12 Board Examination"
        selected={selectedExams.includes("CBSE")}
        onPress={() => toggleExam("CBSE")}
      />

      <ExamOption
        title="ICSE"
        subtitle="Council for the Indian School Certificate Examinations"
        selected={selectedExams.includes("ICSE")}
        onPress={() => toggleExam("ICSE")}
      />

      <ExamOption
        title="College / University Exams"
        subtitle="Semester and Admission Tests"
        selected={selectedExams.includes("College")}
        onPress={() => toggleExam("College")}
      />

      <ExamOption
        title="UPSC"
        subtitle="Union Public Service Commission"
        selected={selectedExams.includes("UPSC")}
        onPress={() => toggleExam("UPSC")}
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