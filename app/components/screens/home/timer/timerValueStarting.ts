import {
	EnumStatus,
	ITimerOptions,
	IstartingValues
} from '@/types/timer.interface'

export const startingValues: IstartingValues = {
	sessionCount: 8,
	workTime: 5,
	breakTime: 2,
	breakTimeBig: 14,
	countBreakTimeBig: 0
}
export const startingOptions: ITimerOptions = {
	key: 0,
	currentSession: 0,
	status: EnumStatus.START,
	countWorks: 0,
	complited: false,
	isGoBack: false
}
