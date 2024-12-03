import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

import { images } from "../constants";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={images.headerImage} style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Noam Penn (Panther)</Text>
          <Text style={styles.profileSubtitle}>a tennis player</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
    // paddingHorizontal: 16,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EDEDED",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1F1B1B",
    width: screenWidth,
    height: 100,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  profileTextContainer: {
    justifyContent: "center",
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  profileSubtitle: {
    fontSize: 12,
    color: "#888",
  },
});

export default Header;
