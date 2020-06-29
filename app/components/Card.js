import React, { Component } from "react";
import { StyleSheet, View,Image } from "react-native";

import Colors from "../config/Color";
import AppText from "../components/AppText";

const Card = ({ image, title, subTitle }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
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
    borderColor: "black",
    backgroundColor: Colors.white,
    overflow:'hidden',
    marginBottom:10
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
