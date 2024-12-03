import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import MatchCard from "../../components/matchCard";

import { icons } from "../../constants";

import { images } from "../../constants";

export default function GameBoard() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {/* Filters Section */}
          <View style={styles.filterSection}>
            <TouchableOpacity style={styles.filterButton}>
              <Image source={icons.filter} style={styles.filterIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Date | hour...</Text>
              <Image source={icons.downArrow} style={styles.downArrowIcon} />
            </TouchableOpacity>
          </View>
          <MatchCard
            footer="yes"
            imageThree={images.emptyImage}
            imageFour={images.emptyImage}
            nameOne="Mandler T."
            nameTwo="Oz Y."
            nameThree="Player Three"
            nameFour="Player Four"
            scoores={["VS"]}
          />
          <MatchCard
            footer="yes"
            imageThree={images.emptyImage}
            imageFour={images.emptyImage}
            nameOne="Mandler T."
            nameTwo="Oz Y."
            nameThree="Player Three"
            nameFour="Player Four"
            scoores={["VS"]}
          />
          <MatchCard
            footer="yes"
            imageThree={images.emptyImage}
            imageFour={images.emptyImage}
            nameOne="Mandler T."
            nameTwo="Oz Y."
            nameThree="Player Three"
            nameFour="Player Four"
            scoores={["VS"]}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  // container: { flex: 1, justifyContent: "center", alignItems: "center" },
  filterSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 4,
    gap: 14,
  },
  filterIcon: {
    width: 31,
    height: 31,
  },
  downArrowIcon: {
    width: 12,
    height: 12,
  },
  filterText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#555",
  },
});
