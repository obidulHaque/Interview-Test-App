import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ChatBubble = ({ message, timestamp, avatar }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.bubble}>
        <Text style={styles.messageText}>{message}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  bubble: {
    maxWidth: "80%",
    padding: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 16,
    borderBottomLeftRadius: 4, // Custom border for a chat-like appearance
    elevation: 1, // Shadow for a subtle pop
  },
  messageText: {
    fontSize: 16,
    color: "#333",
  },
  timestamp: {
    fontSize: 12,
    color: "#888",
    textAlign: "right",
    marginTop: 4,
  },
});

export default ChatBubble;
