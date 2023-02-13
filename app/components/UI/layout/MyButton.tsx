import { COLORS, SIZES } from '@/constants'
import React, { PropsWithChildren, useState } from 'react'
import { Text, Pressable, TextStyle, ViewStyle, StyleSheet, PressableProps } from 'react-native'



interface IButtonStyles extends PressableProps {
  title?: TextStyle
  container?: ViewStyle
  pressedStyle?: ViewStyle
}

const MyButton: React.FC<PropsWithChildren<IButtonStyles>> = (props) => {

  return (

    <Pressable disabled={props.disabled} style={({ pressed }) => [styles.container, props.container, props.disabled && { borderColor: COLORS.g40, }, pressed ? [{ backgroundColor: COLORS.b50 }, props.pressedStyle] : {}]}
      onPress={props.onPress}
    >

      <Text style={[styles.text, props.title, props.disabled && { color: COLORS.g40 }]}>{props.children}</Text>


    </Pressable>
  )
}

export default MyButton

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: SIZES.padding * 2,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius,
  },
  text: {
    color: COLORS.w80,
    fontSize: SIZES.h2,
    fontWeight: "600",
  }
})