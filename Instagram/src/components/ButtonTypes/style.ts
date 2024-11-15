import { Dimensions, StyleSheet, Platform } from "react-native";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  styleButton: {
    width: "115%",
    height: "12%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    fontSize: 15,
  },
});
