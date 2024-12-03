import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { icons, images } from "../constants";
import { useRouter } from "expo-router";

const MatchCard = ({
  footer,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  nameOne,
  nameTwo,
  nameThree,
  nameFour,
  scoores,
}) => {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.location}>Yarkon Park, Tel Aviv | Court #2</Text>
          <View style={styles.meta}>
            <Text style={styles.metaText}>02/24/2023</Text>
            <Text style={styles.metaText}> | </Text>
            <Text style={styles.metaText}>14:00</Text>
            <Text style={styles.metaText}> | </Text>
            <Text style={styles.metaText}>26 messages</Text>
          </View>
        </View>
        <View>
          <Image source={icons.share} style={styles.shareIcon} />
        </View>
      </View>

      <View style={styles.players}>
        <View style={styles.player}>
          <Image source={imageOne || images.imageOne} style={styles.avatar} />
          <Text style={styles.playerName}>{nameOne}</Text>
          <Text style={styles.playerRole}>(PRO)</Text>
        </View>
        <View style={styles.player}>
          <Image source={imageTwo || images.imageTwo} style={styles.avatar} />
          <Text style={styles.playerName}>{nameTwo}</Text>
          <Text style={styles.playerRole}>(The Wiz)</Text>
        </View>

        <View style={styles.vs}>
          {(Array.isArray(scoores) ? scoores : []).map((result, index) => (
            <Text key={index} style={styles.scoreText}>
              {result}
            </Text>
          ))}
        </View>

        <View style={styles.player}>
          <Image source={imageThree || images.imageOne} style={styles.avatar} />
          <Text style={styles.playerName}>{nameThree}</Text>
          <Text style={styles.playerRole}>(Nickname)</Text>
        </View>
        <View style={styles.player}>
          <Image source={imageFour || images.imageTwo} style={styles.avatar} />
          <Text style={styles.playerName}>{nameFour}</Text>
          <Text style={styles.playerRole}>(Nickname)</Text>
        </View>
      </View>

      {footer === "yes" && (
        <View style={styles.footerSection}>
          <View style={styles.footer}>
            <Text style={styles.weatherInfo}>🌧️ 25% Precipitation</Text>
            <Text style={styles.weatherInfo}>☁️ Weather - cloudy</Text>
          </View>

          <LinearGradient
            colors={["#34506D", "#3498DB"]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.chatButton}
          >
            <TouchableOpacity
              onPress={() => {
                router.replace("/chat");
              }}
            >
              <Text style={styles.chatText}>Chat</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#fff",
    margin: 16,
  },
  header: {
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shareIcon: {
    width: 18,
    height: 18,
  },
  location: {
    fontWeight: "bold",
    fontSize: 16,
  },
  meta: {
    flexDirection: "row",
    marginTop: 4,
  },
  metaText: {
    fontSize: 12,
    color: "#666",
  },
  players: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  player: {
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  playerName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  playerRole: {
    fontSize: 12,
    color: "#666",
  },
  vs: {
    fontSize: 16,
    fontWeight: "bold",
    flexDirection: "column",
    padding: 12,
  },

  playerNickname: {
    fontSize: 12,
    color: "#666",
  },
  footerSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#ddd",
    borderTopWidth: 1,
  },
  footer: {
    marginVertical: 16,
  },
  weatherInfo: {
    fontSize: 12,
    color: "#666",
  },
  chatButton: {
    width: 100,
    height: 50,
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  chatText: {
    color: "#fff",
    fontWeight: "bold",
  },

  scoreText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default MatchCard;
