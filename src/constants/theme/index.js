import {DefaultTheme} from '@react-navigation/native';
import {textType, images} from '../types';

const DarkTheme = {
  ...DefaultTheme,
  textType: {...textType},
  images: {...images},
  colors: {
    background: '#ffffff',
    mainThemeBackgroundColor: '#121A25',
    cardBackgroundColor: '#1C2039',
    buttonBg: '#7685FF',
    buttonBgRgba: 'rgba(45, 210, 62, 0.1)',
    borderDark: '#131629',
    mainTextColor: '#ffffff',
    mainSubtextColor: '#f5f5f5',

    grey0: '#eaeaea',
    grey3: '#e6e6f2',
    grey6: '#d6d6d6',
    grey9: '#939393',
    grey12: '#C5C2C0',
    grey: 'grey',
    whiteSmoke: '#222222',
    headerTintColor: '#82F5A8',
    headerBgColor: '#000000',
    bottomTintColor: 'lightgrey',
    mainButtonColor: '#062246',
    subButtonColor: '#20242d',
    green: '#800080',
    greenOpacity: 'rgba(45, 210, 62, 0.5)',
    grey2: '#383838',
    white2: '#C7C6C5',
    black: '#000000',
    grey4: '#ABA19E',
    fontColor: '#fff',
    whiteBold: '#E0DFDD',
    textWhite: '#ffffff',
    tagColor: '#82F5A8',
    greyText: '#EBEBEB',
    darkGrey: '#555B57',
    offWhite: '#F8F0E3',
    newGray: '#495B74',
    inputBg: '#282C49',
    purple: '#332233',
  },
};

const LightTheme = {};

export {LightTheme, DarkTheme};
