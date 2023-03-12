import React from 'react';
import { Button, Hidden, HStack, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

type MobileFooterProps = {
  footerIcons: IIcon[];
};

const MobileFooter: React.FC<MobileFooterProps> = ({ footerIcons }: MobileFooterProps) => {
  return (
    <Hidden from="md">
      <HStack
        justifyContent="space-between"
        safeAreaBottom
        h="20"
        width="100%"
        position="absolute"
        left="0"
        right="0"
        bottom="0"
        overflow="hidden"
        alignSelf="center"
        borderTopLeftRadius="20"
        borderTopRightRadius="20"
        _light={{ backgroundColor: 'coolGray.50' }}
        _dark={{ backgroundColor: 'coolGray.800' }}
      >
        {footerIcons.map((item, index) => {
          return (
            <Button
              variant="ghost"
              key={index}
              colorScheme="coolGray"
              onPress={item.action}
              _stack={{
                flexDirection: 'column',
              }}
              startIcon={
                <Icon
                  as={MaterialIcons}
                  name={item.icon}
                  size="5"
                  _light={{
                    color: index === 0 ? 'primary.900' : 'coolGray.400',
                  }}
                  _dark={{
                    color: index === 0 ? 'primary.500' : 'coolGray.400',
                  }}
                />
              }
              _text={{
                _light: {
                  color: index === 0 ? 'primary.900' : 'coolGray.400',
                },
                _dark: {
                  color: index === 0 ? 'primary.500' : 'coolGray.400',
                },
              }}
            >
              {item.name}
            </Button>
          );
        })}
      </HStack>
    </Hidden>
  );
};

export { MobileFooter };
