import React, {forwardRef} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useTheme} from '@react-navigation/native';

const SearchInput = forwardRef(
  (
    {onChangeText, disabled, value, cStyle, onEnter, handleTouch, ...rest},
    ref,
  ) => {
    const {colors} = useTheme();
    const styles = dynamicStyles(colors);

    return (
      <View style={[styles.container, cStyle]}>
        <TextInput
          {...rest}
          ref={ref ? ref : null}
          style={styles.input}
          placeholderTextColor={colors.mainTextColor}
          onChangeText={onChangeText}
          editable={!disabled}
          selectionColor={colors.mainTextColor}
          onSubmitEditing={onEnter}
          onPressIn={disabled ? handleTouch : null}
        />
        {value ? (
          <TouchableOpacity
            onPress={() => onChangeText('')}
            activeOpacity={0.7}
            style={styles.iconOpacityView}>
            <IconAntDesign color={colors.grey0} size={17} name={'close'} />
          </TouchableOpacity>
        ) : (
          <View style={styles.iconOpacityView}>
            <IconAntDesign color={colors.grey0} size={17} name={'search1'} />
          </View>
        )}
      </View>
    );
  },
);
export default SearchInput;

const dynamicStyles = colors => {
  return new StyleSheet.create({
    container: {
      // width: "100%",
      height: 50,
      borderRadius: 24,
      borderColor: colors.inputBg,
      flexDirection: 'row',
      borderWidth: 1,
      backgroundColor: colors.inputBg,
    },
    input: {
      flex: 1,
      paddingHorizontal: 20,
      color: colors.mainTextColor,
    },
    iconOpacityView: {
      width: 50,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
