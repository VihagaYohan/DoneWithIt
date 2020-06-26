import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import Colors from "../config/Color";

const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...{ backgroundColor: Colors[color] } }}
      onPress={onPress}
    >
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 10,
    padding: 15,
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "capitalize",
  },
});

export default AppButton;
