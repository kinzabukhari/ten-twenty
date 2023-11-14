import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {NavigationStacks} from '../../navigation/constants';
import dynamicStyles from './styles';
import IconButton from '../iconButton';

const TabBarComponent = ({activeIndex, routeName}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const styles = dynamicStyles(colors);

  const bottomButtons = [
    {
      name: 'Dashboard',
      tabName: NavigationStacks.DASHBOARDSTACK,
      icon: 'dashboard',
    },
    {
      name: 'Watch',
      icon: 'event',
      tabName: NavigationStacks.WATCHSTACK,
    },
    {
      name: 'Media Library',
      icon: 'media',
      tabName: NavigationStacks.MEDIASTACK,
    },

    {
      name: 'More',
      icon: 'more',
      tabName: NavigationStacks.MORESTACK,
    },
  ];

  const BottomNavigateButton = ({icon, route, selected, name}) => (
    <View style={styles.bottomBtn}>
      <IconButton
        handlePress={() => navigation.navigate(route)}
        selected={selected}
        icon={icon}
        name={name}
      />
    </View>
  );

  return (
    <View style={styles.navbar}>
      {bottomButtons.map((item, index) => {
        const isSelected = routeName[activeIndex] === item.tabName;

        return (
          <BottomNavigateButton
            key={index}
            selected={isSelected}
            route={item.tabName}
            icon={isSelected ? item.selectedIcon : item.icon}
            name={item.name}
          />
        );
      })}
    </View>
  );
};

export default TabBarComponent;
