import { View, Text, StyleSheet } from "react-native";

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>CLARIFY</Text>

        <Text style={styles.step}>
          Step {currentStep} of {totalSteps}
        </Text>
      </View>

      <View style={styles.barBackground}>
        <View
          style={[
            styles.barFill,
            {
              width: `${(currentStep / totalSteps) * 100}%`,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  logo: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3468F6",
  },

  step: {
    fontSize: 13,
    color: "#64748B",
  },

  barBackground: {
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 999,
  },

  barFill: {
    height: 4,
    backgroundColor: "#3468F6",
    borderRadius: 999,
  },
});