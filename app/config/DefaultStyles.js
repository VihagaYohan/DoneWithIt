import { Platform } from "react-native";

import Colors from "../config/Color"; // import colors

export default {
  colors: Colors,
  text: {
    color: Colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
