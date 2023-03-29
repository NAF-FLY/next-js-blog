import { getBlogPages } from '@/src/contentful'
import { Box } from '@mui/material'

import BlogCover from '@/components/BlogCover'
import { BlogGrid } from '@/components/UI/BlogGrid'

export default function Home({ blogs }) {
	return (
		<Box>
			<BlogGrid>
				{blogs &&
					blogs.map((blog, i) => <BlogCover key={i} {...blog.fields} />)}
			</BlogGrid>
		</Box>
	)
}

export async function getServerSideProps() {
	const blogPages = await getBlogPages()
	return {
		props: { blogs: blogPages },
	}
}
