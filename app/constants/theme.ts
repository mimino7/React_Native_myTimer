import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const COLORS = {
	primary: '#9874FF', // Light purple
	secondary: '#7E50FE', // Dark purple
	secondary60: 'rgba(126, 80, 254,0.6)', // Dark purple

	primary1: '#766AF0', // Light blue
	primary70: 'rgba(118, 106, 240, 0.7)', // Light blue
	secondary2: '#9874FF', // Dark blue
	secondary70: 'rgba(112, 101, 235, 0.7)', // Light blue

	blackBaseApp: '#181920', // Dark theme

	rouse: 'rgba(237, 66, 117, 1)', //  rouse
	rouse40: 'rgba(237, 66, 117, 0.4)', // Dark rouse
	rouse60: 'rgba(237, 66, 117, 0.6)', // Light rouse
	rouse80: 'rgba(237, 66, 117, 0.8)', // Light rouse

	errorApp: 'rgba(255, 15, 15, 0.5	)',

	// shadows
	shadowSecodary: 'RGBA(85, 80, 159, 0.4)', // Dark purple
	shdw2: 'RGBA(93, 62, 182, 0.5)', // Dark purple
	shdw3: 'RGBA(85, 80, 159)', // Dark purple

	// white different
	white: '#FFFFFF',
	w80: '#F9F7FF',
	w60: '#F6F6F7',
	w50: 'rgba(255, 255, 255, 0.8)',

	// black different
	black: '#000000',
	b50: '#2B303E',

	// grey different
	g60: '#9B9EA4',
	g50: '#9FA2BA',
	g80: '#5B5E65',
	g40: '#626771'
}

export const SIZES = {
	//global sizes
	base: 8,
	font: 14,
	radius: 12,
	padding: 24,

	// font sizes
	h1: 28,
	h1Mon: 32,
	h2: 22,
	h2Mon: 26,
	h3: 16,
	h3Mon: 20,
	h4: 14,
	body1: 30,
	body2: 22,
	body3: 16,
	body4: 14,
	body5: 12,

	// app dimentions
	width: width,
	height: height
}

const appTheme = { COLORS, SIZES }

export default appTheme
