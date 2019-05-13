import React from 'react';
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import TopChart from './Screens/TopChart';
import FavoriteSongs from './Screens/FavoriteSongs';
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
    TopChart: {
      screen: TopChart,
      navigationOptions: {
        title: 'Top Chart'
      },
    },
    FavoriteSongs: {
      screen: FavoriteSongs,
      navigationOptions: {
        title: 'Favorite'
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'TopChart') {
          iconName = 'ios-list';
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
        } else if (routeName === 'FavoriteSongs') {
          iconName = 'ios-heart';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ff2d55',
      inactiveTintColor: 'gray',
    },
  });
  
export default createAppContainer(TabNavigator);