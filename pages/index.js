import { Typography } from '@mui/material'
import { getBlogPage } from '@/src/contentful'

import BlogCover from '@/components/BlogCover'

export default function Home(props) {
	return (
		<main>
			<Typography variant='h1' component='h1'>
				Hello World
			</Typography>
			<BlogCover {...props} />
		</main>
	)
}

export async function getServerSideProps() {
	const blogPage = await getBlogPage('my-first-blog-page')
	return {
		props: { ...blogPage.fields },
	}
}
