import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";

import * as Yup from "yup"; // import yup - error validations

import Screen from "../components/Screen";
import {AppForm, AppFormField, SubmitButton} from '../components/forms'


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          autoCapitalizse="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Enter e-mail"
          textContentType="emailAddress"
        />

        <AppFormField
          name="password"
          autoCapitalizse={true}
          autoCorrect={false}
          icon="lock"
          placeholder="Enter password"
          secureTextEntry={true}
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: "center",
  },
});

export default LoginScreen;
