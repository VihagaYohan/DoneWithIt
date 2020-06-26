import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import AppText from "../components/AppText";
import Colors from "../config/Color";

const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  detailsContainern: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "black",
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: Colors.medium,
  },
});

export default ListItem;
