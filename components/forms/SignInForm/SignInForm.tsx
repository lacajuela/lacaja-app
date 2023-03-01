import React, { useState } from 'react';
import { Button, FormControl, Icon, IconButton, Link, useColorModeValue } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { FormInput } from '../FormInput/FormInput';

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

export { SignInForm };
