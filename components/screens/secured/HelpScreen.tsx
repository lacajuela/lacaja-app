import React from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Center,
  Pressable,
  ScrollView,
  Image,
  useColorMode,
  Circle,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import DashboardLayout from '../../../layouts/DashboardLayout';

type OptionListItemProps = {
  iconName: string;
  text: string;
};
const list: OptionListItemProps[] = [
  {
    iconName: 'chat',
    text: 'Chatea con un asesor por WhatsApp',
  },
  {
    iconName: 'phone',
    text: 'Agenda una llamada',
  },
  {
    iconName: 'email',
    text: 'Envianos un email',
  },
];

const ListItem = ({ item }: { item: OptionListItemProps }) => {
  return (
    <Pressable
      py={3}
      px={4}
      rounded="sm"
      _light={{
        _hover: { bg: 'primary.100' },
        _pressed: { bg: 'primary.200' },
      }}
      _dark={{
        _hover: { bg: 'coolGray.700' },
        _pressed: { bg: 'coolGray.600' },
      }}
    >
      <HStack alignItems="center" justifyContent="space-between">
        <HStack space="3" alignItems="center">
          <Circle
            _light={{ bg: 'primary.100' }}
            _dark={{ bg: 'coolGray.700' }}
            p={2}
            rounded="full"
          >
            <Icon
              as={MaterialIcons}
              name={item.iconName}
              size={6}
              _light={{ color: 'primary.900' }}
              _dark={{ color: 'primary.500' }}
            />
          </Circle>
          <Text
            alignItems="center"
            fontSize="md"
            _light={{ color: 'coolGray.800' }}
            _dark={{ color: 'coolGray.50' }}
          >
            {item.text}
          </Text>
        </HStack>
        <Icon
          as={MaterialIcons}
          name="chevron-right"
          size={6}
          _light={{ color: 'coolGray.800' }}
          _dark={{ color: 'coolGray.50' }}
        />
      </HStack>
    </Pressable>
  );
};

function OptionList() {
  return (
    <Box pt={3} px={{ md: 40 }}>
      {list.map((item, index) => {
        return <ListItem key={index} item={item} />;
      })}
    </Box>
  );
}

function MainImage() {
  const { colorMode } = useColorMode();

  return (
    <Center>
      <Image
        key={colorMode === 'light' ? '1' : '2'}
        height={'282'}
        width={{ base: '317', md: '324' }}
        _light={{ source: require('../../../assets/helplight.png') }}
        _dark={{ source: require('../../../assets/helpdark.png') }}
        alt="Alternate Text"
      />
    </Center>
  );
}

function PageText() {
  return (
    <VStack space={4} mt={8} alignItems="center" px={4} pb={3}>
      <Text
        fontSize="2xl"
        textAlign="center"
        fontWeight="bold"
        _light={{ color: 'coolGray.800' }}
        _dark={{ color: 'coolGray.50' }}
      >
        ¿Cómo podemos ayudarte?
      </Text>
      <Text
        width={{ base: '100%', md: '37%' }}
        _light={{ color: 'coolGray.500' }}
        _dark={{ color: 'coolGray.400' }}
        fontSize="sm"
        textAlign="center"
        lineHeight="lg"
        fontWeight="medium"
      >
        Si tienes alguna duda, por favor no dudes en contactarte con nosotros por los siguientes
        medios.
      </Text>
    </VStack>
  );
}
const HelpScreen: React.FC<any> = ({ navigation }) => {
  return (
    <DashboardLayout title={'Ayuda'} navigation={navigation}>
      <Box
        _light={{ bg: 'white' }}
        _dark={{ bg: 'coolGray.800' }}
        rounded={{ md: 'sm' }}
        pt={{ base: 5, md: 8 }}
        pb={8}
        flex="1"
      >
        <ScrollView>
          <MainImage />
          <PageText />
          <OptionList />
        </ScrollView>
      </Box>
    </DashboardLayout>
  );
};

export { HelpScreen };
