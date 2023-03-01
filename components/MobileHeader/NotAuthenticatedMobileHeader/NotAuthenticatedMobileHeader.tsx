import { Hidden, HStack, Icon, IconButton, Text, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

type NotAuthenticatedMobileHeaderProps = {
  title: string;
  shotDescription?: string;
  suggestion?: string;
};
const NotAuthenticatedMobileHeader: React.FC<NotAuthenticatedMobileHeaderProps> = ({
  title,
  shotDescription,
  suggestion,
}) => {
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
            {title}
          </Text>
        </HStack>
        <VStack space={0.5}>
          <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
            {shotDescription}
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
            {suggestion}
          </Text>
        </VStack>
      </VStack>
    </Hidden>
  );
};

export { NotAuthenticatedMobileHeader };
