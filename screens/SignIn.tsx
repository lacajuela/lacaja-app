import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  Hidden,
  HStack,
  Icon,
  IconButton,
  IInputProps,
  Image,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import FloatingLabelInput from '../components/FloatingLabelInput';
import GuestLayout from '../layouts/GuestLayout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const FormInput = ({
  children,
  ...props
}: IInputProps & {
  label?: string;
  labelBGColor?: string;
  labelColor?: string;
  containerWidth?: string | number;
  children?: JSX.Element | JSX.Element[];
}) => (
  <VStack mb="6">
    <FloatingLabelInput {...props} />
    {children}
  </VStack>
);

type SignInFormProps = {
  authenticateAction: (username: string, password: string) => void;
};
const SignInForm = ({ authenticateAction }: SignInFormProps) => {
  type FormData = {
    documento: string;
    password: string;
  };
  const [formData, setFormData] = useState<FormData>({
    documento: '',
    password: '',
  });
  const [showPass, setShowPass] = React.useState(false);

  return (
    <FormControl>
      <FormInput
        isRequired
        label="Nro de documento"
        labelColor="#9CA3AF"
        labelBGColor={useColorModeValue('#fff', '#1F2937')}
        defaultValue={formData.documento}
        onChangeText={(documento: string) =>
          setFormData((prev) => ({ ...prev, documento: documento }))
        }
      >
        <FormControl.ErrorMessage>Por favor, ingresa un documento valido</FormControl.ErrorMessage>
      </FormInput>
      <FormInput
        isRequired
        secureTextEntry={!showPass}
        label="Password"
        labelColor="#9CA3AF"
        labelBGColor={useColorModeValue('#fff', '#1F2937')}
        defaultValue={formData.password}
        onChangeText={(newPassword: string) =>
          setFormData((prev) => ({ ...prev, password: newPassword }))
        }
        InputRightElement={
          <IconButton
            mr="1"
            variant="unstyled"
            icon={
              <Icon
                size="5"
                color="coolGray.400"
                as={MaterialIcons}
                name={showPass ? 'visibility' : 'visibility-off'}
              />
            }
            onPress={() => {
              setShowPass(!showPass);
            }}
          />
        }
      >
        <FormControl.ErrorMessage>Invalid password</FormControl.ErrorMessage>
      </FormInput>
      <Link
        // href="https://nativebase.io"
        ml="auto"
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
        Olvidaste tu contraseña?
      </Link>
      <Button
        onPressOut={() => authenticateAction(formData.documento, formData.password)}
        variant="solid"
        size="lg"
        mt={{ base: 5, md: 3 }}
      >
        Inciar sesion
      </Button>
    </FormControl>
  );
};

type SignInComponentProps = {
  moveToSignUpAction: () => void;
  authenticate: (username: string, password: string) => void;
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
      <MobileHeader />
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
        source={require('../assets/logo.png')}
      />
    </Center>
  );
}

function MobileHeader() {
  return (
    <Hidden from="md">
      <VStack px="4" mt="4" mb="5" space="9">
        <HStack space="2" alignItems="center">
          <IconButton
            p={0}
            icon={
              <Icon size="6" as={MaterialIcons} name="keyboard-backspace" color="coolGray.50" />
            }
          />
          <Text color="coolGray.50" fontSize="lg">
            Inciar sesion
          </Text>
        </HStack>
        <VStack space={0.5}>
          <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
            Bienvenido otra vez
          </Text>
          <Text
            fontSize="md"
            fontWeight="normal"
            _dark={{
              color: 'coolGray.400',
            }}
            _light={{
              color: 'primary.300',
            }}
          >
            Inicie sesion para continuar
          </Text>
        </VStack>
      </VStack>
    </Hidden>
  );
}

export default function SignIn({ navigation }: any) {
  const authenticate = (username: string, password: string) => {
    navigation.navigate('Home');
  };
  const moveToSignUpAction = () => {
    navigation.navigate('SignUp');
  };
  return (
    <GuestLayout>
      <Hidden till="md">
        <SideContainerWeb />
      </Hidden>

      <SignInComponent moveToSignUpAction={moveToSignUpAction} authenticate={authenticate} />
    </GuestLayout>
  );
}
