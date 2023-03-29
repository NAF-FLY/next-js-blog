import { AppBar, FormControlLabel } from '@mui/material'
import { Box } from '@mui/system'
import SwitchTheme from './UI/SwitchTheme'

const Header = ({ onThemeChanged, isDark = true }) => {
	const onChange = (_, isDarkSet) => {
		onThemeChanged(isDarkSet)
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<FormControlLabel
					control={
						<SwitchTheme
							sx={{ m: 1 }}
							defaultChecked={isDark}
							onChange={onChange}
						/>
					}
					label='MUI switch'
				/>
			</AppBar>
		</Box>
	)
}
export default Header
