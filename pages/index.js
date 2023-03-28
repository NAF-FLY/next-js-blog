import { getBlogPages } from '@/src/contentful'
import { Typography } from '@mui/material'

import BlogCover from '@/components/BlogCover'

export default function Home({ blogs }) {
	return (
		<main>
			<Typography variant='h1' component='h1'>
				Hello World
			</Typography>

			{blogs && blogs.map((blog, i) => <BlogCover key={i} {...blog.fields} />)}
		</main>
	)
}

export async function getServerSideProps() {
	const blogPages = await getBlogPages()
	return {
		props: { blogs: blogPages },
	}
}
