import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { images } from "../constants";

const NewsCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Lorem Ipsum is a nickname for such a completely meaningless text -
          some
        </Text>
        <View style={styles.metaInfo}>
          <View style={styles.metaItem}>
            {/* <Ionicons name="time-outline" size={16} color="#007BFF" /> */}
            <Text style={styles.metaText}>an hour ago</Text>
          </View>
          <View style={styles.metaItem}>
            {/* <Ionicons name="chatbubble-ellipses-outline" size={16} color="#007BFF" /> */}
            <Text style={styles.metaText}>26 comments</Text>
          </View>
        </View>
      </View>
      <Image
        source={images.newsImageTwo} // Replace with actual image URL
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
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
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007BFF",
  },
  metaInfo: {
    flexDirection: "row",
    marginTop: 8,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  metaText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

export default NewsCard;
