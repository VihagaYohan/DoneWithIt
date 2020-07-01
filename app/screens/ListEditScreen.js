import React, { Component } from "react";
import { StyleSheet } from "react-native";

import * as Yup from "yup"; // import yup for error validations

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const ListEditScreen = () => {
  return (
    <AppForm
      initialValues={{
        title: "",
        price: "",
        description: "",
        category: null,
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      <AppFormField name="title" placeholder="Title" maxLength={50} />
      <AppFormField
        name="price"
        placeholder="Price"
        maxLength={8}
        width="50%"
        keyboardType="numeric"
      />
      <AppFormPicker
        items={categories}
        name="category"
        placeholder="Category"
       PickerItemComponent={CategoryPickerItem}
        numberOfColumns={3} 
        width="50%"
      />
      <AppFormField
        name="description"
        placeholder="Description"
        multiLine={true}
        maxLength={500}
        numberOfLines={3}
      />

      <SubmitButton title="Post" />
    </AppForm>
  );
};

const styles = StyleSheet.create({});

export default ListEditScreen;
