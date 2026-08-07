import { ScrollView, StyleSheet, View } from "react-native";
import { router } from "expo-router";

import ProgressBar from "../components/ProgressBar";
import AuthHeader from "../components/AuthHeader";
import ProfileImagePicker from "../components/ProfileImagePicker";
import TextField from "../components/TextField";
import SecondaryButton from "../components/SecondaryButton";
import PrimaryButton from "../components/PrimaryButton";

export default function ProfileSetupScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <ProgressBar
        currentStep={3}
        totalSteps={7}
      />

      <AuthHeader
        title="Setup your profile"
        subtitle="Add details so classmates can recognize you."
      />

      <ProfileImagePicker />

      <TextField
        label="Full Name"
        placeholder="Sarah Jenkins"
      />

      <TextField
        label="Username"
        placeholder="@sarah_codes"
      />

      <View style={styles.row}>
        <SecondaryButton title="From Gallery" />
        <SecondaryButton title="Skip for Now" />
      </View>

      <PrimaryButton
        title="Continue"
        onPress={() => router.push("/academic-profile" as any)}
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

  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 28,
  },
});