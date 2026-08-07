import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  title: string;
  subtitle: string;
  selected?: boolean;
};

export default function NotificationOption({
  title,
  subtitle,
  selected = false,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selected && styles.selected,
      ]}
      activeOpacity={0.8}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <MaterialCommunityIcons
        name={selected ? "bell-ring" : "bell-outline"}
        size={24}
        color={selected ? "#3468F6" : "#94A3B8"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    padding: 18,

    borderRadius: 18,

    borderWidth: 1,
    borderColor: "#E2E8F0",

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
    fontSize: 13,
    color: "#64748B",
  },
});