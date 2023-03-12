import React from 'react';
import { Center, Hidden, Image } from 'native-base';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { SignInComponent } from '../SignInComponent/SignInComponent';
import GuestLayout from '../../layouts/GuestLayout';
import { BASE_API_URL } from '../../constants/constants';

function SideContainerWeb() {
  return (
    <Center
      flex="1"
      _light={{ bg: 'primary.900' }}
      _dark={{ bg: 'primary.700' }}
      borderTopLeftRadius={{ md: 'md' }}
      borderBottomLeftRadius={{ md: 'md' }}
    >
      <Image
        h="24"
        size="80"
        alt="NativeBase Startup+ "
        resizeMode={'contain'}
        source={require('../../assets/logo.png')}
      />
    </Center>
  );
}

const SignIn: React.FC<any> = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const authenticate = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await axios.post<IAuthenticationResponse>(`${BASE_API_URL}/auth/signin`, {
        username,
        password,
      });
      console.log(result.data);
      setIsLoading(false);
      await SecureStore.setItemAsync('token', result.data.token);
      navigation.navigate('Home');
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const moveToSignUpAction = () => {
    navigation.navigate('SignUp');
  };
  return (
    <GuestLayout>
      <Hidden till="md">
        <SideContainerWeb />
      </Hidden>
      <SignInComponent
        moveToSignUpAction={moveToSignUpAction}
        authenticate={authenticate}
        isLoading={isLoading}
      />
    </GuestLayout>
  );
};

export { SignIn };
