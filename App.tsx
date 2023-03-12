import React, { useEffect } from 'react';
import { extendTheme, NativeBaseProvider, theme as nbTheme } from 'native-base';
import Config from './nativebase.config';
import { Platform } from 'react-native';
import { Button, Divider, Input, Radio, TextArea } from './themes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootComponent } from './components/RootComponent';

export default ({ children }: { children: React.ReactNode }) => {
  const customTheme = extendTheme({
    config: {
      initialColorMode: 'light',
    },
    colors: {
      primary: nbTheme.colors.success,
      customGreen: '#00CE9C',
      customGray: '#2F3948',
      secondary: nbTheme.colors.coolGray,
    },
    sizes: {
      container: '1016px',
    },
    components: {
      Button,
      Radio,
      Divider,
      Input,
      TextArea,
    },
  });

  // Move this to index.html later
  useEffect(() => {
    if (Platform.OS === 'web') {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    }
  }, []);

  const Drawer = createDrawerNavigator();

  return (
    <NativeBaseProvider theme={customTheme} config={Config}>
      <RootComponent />
    </NativeBaseProvider>
  );
};
