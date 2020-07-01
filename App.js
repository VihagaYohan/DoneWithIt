import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

import WelcomScreen from "./app/screens/WelcomeScreen";
import ImageViewScreen from "./app/screens/ImageViewScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListEditScreen from './app/screens/ListEditScreen';
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";

export default function App() {
  return <MessagesScreen />;
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
