import { COLORS, SIZES } from '@/constants'
import React from 'react'
import { View, ActivityIndicator } from 'react-native'

interface LoaderProps {

}

const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <ActivityIndicator color={COLORS.secondary} size='large' style={{ marginVertical: SIZES.base * 4 }} />
  )
}

export default Loader
