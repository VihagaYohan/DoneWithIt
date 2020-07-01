import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Icon from "./Icon";
import AppText from "./AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon name={item.icon} backgroundColor={item.backgroundColor} size={50} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      paddingHorizontal:30,
      paddingVertical:15,
      alignItems:'center',
      width:'33%'
  },
  label:{
      marginTop:5,
      textAlign:'center',
  }
});

export default CategoryPickerItem;
