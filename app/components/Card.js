import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Colors from "../config/Color";
import AppText from "../components/AppText";
import Color from "../config/Color";

const Card = ({ image, title, subTitle }) => {
  console.log(image);
  return (
    <View style={styles.card}>
      <Image style={styles.image} resizeMode="contain" source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: Colors.white,
    overflow:'hidden'
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: Colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
