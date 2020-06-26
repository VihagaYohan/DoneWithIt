import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import WelcomScreen from "./app/screens/WelcomeScreen";
import ImageViewScreen from "./app/screens/ImageViewScreen";
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Card from "./app/components/Card";

export default function App() {
  return (
    <ImageViewScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
