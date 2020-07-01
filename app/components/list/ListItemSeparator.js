import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Colors from "../../config/Color";

const ListItemSeparator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.light,
  },
});

export default ListItemSeparator;
