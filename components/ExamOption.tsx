import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  title: string;
  subtitle: string;
  selected?: boolean;
  onPress?: () => void;
};

export default function ExamOption({
  title,
  subtitle,
  selected = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selected && styles.selected,
      ]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>

      <MaterialCommunityIcons
        name={
          selected
            ? "checkbox-marked-circle"
            : "checkbox-blank-circle-outline"
        }
        size={24}
        color={selected ? "#3468F6" : "#CBD5E1"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    padding: 18,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    borderRadius: 18,

    marginBottom: 14,

    backgroundColor: "#FFFFFF",
  },

  selected: {
    borderColor: "#3468F6",
    backgroundColor: "#EFF6FF",
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1E293B",
  },

  subtitle: {
    marginTop: 4,
    color: "#64748B",
    fontSize: 13,
  },
});