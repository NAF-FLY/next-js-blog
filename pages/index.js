import BlogCover from '@/components/BlogCover'
import { Button, Typography } from '@mui/material'
import Link from 'next/link'

export default function Home() {
	return (
		<main>
			<Typography variant='h1' component='h1'>
				Hello World
			</Typography>
			<BlogCover title='Hello' description='Description' />
		</main>
	)
}
