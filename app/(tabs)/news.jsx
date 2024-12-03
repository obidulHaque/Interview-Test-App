import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NewsCard from "../../components/newsCard";
import MatchCard from "../../components/matchCard";
import MainNewsCard from "../../components/mainNewsCard";

import { images } from "../../constants";

const news = () => {
  return (
    <ScrollView>
      <MainNewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <MatchCard
        imageOne={images.imageThree}
        imageTwo={images.imageFour}
        scoores={["1-3", "1-0", "1-2", "4-3"]}
        nameOne="Mandler T."
        nameTwo="Oz Y."
        nameThree="Goren S."
        nameFour="penn N."
      />
      <NewsCard />
      <MatchCard
        imageOne={images.imageThree}
        imageTwo={images.imageFour}
        scoores={["1-3", "1-0", "1-2", "4-3"]}
        nameOne="Mandler T."
        nameTwo="Oz Y."
        nameThree="Goren S."
        nameFour="penn N."
      />
      <NewsCard />
    </ScrollView>
  );
};

export default news;

const styles = StyleSheet.create({});
