import React, { useEffect, useState } from 'react';
import { Divider, ScrollView, VStack } from 'native-base';
import { INew } from '../../../types/model';
import DashboardLayout from '../../../layouts/DashboardLayout';
import Categories from '../../Categories';
import { HomeBanner } from '../../Homebanner/HomeBanner';
import axios from 'axios';
import { BASE_API_URL } from '../../../constants/constants';
import * as SecureStore from 'expo-secure-store';
import { ActualNews } from '../../ActualNews/ActualNews';

const actualNews: INew[] = [
  {
    id: 1,
    publishedDate: new Date(),
    title: 'Conocé las nuevas autoridades para el período 2023-2025',
    imageUri:
      'https://www.cajademedicos.com.ar/wp-content/uploads/noticia-directorio-completo-2023-2025-1536x776.jpg',
  },
  {
    id: 2,
    publishedDate: new Date(),
    title:
      'Profundo pesar por el fallecimiento del Dr. Edgardo Enriquez, Director suplente electo del Distrito VIII',
    imageUri:
      'https://www.cajademedicos.com.ar/wp-content/uploads/noticia-edgardo-enriquez-300x150.png',
  },
  {
    id: 3,
    publishedDate: new Date(),
    title: '¡Feliz día!',
    imageUri:
      'https://www.cajademedicos.com.ar/wp-content/uploads/slide-dia-del-medico-2022-300x150.jpg',
  },
];

const icons: IIcon[] = [
  {
    icon: 'coronavirus',
    name: 'Covid-19',
    action: () => {},
  },
  {
    icon: 'science',
    name: 'Ciencia',
    action: () => {},
  },
  {
    icon: 'sports-soccer',
    name: 'Deportes',
    action: () => {},
  },
  {
    icon: 'psychology',
    name: 'Psicologia',
    action: () => {},
  },
  {
    icon: 'business',
    name: 'Negocios',
    action: () => {},
  },
  {
    icon: 'more-vert',
    name: 'More',
    action: () => {},
  },
];

export default function HomeScreen({ navigation }: any) {
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
      title="Home"
      navigation={navigation}
      displayMenuButton
      displayScreenTitle={false}
      displayAlternateMobileHeader
      rightPanelMobileHeader={true}
    >
      <ScrollView>
        <HomeBanner name={name} dni={dni} />
        <VStack
          pt={{ base: 39, md: 8 }}
          pb={{ base: 10, md: 8 }}
          _light={{ bg: 'white' }}
          _dark={{ bg: 'coolGray.800' }}
          rounded={{ md: 'sm' }}
          divider={<Divider />}
          space="5"
        >
          <Categories icons={icons} />
          <ActualNews news={actualNews} />
        </VStack>
      </ScrollView>
    </DashboardLayout>
  );
}
