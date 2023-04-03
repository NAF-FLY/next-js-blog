import Header from '@/components/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'

const basePallete = {
	breakpoints: {
		values: {
			xs: 0,
			sm: 768,
			md: 1000,
			lg: 1200,
			xl: 1536,
		},
	},
}

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
	...basePallete
})

const lightTheme = createTheme()

export default function App({ Component, pageProps }) {
	const [currentTheme, setCurrentTheme] = useState(darkTheme)
	const onThemeChanged = isDark =>
		setCurrentTheme(isDark ? darkTheme : lightTheme)

	return (
		<ThemeProvider theme={currentTheme}>
			<CssBaseline />
			<Header onThemeChanged={onThemeChanged} isDark />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
