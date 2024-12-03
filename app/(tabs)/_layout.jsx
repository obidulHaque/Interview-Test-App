import { StatusBar } from "expo-status-bar";
import { Tabs, useSegments } from "expo-router";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Header from "../../components/header"; // Import custom Header component
import { icons } from "../../constants";

const { width: screenWidth } = Dimensions.get("window");

// Tab Icon Component
const TabIcon = ({ icon, color, name, focused }) => (
  <View style={styles.tabIconContainer}>
    <Image
      source={icon}
      resizeMode="contain"
      style={[styles.tabIcon, { tintColor: color }]}
    />
    <Text
      style={[styles.tabText, { color, fontWeight: focused ? "600" : "400" }]}
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {name}
    </Text>
  </View>
);

const TabLayout = () => {
  // Custom tab options
  const tabScreenOptions = {
    tabBarActiveTintColor: "#FFA001",
    tabBarInactiveTintColor: "#ffffff",
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: "#1F1B1B",
      borderTopWidth: 1,
      borderTopColor: "#232533",
      height: 84,
      width: screenWidth,
    },
    tabBarItemStyle: {
      padding: 20,
      paddingHorizontal: 40,
    },
  };

  const segments = useSegments();
  const isChatScreen = segments.includes("chat");

  return (
    <>
      {/* Conditionally render Header */}
      {!isChatScreen && <Header />}

      <Tabs screenOptions={tabScreenOptions}>
        <Tabs.Screen
          name="register"
          options={{
            title: "Register",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.rester}
                color={color}
                name="Register"
                focused={focused}
              />
            ),
            tabBarButton: ({ children, onPress }) => (
              <TouchableWithoutFeedback onPress={() => null}>
                <View>{children}</View>
              </TouchableWithoutFeedback>
            ),
          }}
        />
        <Tabs.Screen
          name="game-board"
          options={{
            title: "Game Board",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.gameBoard}
                color={color}
                name="Game Board"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="ranking"
          options={{
            title: "Ranking",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.ranking}
                color={color}
                name="Ranking"
                focused={focused}
              />
            ),
            tabBarButton: ({ children, onPress }) => (
              <TouchableWithoutFeedback onPress={() => null}>
                <View>{children}</View>
              </TouchableWithoutFeedback>
            ),
          }}
        />
        <Tabs.Screen
          name="news"
          options={{
            title: "News",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.news}
                color={color}
                name="News"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarButton: () => null,
          }}
        />
      </Tabs>

      {/* Status Bar */}
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

// Styles
const styles = StyleSheet.create({
  tabIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingLeft: 80,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabText: {
    fontSize: 12,
    textAlign: "center",
    width: "100%",
    overflow: "hidden",
  },
});

export default TabLayout;
