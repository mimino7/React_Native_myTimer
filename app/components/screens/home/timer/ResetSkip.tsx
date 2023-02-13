import MyButton from '@/components/UI/layout/MyButton'
import { COLORS, SIZES } from '@/constants'
import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { leftIcon, rightIcon } from '@/components/Icons';
import { ITimerOptions } from '@/types/timer.interface';


interface IResetSkip extends Pick<ITimerOptions, 'complited'> {
  skipBack: () => void,
  resetTimer: () => void
  skipForward: () => void
}

const ResetSkip: FC<IResetSkip> = ({ skipBack, resetTimer, skipForward, complited }) => {
  return (
    <View style={styles.reset_wrap}>
      <MyButton
        onPress={skipBack}
        container={styles.btn_skip}>
        {rightIcon}
      </MyButton>

      <MyButton
        onPress={resetTimer}
        container={styles.btn_skip} >
        <MaterialCommunityIcons name="restart" size={32} color={complited ? COLORS.primary1 : COLORS.g40} />
      </MyButton>

      <MyButton
        onPress={skipForward}
        container={styles.btn_skip} >
        {leftIcon}
      </MyButton>
    </View >
  )
}

export default ResetSkip

const styles = StyleSheet.create({
  reset_wrap: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  btn_skip: {
    width: SIZES.padding * 2, //8
    height: SIZES.padding * 2,
    backgroundColor: 'transparent',
    borderRadius: 32
  },
})

