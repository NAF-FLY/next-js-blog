import { NavigateNext } from '@mui/icons-material'
import {
	Autocomplete,
	Breadcrumbs,
	Link as MUILink,
	TextField,
	Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import { useState } from 'react'

const BreadcrumbsNavigation = ({ breadcrumbs, current }) => {
	const [data, setData] = useState([])

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'row' },
				alignItems: { sm: 'center', xs: 'start' },
			}}
		>
			<Breadcrumbs
				aria-label='breadcrumb'
				separator={<NavigateNext fontSize='small' />}
				margin='1.5em 0'
			>
				{breadcrumbs.map(({ href, title }) => (
					<Link
						href={href}
						passHref
						style={{ color: 'inherit' }}
						legacyBehavior
						key={title}
					>
						<MUILink underline='hover' color='inherit' href='/'>
							{title}
						</MUILink>
					</Link>
				))}
				<Typography color='text.primary'>{current}</Typography>
			</Breadcrumbs>
			<Autocomplete
				id='free-solo-demo'
				freeSolo
				sx={{
					marginLeft: 'auto',
					minWidth: '300px',
					maxWidth: '100%',
					width: { xs: '100%', sm: 'auto' },
					marginRight: { xs: 'auto', sm: 0 },
				}}
				options={data.map(option => option.title)}
				renderInput={params => <TextField {...params} label='Search article' />}
			/>
		</Box>
	)
}
export default BreadcrumbsNavigation
