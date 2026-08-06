import { ScrollView } from "react-native";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FeatureCard from "../../components/FeatureCard";
import CTA from "../../components/CTA";

export default function HomeScreen() {
  return (
    <ScrollView
      style={{
    flex: 1,
    backgroundColor: "#FFFFFF",
  }}
  contentContainerStyle={{
    paddingHorizontal: 24,
    paddingBottom: 40,
  }}
    >
      <Navbar />

      <Hero />

      <FeatureCard
  icon="view-dashboard-outline"
  title="Smart Dashboard"
  description="See your next best action instantly"
/>

<FeatureCard
  icon="check-circle-outline"
  title="Intelligent Task Manager"
  description="Auto-prioritized study tasks"
/>

<FeatureCard
  icon="robot-outline"
  title="AI Study Assistant"
  description="Learn concepts, not just answers"
/>

<FeatureCard
  icon="timer-outline"
  title="Focus Mode"
  description="Distraction-free study sessions"
/>

<FeatureCard
  icon="calendar-month-outline"
  title="Adaptive Study Planner"
  description="Plans that evolve with you"
/>

<FeatureCard
  icon="chart-line"
  title="Student Analytics"
  description="Insights into how you actually study"
/>

<FeatureCard
  icon="target"
  title="Exam Tracker"
  description="Countdown and gap analysis"
/>

<FeatureCard
  icon="book-open-page-variant-outline"
  title="Mistake Notebook"
  description="Track and fix recurring errors"
/>
<CTA />
    </ScrollView>
  );
}