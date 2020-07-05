import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text, Button, Image } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import defaultStyles from './app/config/DefaultStyles';

/* screens and components */
import WelcomScreen from "./app/screens/WelcomeScreen";
import ImageViewScreen from "./app/screens/ImageViewScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListEditScreen from "./app/screens/ListEditScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";

import ImageInputList from "./app/components/image/ImageInputList";
import ImageInput from "./app/components/image/ImageInput";

// navigators
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from "./app/navigation/navigationTheme";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export default function App() {
  console.log(navigationTheme)
  return (
    <NavigationContainer theme={MyTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
