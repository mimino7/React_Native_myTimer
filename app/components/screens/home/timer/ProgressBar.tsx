import { COLORS } from '@/constants'
import { ITimerOptions } from '@/types/timer.interface'
import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type IProgressBar = Pick<ITimerOptions, 'countWorks'> & {
  sessionCount: number,
  isRef: boolean | undefined
}

const ProgressBar: FC<IProgressBar> = ({ sessionCount, countWorks, isRef }) => (
  <>
    <View style={styles.progress_bar_wrap}>
      {Array.from(Array(sessionCount)).map((_, i) => {
        const bigSession = sessionCount > 9;
        const breakeSession = (i === countWorks && isRef);
        const workSession = (i < countWorks);
        const workSessionDotten = ((i + 1) !== sessionCount);
        return (
          <View key={i} style={styles.progress_bar_item}>
            <View style={[
              styles.progress_bar_circle,
              (bigSession) && styles.circle_big,
              (breakeSession) && styles.circle_breake,
              (workSession) && styles.circle_work
            ]} />
            {(workSessionDotten) &&
              <View style={[
                styles.progress_bar_dotten,
                (bigSession) && styles.dotten_big,
                (workSession) && styles.dotten_work
              ]} />}
          </View>)
      }
      )}
    </View>
  </>
)

export default ProgressBar

const styles = StyleSheet.create({
  progress_bar_wrap: {
    width: 300,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 0
  },
  progress_bar_item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  progress_bar_circle: {
    width: 20, //17
    height: 20,
    backgroundColor: COLORS.b50,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 4, //2
    borderColor: COLORS.b50
  },
  circle_big: {
    width: 17,
    height: 17,
    borderWidth: 4,
  },
  circle_breake: {
    borderColor: COLORS.primary1
  },
  circle_work: {
    borderColor: COLORS.rouse60,
    backgroundColor: COLORS.primary1
  },
  progress_bar_dotten: {
    width: 15, //8
    height: 4,
    backgroundColor: COLORS.b50,
  },
  dotten_big: {
    width: 8
  },
  dotten_work: {
    backgroundColor: COLORS.primary1
  },
})

