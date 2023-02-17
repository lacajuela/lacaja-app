import React from "react";
import { Box, VStack, Button, Image, Center, Hidden } from "native-base";
import GuestLayout from "../layouts/GuestLayout";

type ActionButtonsType = {
    signInAction: () => void;
    signUpAction: () => void;
}

function ActionButtons({signInAction, signUpAction}: ActionButtonsType) {
  return (
    <VStack space={4} mt={{ base: 10, md: 12 }}>
      <Button variant="subtle" py={4} onPressOut={signInAction}>
        Iniciar Sesion
      </Button>
      <Button
        variant="outline"
        py={4}
        onPressOut={signUpAction}
        borderColor="secondary.100"
        _text={{
          color: "coolGray.50",
        }}
        _hover={{
          bg: "primary.600",
        }}
        _pressed={{
          bg: "primary.700",
        }}
      >
        Registrarse
      </Button>
    </VStack>
  );
}
function HeaderLogo() {
  return (
    <Box alignItems="center" justifyContent="center">
      <Hidden from="md">
        <Image
          source={require("../assets/cajademedicos_logo.png")}
          height={100}
            width={400}
          alt="Logo"
        />
      </Hidden>
    </Box>
  );
}
export default function Splash({navigation}:any) {
    const moveToSignIn = () => {
        navigation.navigate('SignIn');
    }
    const moveToSignUp = () => {
        navigation.navigate('SignUp');
    }
  return (
    <GuestLayout>
      <Center w="100%" flex={1}>
        <Box
          maxW="500"
          w="100%"
          height={{ md: "544" }}
          px={{ base: 4, md: 8 }}
          bg={{ md: "primary.500" }}
          justifyContent="center"
        >
          <HeaderLogo />
          <ActionButtons signInAction={moveToSignIn} signUpAction={moveToSignUp}/>
        </Box>
      </Center>
    </GuestLayout>
  );
}
