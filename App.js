import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput, Text, Button, Image } from "react-native";

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

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <ListEditScreen />
    /*  <ImageInputList
      imageUris={imageUris}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
    /> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
