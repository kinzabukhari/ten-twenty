import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {NavigationStacks} from '../../navigation/constants';
import dynamicStyles from './styles';
import IconButton from '../iconButton';
import dashboardIcon from '../../assets/svgs/dashboardIcon';
import watchWhiteIcon from '../../assets/svgs/watchWhiteIcon';
import mediaIcon from '../../assets/svgs/mediaIcon';
import moreIcon from '../../assets/svgs/moreIcon';
import dashboardIconWhite from '../../assets/svgs/dashboardIconWhite';
import watchIcon from '../../assets/svgs/watchIcon';
import mediaIconWhite from '../../assets/svgs/mediaIconWhite';
import moreIconWhite from '../../assets/svgs/moreIconWhite';

const TabBarComponent = ({activeIndex, routeName}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const styles = dynamicStyles(colors);

  const bottomButtons = [
    {
      name: 'Dashboard',
      tabName: NavigationStacks.DASHBOARDSTACK,
      icon: dashboardIcon,
      selectedIcon: dashboardIconWhite,
    },
    {
      name: 'Watch',
      tabName: NavigationStacks.WATCHSTACK,
      icon: watchIcon,
      selectedIcon: watchWhiteIcon,
    },
    {
      name: 'Media Library',
      tabName: NavigationStacks.MEDIASTACK,
      icon: mediaIcon,
      selectedIcon: mediaIconWhite,
    },

    {
      name: 'More',
      tabName: NavigationStacks.MORESTACK,
      icon: moreIcon,
      selectedIcon: moreIconWhite,
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
