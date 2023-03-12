import React from 'react';
import { Box, FlatList, Pressable, Text, VStack } from 'native-base';
import { INew } from '../../types/model';
import { HomeNewCard } from '../cards/HomeNewCard/HomeNewCard';

type ActualNewsProps = {
  news: INew[];
};

const ActualNews: React.FC<ActualNewsProps> = ({ news }) => {
  return (
    <VStack pb={{ base: 16 }} px={{ base: 4, md: 8 }}>
      <Text
        _dark={{ color: 'coolGray.50' }}
        _light={{ color: 'coolGray.800' }}
        fontSize="md"
        fontWeight="bold"
      >
        Novedades
      </Text>
      <FlatList
        mt={8}
        data={news}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: { item: INew }) => {
          return (
            <Pressable>
              <HomeNewCard newItem={item} />
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <Box w="4" />}
      />
    </VStack>
  );
};

export { ActualNews };
