import { SIZES } from '@/constants'
import React, { FC, useState, useMemo, useRef, useEffect, Dispatch, SetStateAction } from 'react'
import { StyleSheet, View } from 'react-native'
import ProgressBar from './ProgressBar'
import { startingOptions, startingValues } from './timerValueStarting'
import { EnumStatus, IstartingValues, ITimerOptions } from '@/types/timer.interface'
import ResetSkip from './ResetSkip'
import CircleTimer from './CircleTimer'


interface TimerProps {
  isStart: boolean,
  btnToDisable: (bool: boolean) => void,
  setStart: Dispatch<SetStateAction<boolean>>
}

const Timer: FC<TimerProps> = ({ isStart, btnToDisable, setStart }) => {

  // ============ Constans ======================================================
  const [options, setOptions] = useState<ITimerOptions>(startingOptions)
  const { complited, countWorks, isGoBack, key, currentSession, status } = options
  const { sessionCount } = startingValues
  const ref = useRef<boolean>()

  console.log('key', key, 'currentSession', currentSession, 'countWorks', countWorks, 'isGoBack', isGoBack, 'isStart', isStart);
  // console.log(ref.current?.toggleButton());

  // ============ Functions ========================================
  function getStatus(): void {
    const { complited, key, } = options
    if (!complited && !isStart && !ref.current) {
      setOptions(prev => ({ ...prev, status: EnumStatus.START }))
      return
    }
    if (complited) {
      setOptions(prev => ({ ...prev, status: EnumStatus.COMPLITED }))
      return
    }
    (!complited) && ((key + 1) < sessionCount * 2 + 1) && !((key + 1) % 2)
      ? setOptions(prev => ({ ...prev, status: EnumStatus.WORK }))
      : setOptions(prev => ({ ...prev, status: EnumStatus.BREAK }))
    return
  }

  function getDuration(pointTimes: IstartingValues): number {
    if (status === EnumStatus.WORK || status === "Let's start") {
      return pointTimes.workTime;
    }
    let indexBreake = 0
    if (pointTimes.countBreakTimeBig === 1) {
      indexBreake = Math.ceil(sessionCount / 2)
    }
    if (pointTimes.countBreakTimeBig === 2) {
      indexBreake = Math.round(sessionCount / 3)
    }
    if (status === 'Breake...') {
      if ((pointTimes.countBreakTimeBig > 0) && ((countWorks === indexBreake) || countWorks === indexBreake * 2)) {
        console.log('countBre', pointTimes.countBreakTimeBig);
        return pointTimes.breakTimeBig
      }
      return pointTimes.breakTime
    };
    return 0
  }

  function onComplete(): void {
    setOptions(prev => ({ ...prev, key: prev.key + 1 }))
    setOptions(prev => ({ ...prev, currentSession: prev.currentSession + 1 }))
    if (sessionCount * 2 === currentSession + 1) {
      ref.current = (false)
      setOptions(prev => ({ ...prev, complited: true }))
      setOptions(prev => ({ ...prev, countWorks: prev.countWorks + 1 }))
    }
    return
  }

  function resetTimer(): void {
    setOptions(prev => ({ ...prev, key: 0 }))
    setOptions(prev => ({ ...prev, currentSession: 0 }))
    setOptions(prev => ({ ...prev, countWorks: 0 }))
    setStart(false)
    ref.current = (false)
    setOptions(prev => ({ ...prev, complited: false }))
    btnToDisable(false)
    setOptions(prev => ({ ...prev, isGoBack: false }))
    return
  }

  function skipForward(): void {
    setStart(false)
    if (!complited && ref.current) {
      setOptions(prev => ({ ...prev, key: prev.key + 1 }))
      setOptions(prev => ({ ...prev, currentSession: prev.currentSession + 1 }))
      if (key === sessionCount * 2 - 1) {
        ref.current = (false)
        setOptions(prev => ({ ...prev, complited: true }))
        setOptions(prev => ({ ...prev, countWorks: prev.countWorks + 1 }))
      }
    }
    return
  }

  function skipBack(): void {
    if (!complited && ref.current) {
      setStart(false)
      setOptions(prev => ({ ...prev, isGoBack: true }))
      if (countWorks === 0) {
        resetTimer()
        return
      }
      if (status === 'Breake...') {
        // setOptions(prev => ({ ...prev, key: prev.key - 1 }))
        setOptions(prev => ({ ...prev, currentSession: prev.currentSession - 1 }))
        // setOptions(prev => ({ ...prev, status: EnumStatus.BREAK }))

      }
      if (status === 'Working...') {
        setOptions(prev => ({ ...prev, countWorks: prev.countWorks - 1 }))
      }
    }
    return
  }

  // ===================== LOGICS ===============================================
  useEffect(() => {
    if (complited) {
      btnToDisable(true)
    }
  }, [complited])

  if (isStart) {
    ref.current = true
  }

  useMemo(() => {
    if (ref.current) {
      setOptions(prev => ({ ...prev, currentSession: prev.currentSession + 1 }))
      setOptions(prev => ({ ...prev, key: 1 }))
    }
  }, [ref.current])

  useEffect(() => {
    getStatus()
  }, [currentSession])

  useEffect(() => {
    if (status === 'Breake...' && ref.current && !isGoBack) {
      setOptions(prev => ({ ...prev, countWorks: prev.countWorks + 1 }))
    }
    setOptions(prev => ({ ...prev, isGoBack: false }))
  }, [status])


  // =============== Render ===================================================
  return (
    <View style={styles.timer_wrap}>

      {/* ============ Timer circle    ================================= */}
      <CircleTimer
        keyForTimer={key}
        isStart={isStart}
        status={status}
        getDuration={getDuration}
        onComplete={onComplete}
      />

      {/* ============ Reset Skip ========================================= */}
      <ResetSkip
        skipBack={skipBack}
        resetTimer={resetTimer}
        skipForward={skipForward}
        complited={complited} />

      {/* ============ Progress Bar ========================================= */}
      <ProgressBar
        countWorks={countWorks}
        sessionCount={sessionCount}
        isRef={ref.current} />
    </View>
  )
}

export default Timer

const styles = StyleSheet.create({
  timer_wrap: {
    marginVertical: SIZES.padding * 1,
    alignItems: 'center'
  },
})


