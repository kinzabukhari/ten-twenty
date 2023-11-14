import { StyleSheet } from "react-native";

const dynamicStyles = () => {
  return new StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
};

export default dynamicStyles;
