import { INew } from '../../../types/model';
import { Box, Image, Text } from 'native-base';
import React from 'react';

type HomeNewCardProps = {
  newItem: INew;
};
const HomeNewCard: React.FC<HomeNewCardProps> = ({ newItem }) => {
  return (
    <Box width={200} height={300} borderWidth={1} borderColor="gray.300" borderRadius={8}>
      <Image
        flex={1}
        width="100%"
        resizeMode="cover"
        source={{ uri: newItem.imageUri }}
        alt="Alternate Text"
      />
      <Text px={2} pt={2} fontSize="md" fontWeight="medium">
        {newItem.title}
      </Text>
    </Box>
  );
};

export { HomeNewCard };
