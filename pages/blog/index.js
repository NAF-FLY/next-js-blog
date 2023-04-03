import BlogCover from '@/components/BlogCover'
import { BlogGrid } from '@/components/UI/BlogGrid'
import BreadcrumbsNavigation from '@/components/UI/BreadcrumbsNavigation'
import { getBlogPages } from '@/src/contentful'
import { Box } from '@mui/material'

export default function Home({ blogs }) {
	return (
		<Box maxWidth={'1440px'} margin='auto'>
			<BreadcrumbsNavigation
				breadcrumbs={[{ title: 'Home', href: '/' }]}
				current='Blog'
			/>
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
