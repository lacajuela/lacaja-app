import React, { useEffect, useState } from 'react';
import { Divider, ScrollView, VStack } from 'native-base';
import DashboardLayout from '../../layouts/DashboardLayout';
import ResumeCourses, { Course } from '../../components/ResumeCourses';
import TrendingCourses from '../../components/TrendingCourses';
import Categories from '../../components/Categories';
import { HomeBanner } from '../../components/Homebanner/HomeBanner';
import * as SecureStore from 'expo-secure-store';
import { BASE_API_URL } from '../../constants/constants';
import axios from 'axios';

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

const icons: IIcon[] = [
  {
    icon: 'add',
    name: 'Maths',
    action: () => {},
  },
  {
    icon: 'lightbulb',
    name: 'Physics',
    action: () => {},
  },
  {
    icon: 'science',
    name: 'Chemistry',
    action: () => {},
  },
  {
    icon: 'coronavirus',
    name: 'Biology',
    action: () => {},
  },
  {
    icon: 'sports-baseball',
    name: 'Sports',
    action: () => {},
  },
  {
    icon: 'psychology',
    name: 'Psychology',
    action: () => {},
  },
  {
    icon: 'business',
    name: 'Business',
    action: () => {},
  },
  {
    icon: 'more-vert',
    name: 'More',
    action: () => {},
  },
];

export default function HomeScreen() {
  const [name, setName] = useState<string>('');
  const [dni, setDni] = useState<string>('');
  const [error, setError] = useState<string>('');
  useEffect(() => {
    const getProfile = async () => {
      const token = await SecureStore.getItemAsync('token');
      const response = await axios.get<IProfileResponse>(`${BASE_API_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    };
    getProfile()
      .then((data: IProfileResponse) => {
        setName(data.name);
        setDni(data.dni);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return (
    <DashboardLayout
      title="Class 12th"
      displayMenuButton
      displayScreenTitle={false}
      displayAlternateMobileHeader
      rightPanelMobileHeader={true}
    >
      <ScrollView>
        <HomeBanner name={name} />
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
    </DashboardLayout>
  );
}
