import { TypeRootStackParamList } from '@/navigation/navigation.types'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { menuData } from './menu.data'
import type { TypeNav } from './menu.interface'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import MenuItem from './MenuItem'



interface IBottomNav {
  nav: TypeNav
  currentRoute?: string
}

const BottomNav: React.FC<IBottomNav> = ({ currentRoute, nav }) => {
  const { bottom } = useSafeAreaInsets()


  return (
    <View style={[styles.wrap_bottom_nav, { paddingBottom: bottom + 10 }]}>
      {menuData.map(item =>
        <MenuItem item={item} nav={nav} currentRoute={currentRoute} key={item.name} />
      )}
    </View>
  )


}

export default BottomNav

const styles = StyleSheet.create({
  wrap_bottom_nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#181920',
    paddingTop: 5,
    paddingHorizontal: 3,
    alignItems: 'center',
    borderColor: '#181920',
  }
});
