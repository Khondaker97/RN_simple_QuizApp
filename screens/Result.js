import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Result = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text> Result </Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={{
            uri: "https://happyplus.in/wp-content/uploads/2021/11/happiness_survey.png",
          }}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Quizlar")}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    height: 300,
    width: 300,
  },
});
