import React from 'react';
import { Hidden, HStack, Icon, Image, Input, Pressable, Text, VStack } from 'native-base';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

type BannerProps = {
  name: string;
};

const HomeBanner: React.FC<BannerProps> = ({ name }) => {
  return (
    <VStack
      _light={{ bg: 'primary.900' }}
      _dark={{ bg: { base: 'coolGray.900', md: 'coolGray.800' } }}
      zIndex={2}
      borderRadius={{ md: 4 }}
      px={{ base: 4, md: 8 }}
      pt={{ base: 4, md: 8 }}
      pb={{ base: 4, md: 0 }}
      mb={{ md: 4 }}
    >
      <Hidden till="md">
        <Pressable>
          <Icon size="6" pt="0.5" as={AntDesign} name="arrowleft" color="coolGray.50" />
        </Pressable>
      </Hidden>

      <HStack alignItems="center" justifyContent="space-between">
        <VStack space="2" w={{ base: '55%', md: '70%' }}>
          <Text
            mt={{ base: 4, md: 10 }}
            fontSize={{ base: 'lg', md: '3xl' }}
            color="coolGray.50"
            fontWeight="bold"
          >
            Bienvenido {name}
          </Text>
          <Text
            w={{ md: '300' }}
            mb={{ base: 3, md: 8 }}
            fontSize={{ base: 'xs', md: 'md' }}
            _light={{
              color: 'primary.300',
            }}
            _dark={{
              color: 'coolGray.400',
            }}
          >
            Choose a goal and start learning from Top Educators
          </Text>
        </VStack>

        <Image
          mb={{ base: '-21', md: '0' }}
          w={{ base: '114', md: '225' }}
          h={{ base: '140', md: '184' }}
          resizeMode="contain"
          alt="nointernet"
          source={require('../../assets/icongirl.png')}
        />
      </HStack>
      <Hidden from="md">
        <Input
          mb={-10}
          px={0}
          py={3}
          placeholder="Search"
          _light={{
            bg: 'white',
            borderColor: 'coolGray.300',
          }}
          _dark={{
            bg: 'coolGray.700',
            borderColor: 'coolGray.500',
          }}
          InputLeftElement={
            <Icon
              as={MaterialIcons}
              name="search"
              _light={{ color: 'coolGray.400' }}
              _dark={{ color: 'coolGray.400' }}
              size="6"
              ml={3}
              mr={2}
            />
          }
        />
      </Hidden>
    </VStack>
  );
};
export { HomeBanner };
