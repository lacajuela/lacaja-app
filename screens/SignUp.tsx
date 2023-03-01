import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Image,
  HStack,
  VStack,
  Text,
  Link,
  Divider,
  Icon,
  Hidden,
  Center,
  FormControl,
  IInputProps,
  Box,
  useTheme,
  useColorMode,
  Pressable,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import FloatingLabelInput from '../components/FloatingLabelInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GuestLayout from '../layouts/GuestLayout';

function MobileHeader() {
  return (
    <Hidden from="md">
      <VStack px="4" mt="4" mb="5" space="9">
        <HStack space="2" alignItems="center">
          <Pressable
            onPress={() => {
              console.log('hello');
            }}
          >
            <Icon
              alignItems="center"
              justifyContent="center"
              size="6"
              as={MaterialIcons}
              name="keyboard-backspace"
              color="coolGray.50"
            />
          </Pressable>

          <Text color="coolGray.50" fontSize="lg">
            Sign Up
          </Text>
        </HStack>
        <VStack space={0.5}>
          <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
            Welcome
          </Text>
          <Text
            fontSize="md"
            fontWeight="normal"
            _dark={{
              color: 'coolGray.50',
            }}
            _light={{
              color: 'primary.300',
            }}
          >
            Sign up to continue
          </Text>
        </VStack>
      </VStack>
    </Hidden>
  );
}

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
const SignUpForm = () => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  type FormData = {
    email: string;
    password: string;
    confirmPassword: string;
  };
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <FormControl>
      <FormInput
        isRequired
        label="Email"
        labelColor={colors.coolGray[400]}
        labelBGColor={colorMode === 'light' ? 'white' : colors.coolGray[800]}
        defaultValue={formData.email}
        onChangeText={(email: string) => setFormData((prev) => ({ ...prev, email: email }))}
      >
        <FormControl.ErrorMessage>Please enter a valid email</FormControl.ErrorMessage>
      </FormInput>
      <FormInput
        isRequired
        secureTextEntry={!showPass}
        label="Password"
        labelColor={colors.coolGray[400]}
        labelBGColor={colorMode === 'light' ? 'white' : colors.coolGray[800]}
        defaultValue={formData.password}
        onChangeText={(newPassword: string) =>
          setFormData((prev) => ({ ...prev, password: newPassword }))
        }
        InputRightElement={
          <Pressable
            mr="2"
            onPress={() => {
              setShowPass(!showPass);
            }}
          >
            <Icon
              size="5"
              color="coolGray.400"
              as={MaterialIcons}
              name={showPass ? 'visibility' : 'visibility-off'}
            />
          </Pressable>
        }
      >
        <FormControl.ErrorMessage>Please enter a valid password</FormControl.ErrorMessage>
      </FormInput>
      <FormInput
        isRequired
        secureTextEntry={!showConfirmPass}
        label="Confirm Password"
        labelColor={colors.coolGray[400]}
        labelBGColor={colorMode === 'light' ? 'white' : colors.coolGray[800]}
        defaultValue={formData.confirmPassword}
        onChangeText={(newPassword: string) =>
          setFormData((prev) => ({ ...prev, confirmPassword: newPassword }))
        }
        InputRightElement={
          <Pressable
            mr="2"
            onPress={() => {
              setShowConfirmPass(!showConfirmPass);
            }}
          >
            <Icon
              size="5"
              color="coolGray.400"
              as={MaterialIcons}
              name={showConfirmPass ? 'visibility' : 'visibility-off'}
            />
          </Pressable>
        }
      >
        <FormControl.ErrorMessage>Password does not match</FormControl.ErrorMessage>
      </FormInput>
      <Checkbox
        _dark={{
          value: 'demo',
          _checked: {
            value: 'demo',
            bg: 'primary.700',
            borderColor: 'primary.700',
            _icon: { color: 'white' },
          },
        }}
        _light={{
          value: 'demo',
          _checked: {
            value: 'demo',
            bg: 'primary.900',
            borderColor: 'primary.900',
          },
        }}
        defaultIsChecked
        value="demo"
        accessibilityLabel="Remember me"
      >
        <HStack alignItems="center">
          <Text
            fontSize="sm"
            fontWeight="normal"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.400' }}
            pl="2"
          >
            Acepto{' '}
          </Text>
          <Link
            href="https://nativebase.io"
            _text={{
              fontSize: 'sm',
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
                fontSize: 'sm',
                fontWeight: 'medium',
              },
            }}
          >
            Terminos y condiciones{' '}
          </Link>
        </HStack>
      </Checkbox>
      <Button mt={{ base: 8, md: 6 }} variant="solid" size="lg">
        Crear cuenta
      </Button>
    </FormControl>
  );
};

type SignUpFormComponentProps = {
  handlePressSignIn: () => void;
};

function SignUpFormComponent({ handlePressSignIn }: SignUpFormComponentProps) {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{ width: '100%', height: '100%' }}
      bounces={false}
    >
      <MobileHeader />
      <Box
        flex="1"
        px={{ base: 4, md: 8 }}
        py="8"
        _light={{ bg: 'white' }}
        _dark={{ bg: 'coolGray.800' }}
        justifyContent="space-between"
        borderTopRightRadius={{ base: '2xl', md: 'md' }}
        borderBottomRightRadius={{ base: '0', md: 'md' }}
        borderTopLeftRadius={{ base: '2xl', md: '0' }}
      >
        <Hidden till="md">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
            mb={'8'}
          >
            Crea una cuenta para continuar
          </Text>
        </Hidden>

        <SignUpForm />
        <HStack space="1" alignItems="center" justifyContent="center" mt="auto">
          <Text
            fontSize="sm"
            color="coolGray.500"
            fontWeight="normal"
            _dark={{ color: 'coolGray.400' }}
          >
            Already have an account?
          </Text>
          <Link
            onPress={handlePressSignIn}
            _text={{
              fontSize: 'sm',
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
                fontSize: 'sm',
                fontWeight: 'bold',
              },
            }}
          >
            Iniciar sesion
          </Link>
        </HStack>
      </Box>
    </KeyboardAwareScrollView>
  );
}

export default function SignUp({ navigation }: any) {
  return (
    <GuestLayout>
      <Hidden till="md">
        <SideContainerWeb />
      </Hidden>
      <Box flex="1">
        <SignUpFormComponent handlePressSignIn={() => navigation.navigate('SignIn')} />
      </Box>
    </GuestLayout>
  );
}
