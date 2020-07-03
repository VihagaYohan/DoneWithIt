import React, { Component, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import defaultStyles from "../../config/DefaultStyles";

const ImageInput = ({ imageUri, onChangeImage }) => {

  useEffect(()=> {
    requestPermission();
  },[])

  const requestPermission = async()=>{
    const {granted} = await ImagePicker.requestCameraRollPermissionsAsync();
    if(!granted) alert('You need to enable permission to access image gallery')
  }

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure want to delete this image", [
        {
          text: "Yes",
          onPress: () => {
            onChangeImage(null);
          },
        },
        {
          text: "No",
        },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("error reloading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={defaultStyles.colors.medium}
          />
        )}
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
