import { ScrollView, StyleSheet } from "react-native";
import { router } from "expo-router";

import Logo from "../components/logo";
import AuthHeader from "../components/AuthHeader";
import AuthInput from "../components/AuthInput";
import PrimaryButton from "../components/PrimaryButton";
import Divider from "../components/Divider";
import SocialButton from "../components/SocialButton";
import TermsText from "../components/TermsText";

export default function SignUpScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Logo />

      <AuthHeader
        title="Create an account"
        subtitle="Enter your email to sign up for this app"
      />

      <AuthInput placeholder="email@domain.com" />

      <PrimaryButton
  title="Continue"
  onPress={() => router.push("/create-password")}
/>

      <Divider/>

      <SocialButton provider="google" />

      <SocialButton provider="apple" />

      <TermsText />
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
    paddingTop: 90,
    paddingBottom: 50,
  },
});