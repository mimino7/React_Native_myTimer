import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TypeRootStackParamList } from './navigation.types';
import { NavigationContainer } from "@react-navigation/native";
import Home from '@/components/screens/home/Home';
import { useAuth } from '@/hooks/useAuth';
import { routes } from './routes';
import Auth from '@/components/screens/auth/Auth';
import { COLORS } from '@/constants';

interface PrivateNavigationProps {

}

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigation: React.FC<PrivateNavigationProps> = (props) => {
  const { user } = useAuth()

  return (
    <Stack.Navigator>
      {
        user ?
          routes.map(route =>
            <Stack.Screen key={route.name} {...route} options={{ headerShown: false, contentStyle: { backgroundColor: COLORS.blackBaseApp } }} />
          )
          : <Stack.Screen name='Auth' component={Auth} options={{ headerShown: false, contentStyle: { backgroundColor: COLORS.blackBaseApp } }} />
      }
    </Stack.Navigator>
  )
}

export default PrivateNavigation
