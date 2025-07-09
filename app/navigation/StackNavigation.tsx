import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReferFormScreen } from '../screen/form/ReferFormScreen';
import { Home } from '../screen/home/Home';
import { RootStackParamList } from './RootStackParamList';
import { ReferralSummary } from '../screen/referralSummary/ReferralSummary';
import { Profile } from '../screen/profile/Profile';
import BottomTabNavigation from './BottomTabNavigation';
import { HowItworks } from '../screen/profile/HowItWorks';

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
        <Stack.Screen name="HowItworks" component={HowItworks} />
        <Stack.Screen name="ReferFormScreen" component={ReferFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
