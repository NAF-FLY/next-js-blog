import { Button, Typography } from '@mui/material'
import Link from 'next/link'

export default function About() {
	return (
		<>
			<Typography variant='h1' component='h1'>
				This is About
			</Typography>
			<Link href='/' passHref>
				<Button variant='outlined'>back home</Button>
			</Link>
		</>
	)
}
