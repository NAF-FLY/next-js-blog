import Header from '@/components/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
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
