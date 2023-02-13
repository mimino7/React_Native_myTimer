import { COLORS, SIZES } from '@/constants'
import { IstartingValues } from '@/types/timer.interface'
import React, { FC } from 'react'
import { Text } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { startingValues } from './timerValueStarting'


interface CircleTimerProps {
  keyForTimer: number
  isStart: boolean
  status: string
  getDuration: (startingValues: IstartingValues) => number
  onComplete: () => void
}

const CircleTimer: FC<CircleTimerProps> = ({ keyForTimer, isStart, status, getDuration, onComplete }) => {

  return (
    <CountdownCircleTimer
      key={keyForTimer}
      isPlaying={isStart}
      duration={getDuration(startingValues)}
      colors={['#2B303E', '#2B303E']}
      colorsTime={[7, 0]}
      trailColor={status === 'Breake...' ? '#766AF0' : '#ed427599'}
      size={300}
      onComplete={onComplete}
      strokeWidth={16}
      strokeLinecap='butt'
      trailStrokeWidth={17}
    >
      {({ remainingTime }) => {
        let minutes: string | number = Math.floor(remainingTime / 60)
        minutes = (minutes < 10) ? `0${minutes}` : `${minutes} `
        let seconds: string | number = remainingTime % 60
        seconds = seconds < 10 ? `0${seconds}` : `${seconds} `
        return (<>
          <Text style={{ color: COLORS.w50, fontSize: SIZES.h1 * 2.5 }}>
            {`${minutes}`}:{`${seconds}`}
          </Text>
          <Text style={{ color: COLORS.w50, fontSize: SIZES.h2 }}>
            {status}</Text>
        </>)
      }
      }
    </CountdownCircleTimer>

  )
}

export default CircleTimer
