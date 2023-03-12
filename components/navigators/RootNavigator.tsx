import React from 'react';
import { TransitionSpecs, TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import SignUp from '../screens/SignUp';
import { MenuScreen } from '../screens/secured/MenuScreen';
import HomeScreen from '../screens/secured/HomeScreen';
import { SignIn } from '../screens/SignIn';
import { InvoicesListScreen } from '../screens/secured/InvoicesListScreen';

const fade = (props: any) => {
  const { current } = props;

  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

const Stack = createStackNavigator();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
        cardStyleInterpolator: fade,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="InvoicesListScreen"
        component={InvoicesListScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export { RootStack };
