import React, {useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const FONT_FAMILY_REGULAR = 'Montserrat-Regular';
export const FONT_FAMILY_BOLD = 'Montserrat-SemiBold';
export const FONT_FAMILY_ITALIC = 'Montserrat-Italic';

const getStyle = (type, textType, styles) => {
  switch (type) {
    case textType.H0:
      return styles.h0;
    case textType.H1:
      return styles.h1;
    case textType.H2:
      return styles.h2;
    case textType.H3:
      return styles.h3;
    case textType.H4:
      return styles.h4;
    case textType.H5:
      return styles.h5;
    case textType.H6:
      return styles.h6;
    case textType.H7:
      return styles.h7;
    case textType.BODY_01:
      return styles.body01;
    case textType.BODY_02:
      return styles.body02;
    case textType.BODY_03:
      return styles.body03;
    case textType.BODY_04:
      return styles.body04;
    case textType.ITALIC:
      return styles.italic;
    default:
      return styles.body02;
  }
};

const AppText = ({type, textStyles = {}, children, handlePress, ...rest}) => {
  const {colors, textType} = useTheme();
  const styles = dynamicStyles(colors);

  const renderText = useMemo(
    () => (
      <Text
        allowFontScaling={false}
        style={[styles.color, getStyle(type, textType, styles), textStyles]}
        {...rest}>
        {children}
      </Text>
    ),
    [children, rest, styles, textStyles, textType, type],
  );

  return typeof handlePress === 'function' ? (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      {renderText}
    </TouchableOpacity>
  ) : (
    renderText
  );
};

const dynamicStyles = colors => {
  return new StyleSheet.create({
    h0: {
      fontSize: 32,
      lineHeight: 48,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    h1: {
      fontSize: 29,
      lineHeight: 43.5,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    h2: {
      fontSize: 26,
      lineHeight: 39,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    h3: {
      fontSize: 25.53,
      lineHeight: 38.3,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    h4: {
      fontSize: 23,
      lineHeight: 34.5,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    h5: {
      fontSize: 20,
      lineHeight: 30,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    h6: {
      fontSize: 18,
      lineHeight: 27,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    h7: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: FONT_FAMILY_BOLD,
      fontWeight: '600',
    },
    body01: {
      fontSize: 18,
      lineHeight: 27,
      fontFamily: FONT_FAMILY_REGULAR,
      fontWeight: '400',
    },
    body02: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: FONT_FAMILY_REGULAR,
      fontWeight: '400',
    },
    body03: {
      fontSize: 14,
      lineHeight: 21,
      fontFamily: FONT_FAMILY_REGULAR,
      fontWeight: '400',
    },
    body04: {
      fontSize: 11,
      lineHeight: 16.5,
      fontFamily: FONT_FAMILY_REGULAR,
      fontWeight: '400',
    },
    italic: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: FONT_FAMILY_ITALIC,
      fontWeight: '400',
    },
    underlined: {
      textDecorationLine: 'underline',
    },
    centered: {
      textAlign: 'center',
    },
    color: {
      color: colors.black,
    },
    allUppercase: {
      textTransform: 'uppercase',
    },
  });
};

export default AppText;
