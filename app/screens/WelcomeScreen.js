import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

import Colors from "../config/Color";
import AppButton from "../components/AppButton";

const WelcomScreen = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/background.jpg")}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.text}>Sell That You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => {
            alert("Login");
          }}
        />
        <AppButton
          title="Register"
          onPress={() => alert("Register")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 70,
  },
  logo: {
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 20,
  },
  buttonContainer: {
    padding: 10,
    width: "100%",
  },
});

export default WelcomScreen;
