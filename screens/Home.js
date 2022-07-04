import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Title from "../Components/Title";

const Home = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Title />
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
        <TouchableOpacity
          onPress={() => navigation.navigate("Quiz")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: { paddingVertical: 40, paddingHorizontal: 25, height: "100%" },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  banner: { height: 300, width: 300 },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "600",
    color: "white",
  },
});
