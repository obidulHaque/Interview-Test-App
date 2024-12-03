import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Heading Text */}
      <Text style={styles.headingText}>Hello, Welcome to Test App!</Text>

      {/* Navigation Link */}
      <Link href="/game-board" asChild>
        <Text style={styles.linkText}>Press Here to text App</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6B7280", // Secondary color
  },
  linkText: {
    fontWeight: "800",
    backgroundColor: "#EF4444", // Red color
    color: "#FFFFFF", // White text
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 16,
    borderRadius: 20,
    textAlign: "center",
  },
  placeholderText: {
    fontWeight: "600",
    fontSize: 32, // Adjusted for readability
    color: "#10B981", // Green color
    marginTop: 24,
  },
});

export default App;
