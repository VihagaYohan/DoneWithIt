import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipable from "react-native-gesture-handler/Swipeable";

import AppText from "../AppText";
import defaultStyles from "../../config/DefaultStyles";

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
      <TouchableHighlight
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-left"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: defaultStyles.colors.white,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  detailsContainer: {
    flexDirection: "column",
    flex: 1,
    left: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: defaultStyles.colors.medium,
    fontSize: 14,
  },
});

export default ListItem;
