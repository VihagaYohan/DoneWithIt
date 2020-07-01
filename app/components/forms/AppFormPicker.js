import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({
  items,
  width,
  name,
  placeholder,
  PickerItemComponent,
  numberOfColumns
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <React.Fragment>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        placeHolder={placeholder}
        width={width}
        numColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({});

export default AppFormPicker;
