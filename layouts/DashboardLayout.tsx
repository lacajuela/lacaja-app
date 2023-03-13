import React from 'react';
import { Box, Hidden, ScrollView, StatusBar, VStack } from 'native-base';

import Sidebar from '../components/Sidebar';

import SidebarHomeAndMenu from '../components/SidebarHomeAndMenu';
import SidebarPodcastScreen from '../components/SidebarPodcastScreen';
import SidebarTopPerformingStocks from '../components/SidebarTopPerformingStocks';
import { MobileFooter } from '../components/MobileFooter';
import { MainContent } from '../components/MainContent';
import { MobileHeader } from '../components/MobileHeader';
import { Header } from '../components/Header';
import { Dimensions } from 'react-native';

type DashboardLayoutProps = {
  navigation: any;
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

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  navigation,
  displayScreenTitle = true,
  displaySidebar = true,
  header = {
    searchbar: false,
  },
  maxWidth = 1016,
  mobileHeader = {
    backButton: true,
  },
  ...props
}: DashboardLayoutProps) => {
  const footerIcons: IIcon[] = [
    {
      icon: 'home',
      name: 'Home',
      action: () => {
        navigation.navigate('Home');
      },
    },
    {
      icon: 'menu-book',
      name: 'Facturas',
      action: () => {
        navigation.navigate('InvoicesListScreen');
      },
    },
    {
      icon: 'speed',
      name: 'Test',
      action: () => {
        console.log('hola');
      },
    },
    {
      icon: 'menu',
      name: 'Menu',
      action: () => {
        navigation.navigate('Menu');
      },
    },
  ];

  const windowHeight = Dimensions.get('window').height;
  const mobileFooterHeight = 1 * 20;

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Box safeAreaTop _light={{ bg: 'primary.900' }} _dark={{ bg: 'coolGray.900' }} />
      <VStack
        flex={1}
        _light={{ bg: 'primary.50' }}
        _dark={{ bg: 'customGray' }}
        height={windowHeight - mobileFooterHeight}
        safeAreaBottom
      >
        <Hidden from="md">
          <MobileHeader
            title={props.title}
            subTitle={props.subTitle}
            backButton={mobileHeader.backButton}
            rightPanel={props.rightPanelMobileHeader}
            goBackAction={() => navigation.goBack()}
          />
        </Hidden>
        <Hidden till="md">
          <Header
            title={props.title}
            subTitle={props.subTitle}
            menuButton={displaySidebar}
            searchbar={header.searchbar}
          />
        </Hidden>

        <Box
          flex={1}
          safeAreaBottom
          flexDirection={{ base: 'column', md: 'row' }}
          _light={{
            borderTopColor: 'coolGray.200',
          }}
          _dark={{
            bg: 'coolGray.700',
            borderTopColor: 'coolGray.700',
          }}
        >
          <Hidden till="md">
            <ScrollView
              flex={1}
              p={{ md: 8 }}
              contentContainerStyle={{ alignItems: 'center', flexGrow: 1 }}
              showsVerticalScrollIndicator={false}
            >
              <MainContent {...props} displayScreenTitle={displayScreenTitle} maxWidth={maxWidth} />
            </ScrollView>
          </Hidden>

          <Hidden from="md">
            <MainContent {...props} displayScreenTitle={displayScreenTitle} />
          </Hidden>
        </Box>
      </VStack>
      <MobileFooter footerIcons={footerIcons} />
    </>
  );
};

export default DashboardLayout;
