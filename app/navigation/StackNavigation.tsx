import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReferFormScreen } from '../screen/form/ReferFormScreen';
import { Home } from '../screen/home/Home';
import { RootStackParamList } from './RootStackParamList';
import { ReferralSummary } from '../screen/referralSummary/ReferralSummary';
import BottomTabNavigation from './BottomTabNavigation';
import AboutUs from '../screen/profile/AboutUs';
import { ProfileSubScreens } from '../screen/profile/ProfileSubScreens';
import { WhyUs } from '../screen/profile/WhyUs';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabNavigation"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
        />
        <Stack.Screen name="ReferralSummary" component={ReferralSummary} />
        <Stack.Screen name="ProfileSubScreens" component={ProfileSubScreens} />
        <Stack.Screen name="ReferFormScreen" component={ReferFormScreen} />
        <Stack.Screen name="AboutUs" component={AboutUs} /> 
         <Stack.Screen name="Home" component={Home} /> 
          <Stack.Screen name="WhyUs" component={WhyUs} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};
