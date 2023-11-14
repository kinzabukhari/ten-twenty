import { Platform, StyleSheet } from "react-native";
import { HP, WP } from "../../../utils";

const dynamicStyles = colors => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: WP("4"),
    },
    locationLabel: {
      fontSize: 26,
      marginBottom: HP("2"),
    },
    labelStyle: {
      fontSize: 26,
      marginTop: HP("3"),
      marginBottom: HP("2"),
    },
    modalContainer: {
      height: "100%",
      width: "100%",
      backgroundColor: colors.background,
      paddingTop: Platform.OS === "ios" ? HP("6") : 0,
      paddingHorizontal: WP("4"),
    },
    closeButton: {
      color: colors.grey,
      alignSelf: "flex-end",
      marginBottom: HP("1"),
    },
    pickerContainer: {
      flex: 1,
      justifyContent: "flex-end",
    },
    locationContainer: {
      flex: 1,
      borderRadius: 20,
    },
    locationBox: { position: "absolute", zIndex: 1, width: "100%" },
    tagStyle: {
      height: 40,
      width: WP("20"),
      marginTop: HP("3"),
    },
    itemSeparator: {
      width: 10,
    },
    keywordField: {
      width: "100%",
      height: 50,
      borderRadius: 24,
      borderColor: colors.inputBg,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: WP("5"),
      paddingRight: WP("3"),
      borderWidth: 1,
      backgroundColor: colors.inputBg,
    },
    inputLabel: {
      color: colors.mainTextColor,
      fontFamily: "Montserrat-SemiBold",
    },
    btnContainer: {
      marginTop: HP("3"),
    },
    calendarStyle: {
      alignSelf: "center",
      borderRadius: 16,
      height: 310,
    },
    weekStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "95%",
      alignSelf: "center",
    },
  });
};
export default dynamicStyles;
