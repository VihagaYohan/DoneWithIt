import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList,  } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import AppText from "../components/AppText";
import Button from "../components/AppButton";
import Colors from "../config/Color";
import ActivityIndicator from "../components/AcitivityIndicator";

import listingsApi from "../api/listings";
import routes from "../navigation/routes";

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]); // to get product listing
  const [error, setError] = useState(false); // to store any errors
  const [loading, setLoading] = useState(false); // to show activity indicator

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <React.Fragment>
          <AppText>Unable to retrieve listings</AppText>
          <Button title="Retry" onPress={loadListings} />
        </React.Fragment>
      )}

      <ActivityIndicator visible={loading} />
      {/* <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      /> */}
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.light,
    padding: 10,
  },
});

export default ListingsScreen;
