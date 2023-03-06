import { COLORS, SIZES } from '@/constants'
import React, { FC, PropsWithChildren } from 'react'
import { View, SafeAreaView, Platform, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const Layout: FC<PropsWithChildren<{ title?: string }>> = ({ children, title }) => {
  //reduxxx
  const { top } = useSafeAreaInsets()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 7, paddingTop: Platform.OS === 'ios' ? top / 5 : top * 1.6 }} >
        <Text style={{ color: COLORS.w80, fontSize: SIZES.h1, alignItems: 'center', justifyContent: 'flex-end', textAlign: 'center' }} >{title}</Text>
        {children}
      </View >
    </SafeAreaView>

  )
}

export default Layout
