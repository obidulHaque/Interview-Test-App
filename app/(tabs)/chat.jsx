import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  BackHandler,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import { icons } from "../../constants";
import { images } from "../../constants";

const ChatScreen = () => {
  const router = useRouter();
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hey guys, thanks a lot for the impressive game, it was fun!",
      sender: "Penn N.",
      timestamp: "20:00",
    },
    {
      id: "2",
      text: "Certainly, it was fantastic to see how long each point lasted. It's always fun to play with players.",
      sender: "Penn N.",
      timestamp: "20:00",
    },
    {
      id: "3",
      text: "I'm crossing my fingers that the next game will be crazy!",
      sender: "You",
      timestamp: "20:00",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const backAction = () => {
      router.push("/game-board");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [router]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: String(prevMessages.length + 1),
          text: newMessage,
          sender: "You",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setNewMessage("");
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "You" && styles.userMessage,
      ]}
    >
      <Image source={images.avatar} style={styles.avatar} />

      {item.sender === "You" ? (
        <LinearGradient
          colors={["#34506D", "#3498DB"]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={[styles.messageBubble, styles.userBubble]}
        >
          <Text style={styles.userText}>Penn N.</Text>
          <Text style={styles.userText}>{item.text}</Text>
          <Text style={styles.userTimestamp}>{item.timestamp}</Text>
        </LinearGradient>
      ) : (
        <View style={styles.messageBubble}>
          <Text style={styles.sender}>Penn N.</Text>
          <Text style={styles.messageText}>{item.text}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
      />
      <View style={styles.inputContainer}>
        <Image source={icons.add} style={styles.addIcon} />
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type your message..."
          placeholderTextColor="#999"
          multiline
          numberOfLines={3}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Image source={icons.send} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingTop: 50,
    paddingBottom: 20,
  },
  chatList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  userMessage: {
    justifyContent: "flex-start",
    flexDirection: "row-reverse",
    gap: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 12,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    borderBottomLeftRadius: 4,
    elevation: 1,
  },
  userBubble: {
    borderRadius: 12,
    borderBottomRightRadius: 4,
    overflow: "hidden",
  },
  sender: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#555",
  },
  messageText: {
    fontSize: 16,
    color: "#333",
  },
  userText: {
    color: "#fff",
  },
  timestamp: {
    fontSize: 10,
    color: "#888",
    textAlign: "right",
    marginTop: 4,
  },
  userTimestamp: {
    color: "#e1e1e1",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderTopWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#f9f9f9",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 8,
    paddingLeft: 8,
  },
  addIcon: {
    height: 26,
    width: 26,
  },
  sendIcon: {
    width: 20,
    height: 20,
  },
  sendButton: {
    backgroundColor: "#3498DB",
    padding: 10,
    borderRadius: 50,
    marginLeft: 8,
  },
});

export default ChatScreen;
