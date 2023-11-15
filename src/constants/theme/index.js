import {DefaultTheme} from '@react-navigation/native';
import {textType, images} from '../types';

const DarkTheme = {
  ...DefaultTheme,
  textType: {...textType},
  images: {...images},
  colors: {
    background: '#ffffff',
    buttonBg: '#7685FF',
    mainTextColor: '#ffffff',
    grey: '#827D88',
    white: '#ffffff',
    black: '#000000',
    greyBg: 'rgba(46, 39, 57, 0.1)',
    lightGrey: '#A6A6A61A',
    lightBlue: '#61C3F2',
    purple: '#332233',
  },
};

const LightTheme = {};

export {LightTheme, DarkTheme};
