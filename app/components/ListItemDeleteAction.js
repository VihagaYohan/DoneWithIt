import React, { Component } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../config/Color";

const ListItemDeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={25}
          color={Colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
