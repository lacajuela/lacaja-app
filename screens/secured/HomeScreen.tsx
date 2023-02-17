import React from 'react';
import {
  HStack,
  Icon,
  Text,
  VStack,
  Button,
  ScrollView,
  Hidden,
  Divider,
  Input,
  Image,
  Pressable,
} from 'native-base';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import DashboardLayout from '../../layouts/DashboardLayout';
import ResumeCourses, { Course } from '../../components/ResumeCourses';
import TrendingCourses from '../../components/TrendingCourses';
import Categories from '../../components/Categories';

type Icon = {
  name: string;
  text: string;
};

const trendingCourses: Course[] = [
  {
    id: 1,
    name: 'Artificial Intelligence',
    imageUri: require('../../assets/trending1.png'),
  },
  {
    id: 2,
    name: 'Machine Learning',
    imageUri: require('../../assets/trending2.png'),
  },
  {
    id: 3,
    name: 'AWS SysOps Associate',
    imageUri: require('../../assets/trending3.png'),
  },

  {
    id: 4,
    name: 'Angular Training Course',
    imageUri: require('../../assets/chair.jpeg'),
  },
  {
    id: 5,
    name: 'Artificial Intelligence',
    imageUri: require('../../assets/trending1.png'),
  },
];
const resumedCourses: Course[] = [
  {
    id: 1,
    chapter: 'Chapter 1',
    name: 'Theory of relativity',
    imageUri: require('../../assets/emc.png'),
  },
  {
    id: 2,
    chapter: 'Chapter 5',
    name: 'Big Data Engineer Program',
    imageUri: require('../../assets/big-data.png'),
  },
  {
    id: 3,
    chapter: 'Chapter 12',
    name: 'Data Scientist Program',
    imageUri: require('../../assets/data-scientist.png'),
  },
  {
    id: 4,
    chapter: 'Chapter 1',
    name: 'Theory of relativity',
    imageUri: require('../../assets/emc.png'),
  },
];

const icons: Icon[] = [
  {
    name: 'add',
    text: 'Maths',
  },
  {
    name: 'lightbulb',
    text: 'Physics',
  },
  {
    name: 'science',
    text: 'Chemistry',
  },
  {
    name: 'coronavirus',
    text: 'Biology',
  },
  {
    name: 'sports-baseball',
    text: 'Sports',
  },
  {
    name: 'psychology',
    text: 'Psychology',
  },
  {
    name: 'business',
    text: 'Business',
  },
  {
    name: 'more-vert',
    text: 'More',
  },
];
const footerIcons: Icon[] = [
  { name: 'home', text: 'Home' },
  { name: 'menu-book', text: 'Syllabus' },
  { name: 'speed', text: 'Test' },
  { name: 'menu', text: 'Mas' },
];
function MobileFooter() {
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
              _stack={{
                flexDirection: 'column',
              }}
              startIcon={
                <Icon
                  as={MaterialIcons}
                  name={item.name}
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
              {item.text}
            </Button>
          );
        })}
      </HStack>
    </Hidden>
  );
}
function Banner() {
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
          <Icon
            size="6"
            pt="0.5"
            as={AntDesign}
            name="arrowleft"
            color="coolGray.50"
          />
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
            Welcome John
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
}

export default function HomeScreen() {
  return (
    <DashboardLayout
      title="Class 12th"
      displayMenuButton
      displayScreenTitle={false}
      displayAlternateMobileHeader
      rightPanelMobileHeader={true}
    >
      <ScrollView>
        <Banner />
        <VStack
          pt={{ base: 39, md: 8 }}
          pb={{ base: 10, md: 8 }}
          _light={{ bg: 'white' }}
          _dark={{ bg: 'coolGray.800' }}
          rounded={{ md: 'sm' }}
          divider={<Divider />}
          space="5"
        >
          <ResumeCourses courses={resumedCourses} />
          <Categories icons={icons} />
          <TrendingCourses courses={trendingCourses} />
        </VStack>
      </ScrollView>
      <MobileFooter />
    </DashboardLayout>
  );
}
