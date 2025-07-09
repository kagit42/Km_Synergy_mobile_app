import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { SizeConfig } from '../utils/SizeConfig';
import { Colors, Fonts } from '../utils/constant/Theme';
import { Home } from '../screen/home/Home';
import { ReferFormScreen } from '../screen/form/ReferFormScreen';
import { Profile } from '../screen/profile/Profile';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RootStackParamList } from './RootStackParamList';
import TabShape from './TabShape';

const TAB_HEIGHT = SizeConfig.height * 9;
const width = SizeConfig.deviceWidth;

const styless = StyleSheet.create({
  myTabBarContainer: {
    position: 'absolute',
    height: TAB_HEIGHT,
    width,
    bottom: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
  },
});

const MyTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const currentRouteName = state.routes[state.index].name;

  const hideOnScreens = ['ReferFormScreen'];

  if (hideOnScreens.includes(currentRouteName)) {
    return null;
  }

  return (
    <View style={styless.myTabBarContainer}>
      <TabShape />
      <View style={StyleSheet.absoluteFill}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                key={index}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1, alignItems: 'center' }}
              >
                {options.tabBarButton
                  ? options.tabBarButton({
                      // Properly render custom button
                      accessibilityState: isFocused ? { selected: true } : {},
                      onPress,
                      onLongPress,
                      children: null,
                    })
                  : options.tabBarIcon &&
                    options?.tabBarIcon({
                      focused: isFocused,
                      color: isFocused ? Colors.primary : Colors.d8d5db,
                      size: 24,
                    })}
                {!options.tabBarButton && (
                  <Text
                    style={{
                      color: isFocused ? Colors.primary : Colors.d8d5db,
                      fontFamily: Fonts.semiBold,
                      fontSize: SizeConfig.fontSize * 3.3,
                    }}
                  >
                    {typeof label === 'function'
                      ? label({
                          focused: isFocused,
                          color: isFocused ? Colors.primary : Colors.d8d5db,
                          position: 'below-icon',
                          children: '',
                        })
                      : label}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const TabBarButton = ({ onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MaterialIcons
        name="add"
        color={Colors.white}
        size={SizeConfig.width * 10}
      />
    </TouchableOpacity>
  );
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                gap: SizeConfig.width * 2,
              }}
            >
              <Ionicons name={'home'} size={size} color={color} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ReferFormScreen"
        component={ReferFormScreen}
        options={{
          headerShown: false,
          tabBarButton: props => <TabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                gap: SizeConfig.width * 2,
              }}
            >
              <Fontisto name={'person'} size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: SizeConfig.width * 15,
    height: SizeConfig.width * 15,
    borderRadius: (SizeConfig.width * 15) / 2,
    bottom: SizeConfig.height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
});
