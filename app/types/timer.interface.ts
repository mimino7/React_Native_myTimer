export interface ITimerOptions {
	key: number
	currentSession: number
	status: EnumStatus
	countWorks: number
	complited: boolean
	isGoBack: boolean
}
export interface IstartingValues {
	sessionCount: number
	workTime: number
	breakTime: number
	breakTimeBig: number
	countBreakTimeBig: number
}
export enum EnumStatus {
	START = "Let's start",
	WORK = 'Working...',
	BREAK = 'Breake...',
	COMPLITED = 'GOOD JOB!!!'
}
