import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

type FeatureCardProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
  <View style={styles.card}>
    <View style={styles.iconContainer}>
  <MaterialCommunityIcons
    name={icon}
    size={28}
    color="#4F46E5"
  />
</View>

    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F8FAFC",
    borderRadius: 22,
    padding: 18,
    marginBottom: 18,

    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,

    elevation: 3,
  },

  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 16,
  },
  
  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
  },

  description: {
    marginTop: 4,
    fontSize: 15,
    color: "#64748B",
  },
});