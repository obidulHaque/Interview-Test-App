import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

import { images } from "../constants";

const NewsCard = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.newsImageOne}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
        resizeMode="cover"
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Lorem Ipsum is a nickname for such a completely meaningless text -
            some
          </Text>
          <View style={styles.metaContainer}>
            <Text style={styles.metaText}>Lorem Ipsum is</Text>
            {/* <Ionicons name="ellipse" size={6} color="#fff" style={styles.dot} /> */}
            <Text style={styles.metaText}>4 minutes of reading</Text>
            {/* <Ionicons name="time-outline" size={14} color="#fff" style={styles.timeIcon} /> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 3,
    margin: 16,
    overflow: "hidden",
  },
  imageBackground: {
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    width: 300,
  },
  imageStyle: {
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    color: "#fff",
    fontSize: 12,
    marginRight: 4,
  },
  dot: {
    marginHorizontal: 4,
  },
  timeIcon: {
    marginLeft: 4,
  },
});

export default NewsCard;
