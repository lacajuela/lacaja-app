import React from 'react';
import { HStack, Icon, Text, Pressable, Button, Progress, Box } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import DashboardLayout from '../../../layouts/DashboardLayout';

const settings: ISetting[] = [
  {
    iconName: 'credit-card',
    name: 'Cambiar contraseña',
    option: null,
  },
  {
    iconName: 'account-circle',
    name: 'Perfil',
    option: null,
  },
  {
    iconName: 'security',
    name: 'Cerrar sesion',
    option: null,
  },
  {
    iconName: 'supervisor-account',
    name: 'Aportes jubilatorios',
    option: null,
  },
  {
    iconName: 'link',
    name: 'Linked Accounts',
    option: null,
  },
  {
    iconName: 'person-remove',
    name: 'Disable Account',
    option: null,
  },
  {
    iconName: 'help',
    name: 'Ayuda',
    option: 'HelpScreen',
  },
];

type SettingCardProps = {
  item: ISetting;
  action: () => void;
};
const SettingCard: React.FC<SettingCardProps> = ({ item, action }) => {
  const { iconName, name, option } = item;
  return (
    <Pressable
      _light={{ _pressed: { bg: 'coolGray.200' } }}
      _dark={{ _pressed: { bg: 'coolGray.700' } }}
      px="4"
      py="3"
      onPress={action}
    >
      <HStack justifyContent="space-between">
        <HStack space="4" alignItems="center">
          <Icon
            as={MaterialIcons}
            name={iconName}
            size={5}
            _light={{ color: 'coolGray.500' }}
            _dark={{ color: 'coolGray.400' }}
          />
          <Text
            fontSize="md"
            _dark={{ color: 'coolGray.50' }}
            _light={{ color: 'coolGray.800' }}
            lineHeight="24"
          >
            {name}
          </Text>
        </HStack>
      </HStack>
    </Pressable>
  );
};

const MenuScreen: React.FC<any> = ({ navigation }) => {
  return (
    <>
      <DashboardLayout title="Menu" navigation={navigation}>
        <Box _light={{ bg: 'white' }} _dark={{ bg: 'coolGray.800' }} rounded="sm" px="0" py="5">
          {settings.map((item, index) => {
            return (
              <SettingCard
                key={index}
                item={item}
                action={() => navigation.navigate(item.option ? item.option : 'HomeScreen')}
              />
            );
          })}
        </Box>
      </DashboardLayout>
    </>
  );
};

export { MenuScreen };
