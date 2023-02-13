import { StyleSheet, View } from 'react-native'
import React, { useState, FC } from 'react'
import Layout from '@/components/UI/layout/Layout'
import MyButton from '@/components/UI/layout/MyButton'
import { COLORS, SIZES } from '@/constants'
import TitleHome from './titleHome/TitleHome'
import Timer from './timer/Timer'
import { Feather } from '@expo/vector-icons'


interface HomeProps {

}

// TODO    1 убрать баг при скипе назад на первом перерыве


const Home: FC<HomeProps> = (props) => {
  // ============ Constans =========================================
  const [isStart, setStart] = useState(false)
  const [isDisabled, setDisabled] = useState(false)
  const disableColor = isDisabled ? COLORS.g40 : COLORS.rouse
  const startIcon = (<Feather name="play" size={24} color={disableColor} />)
  const PauseIcon = (<Feather name="pause" size={24} color={disableColor} />)

  // ============ Functions ========================================
  function btnToDisable(bool: boolean): void {
    setStart(false)
    setDisabled(bool)
  }

  // =============== Render ==========================================
  return (
    <Layout title='Home'>
      <View style={styles.home_wrap}>

        {/* //=================== Title ===================== */}
        <TitleHome />

        {/* //=================== Timer ===================== */}
        <Timer
          isStart={isStart}
          btnToDisable={(bool) => btnToDisable(bool)}
          setStart={setStart} />

        {/* //=================== Play Pause Button ===================== */}
        <MyButton
          onPress={() => setStart(!isStart)}
          container={styles.btn_play}
          disabled={isDisabled}>
          {isStart ? PauseIcon : startIcon}
        </MyButton>

      </View>
    </Layout >
  )
}

export default Home

const styles = StyleSheet.create({
  home_wrap: {
    alignItems: 'center',
    paddingTop: SIZES.padding * 1.5
  },
  btn_play: {
    width: 60,
    height: 60,
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: COLORS.rouse60,
    borderWidth: 4,
    borderRadius: 30,
  }
})