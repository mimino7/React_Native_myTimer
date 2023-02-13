import { COLORS, DaysOfWeek, SIZES } from '@/constants'
import React, { useState, useEffect, FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { IDayOfWeek } from '../../../../types/titleHome.interfase'

interface TitleHomeProps {

}
const TitleHome: FC<TitleHomeProps> = (props) => {
  const [dayOfWeek, setDayOfWeek] = useState<IDayOfWeek>({} as IDayOfWeek)

  function getDayOfWeek(): void {

    let d = new Date().getDay()
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let currentTime = `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}`

    setDayOfWeek({ currentDay: DaysOfWeek.en[d], currentTime })
  }

  useEffect(() => {  //вместо setInterval
    let timerId = setTimeout(function run() {
      getDayOfWeek();
      timerId = setTimeout(run, 30000)
    }, 200);
  }, [])

  const isWorkDay = dayOfWeek.currentDay === 'Sunday' ||
    dayOfWeek.currentDay === 'Saturday'

  return (
    <>
      <Text style={[styles.date_text,
      {
        fontSize: SIZES.h2,
        color: isWorkDay ? COLORS.primary70 : COLORS.w60
      },]}>
        {isWorkDay ? 'Day Off today' : 'Working Day today'}
      </Text>
      <View style={styles.date_wrap}>
        <Text style={styles.date_text}>{dayOfWeek.currentDay}</Text>
        <Text style={[styles.date_text, { letterSpacing: 2 }]}>{dayOfWeek.currentTime}</Text>
      </View>
    </>
  )
}

export default TitleHome

const styles = StyleSheet.create({
  date_wrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.base * 2
  },
  date_text: {
    color: COLORS.w50,
    fontSize: SIZES.h3,
    fontFamily: 'Montserrat-Medium',
  }
})
