import React from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { CircleFade } from "react-native-animated-spinkit";
import dynamicStyles from "./styles";

const LoadingIndicator = ({ size, color, containerStyle }) => {
  const { colors } = useTheme();
  const styles = dynamicStyles(colors);

  return (
    <View style={[styles.container, containerStyle ? containerStyle : {}]}>
      <CircleFade
        size={size ? size : 30}
        color={color ? color : colors.green}
      />
    </View>
  );
};

export default LoadingIndicator;
