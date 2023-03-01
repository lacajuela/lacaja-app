import { Hidden, HStack, Icon, Pressable, Text, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

type MainContentProps = {
  scrollable?: boolean;
  displayScreenTitle?: boolean;
  displaySidebar?: boolean;
  displayBackButton?: boolean;
  showIcons?: boolean;
  displaySearchButton?: boolean;
  displayNotificationButton?: boolean;
  displayMenuButton?: boolean;
  displayAlternateMobileHeader?: boolean;
  maxWidth?: number;
  header?: {
    searchbar: boolean;
  };
  mobileHeader?: {
    backButton: boolean;
  };
  title: string;
  subTitle?: string;
  children: React.ReactNode;
  showGroupInfoHeader?: boolean;
  displayBackIcon?: boolean;
  rightPanelMobileHeader?: boolean;
};
const MainContent: React.FC<MainContentProps> = (props: MainContentProps) => {
  return (
    <VStack maxW={props.maxWidth} flex={1} width="100%">
      {props.displayScreenTitle && (
        <Hidden till="md">
          <HStack mb="4" space={4}>
            <Pressable
              onPress={() => {
                console.log('hello');
              }}
            >
              <Icon
                size="6"
                pt="0.5"
                as={AntDesign}
                name={'arrowleft'}
                _light={{ color: 'coolGray.800' }}
                _dark={{ color: 'coolGray.50' }}
              />
            </Pressable>
            <VStack>
              <Text
                fontSize="lg"
                fontWeight="medium"
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'coolGray.800' }}
              >
                {props.title}
              </Text>
              <Text
                _dark={{ color: 'coolGray.50' }}
                _light={{ color: 'coolGray.800' }}
                fontSize="sm"
                fontWeight="normal"
              >
                {props.subTitle}
              </Text>
            </VStack>
          </HStack>
        </Hidden>
      )}
      {props.children}
    </VStack>
  );
};

export { MainContent };
