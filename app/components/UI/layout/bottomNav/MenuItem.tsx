import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { IMenuItem, TypeNav } from './menu.interface'
import { Feather } from '@expo/vector-icons';
import { COLORS, SIZES } from '@/constants';
import { Shadow } from 'react-native-shadow-2';

interface MenuItemProps {
  item: IMenuItem
  nav: TypeNav
  currentRoute?: string
}



const MenuItem: React.FunctionComponent<MenuItemProps> = ({ item, nav, currentRoute }) => {

  const isActive = item.path === currentRoute

  return (

    <Pressable style={[styles.wrap_icon,]}
      onPress={() => nav(item.path)}>
      <Shadow distance={8}
        startColor={isActive ? COLORS.shadowSecodary : COLORS.blackBaseApp}
        offset={[0, 0]}
        style={{ borderRadius: SIZES.radius }} >
        <Feather name={item.name} size={26} color={isActive ? COLORS.secondary : COLORS.g50}
        />
      </Shadow>

    </Pressable >
  )
}

export default MenuItem

const styles = StyleSheet.create({
  wrap_icon: {
    width: '24%',
    alignItems: 'center',
    backgroundColor: 'tranparent',
    zIndex: -10
  },
});

