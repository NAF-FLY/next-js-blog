import { AppBar, Avatar, FormControlLabel } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import SwitchTheme from './UI/SwitchTheme'

const Header = ({ onThemeChanged, isDark = true }) => {
	const onChange = (_, isDarkSet) => {
		onThemeChanged(isDarkSet)
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						maxWidth: '1440px',
						width: '100%',
						margin: '0 auto',
					}}
				>
					<Link href='/' passHref>
						<Avatar alt='Logo' src='../public/next.svg' />
					</Link>
					<FormControlLabel
						control={
							<SwitchTheme
								sx={{ m: 1 }}
								defaultChecked={isDark}
								onChange={onChange}
							/>
						}
					/>
				</Box>
			</AppBar>
		</Box>
	)
}
export default Header
