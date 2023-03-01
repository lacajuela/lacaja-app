import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Box, HStack, Link, Text } from 'native-base';
import { SignInForm } from '../forms';
import React from 'react';
import { NotAuthenticatedMobileHeader } from '../MobileHeader/NotAuthenticatedMobileHeader/NotAuthenticatedMobileHeader';

type SignInComponentProps = {
  moveToSignUpAction: () => void;
  authenticate: (username: string, password: string) => void;

  isLoading: boolean;
};
const SignInComponent = ({ moveToSignUpAction, authenticate }: SignInComponentProps) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{ flex: 1 }}
      bounces={false}
    >
      <NotAuthenticatedMobileHeader
        title={'Iniciar sesión'}
        shotDescription={'Bienvenido otra vez'}
        suggestion={'Por favor, inicie sesion para continuar'}
      />
      <Box
        px={{ base: 4, md: 8 }}
        py="8"
        flex={1}
        _light={{ bg: 'white' }}
        _dark={{ bg: 'coolGray.800' }}
        borderTopLeftRadius={{ base: '2xl', md: 0 }}
        borderTopRightRadius={{ base: '2xl', md: 'md' }}
        borderBottomRightRadius={{ base: 'none', md: 'md' }}
      >
        <Text
          fontSize="2xl"
          fontWeight="bold"
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
          mb={8}
        >
          Iniciar sesion
        </Text>
        <SignInForm authenticateAction={authenticate} />
        <HStack
          space="1"
          safeAreaBottom
          alignItems="center"
          justifyContent="center"
          mt={{ base: 'auto', md: '8' }}
        >
          <Text
            fontSize="sm"
            fontWeight="normal"
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.400' }}
          >
            Todavia no tienes una cuenta?
          </Text>
          <Link
            onPress={moveToSignUpAction}
            _text={{
              fontSize: { base: 'sm', md: 'xs' },
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
            _light={{
              _text: {
                color: 'primary.900',
              },
            }}
            _dark={{
              _text: {
                color: 'primary.500',
              },
            }}
          >
            Registrate
          </Link>
        </HStack>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export { SignInComponent };
