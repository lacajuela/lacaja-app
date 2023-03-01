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

type DashboardLayoutProps = {
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
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);
  const footerIcons: IIcon[] = [
    { icon: 'home', name: 'Home', action: () => {} },
    { icon: 'menu-book', name: 'Syllabus', action: () => {} },
    { icon: 'speed', name: 'Test', action: () => {} },
    {
      icon: 'menu',
      name: 'Menu',
      action: () => {
        setIsSidebarVisible(!isSidebarVisible);
      },
    },
  ];
  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  function getSidebar(title: string) {
    switch (title) {
      case 'Class 12th':
        return <SidebarHomeAndMenu />;
      case 'Podcasts':
        return <SidebarPodcastScreen />;
      case 'Video Library':
        return <SidebarPodcastScreen />;
      case 'Playlist':
        return <SidebarPodcastScreen />;
      case 'Dashboard':
        return <SidebarTopPerformingStocks />;
      default:
        return <Sidebar />;
    }
  }

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Box safeAreaTop _light={{ bg: 'primary.900' }} _dark={{ bg: 'coolGray.900' }} />
      <VStack flex={1} _light={{ bg: 'primary.50' }} _dark={{ bg: 'customGray' }}>
        <Hidden from="md">
          <MobileHeader
            title={props.title}
            subTitle={props.subTitle}
            backButton={mobileHeader.backButton}
            rightPanel={props.rightPanelMobileHeader}
          />
        </Hidden>
        <Hidden till="md">
          <Header
            toggleSidebar={toggleSidebar}
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
          {isSidebarVisible && displaySidebar && (
            <Hidden till="md">{getSidebar(props.title)}</Hidden>
          )}

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
            <MobileFooter footerIcons={footerIcons} />
          </Hidden>
        </Box>
      </VStack>
    </>
  );
};

export default DashboardLayout;
