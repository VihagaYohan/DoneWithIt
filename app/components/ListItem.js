import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

import Swipable from "react-native-gesture-handler/Swipeable";

import AppText from "../components/AppText";
import Colors from "../config/Color";

const ListItem = ({
  image,
  title,
  subTitle,
  onPress,
  rightActions,
  IconComponent,
}) => {
  return (
    <Swipable renderRightActions={rightActions}>
      <TouchableHighlight underlayColor={Colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor:Colors.white
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  detailsContainer: {
    flexDirection: "column",
    left: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: Colors.medium,
    fontSize: 14,
  },
});

export default ListItem;
