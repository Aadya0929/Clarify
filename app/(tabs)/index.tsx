import { ScrollView } from "react-native";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Featurecard from "../../components/Featurecard";

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

      <Featurecard
  icon="📊"
  title="Smart Dashboard"
  description="See your next best action instantly"
/>

<Featurecard
  icon="✅"
  title="Intelligent Task Manager"
  description="Auto-prioritized study tasks"
/>

<Featurecard
  icon="🤖"
  title="AI Study Assistant"
  description="Learn concepts, not just answers"
/>

<Featurecard
  icon="⏰"
  title="Focus Mode"
  description="Distraction-free study sessions"
/>

<Featurecard
  icon="📅"
  title="Adaptive Study Planner"
  description="Plans that evolve with you"
/>

<Featurecard
  icon="📈"
  title="Student Analytics"
  description="Insights into how you actually study"
/>

<Featurecard
  icon="🎯"
  title="Exam Tracker"
  description="Countdown and gap analysis"
/>

<Featurecard
  icon="📖"
  title="Mistake Notebook"
  description="Track and fix recurring errors"
/>
    </ScrollView>
  );
}