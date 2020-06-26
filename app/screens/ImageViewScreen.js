import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import {MaterialCommunityIcons} from '@expo/vector-icons'

import Colors from "../config/Color";

const ImageViewScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
      />
      <View style={styles.delete} >
        <MaterialCommunityIcons name='close' size={30} color={Colors.white}/>
      </View>
      <View style={styles.close}>
        <MaterialCommunityIcons name='trash-can-outline' size={30} color={Colors.white}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingVertical: 50, // not include in tutorial. remove if necessary
  },
  image: {
    height: "100%",
    width: "100%",
  },
  delete: {
    left: 30,
    position: "absolute",
    top: 40,
  },
  close: {
    position: "absolute",
    right: 30,
    top: 40,
  },
});

export default ImageViewScreen;
