import BottomNav from '@/components/UI/layout/bottomNav/BottomNav';
import { useAuth } from '@/hooks/useAuth'
import { useNavigationContainerRef, NavigationContainerEventMap } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import React, { FC, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { TypeRootStackParamList } from './navigation.types';
import Settings from '@/components/screens/settings/Settings';
import Home from '@/components/screens/home/Home';
import AuthProvider from '@/providers/AuthProvider';
import PrivateNavigation from './PrivateNavigation';



const Navigation: FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string | undefined>(undefined)

  const { user } = useAuth();

  const navRef = useNavigationContainerRef()

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: "transparent",
    },
  };


  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name)
    const listener = navRef.addListener('state', () => {
      setCurrentRoute(navRef.getCurrentRoute()?.name)
    })

    return () => {
      navRef.removeListener('state', listener)
    }
  }, [])

  return (
    <>
      <NavigationContainer ref={navRef}>
        <PrivateNavigation />
      </NavigationContainer>
      {
        user && currentRoute &&
        (<BottomNav nav={navRef.navigate} currentRoute={currentRoute} />)}
    </>
  )
}

export default Navigation
