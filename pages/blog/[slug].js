import { getBlogPage } from '@/src/contentful'
import { Box } from '@mui/system'

import rendererComponent from '@/src/renderer'
import BreadcrumbsNavigation from '@/components/UI/BreadcrumbsNavigation'

export default function BlogPage({ content, title }) {
	return (
		<Box sx={{ maxWidth: '1440px', width: '100%', margin: '0 auto' }}>
			<BreadcrumbsNavigation
				breadcrumbs={[
					{ title: 'Home', href: '/' },
					{ title: 'Blog', href: '/blog' },
				]}
				current={title}
			/>
			{content.map((item, key) => rendererComponent(item, key))}
		</Box>
	)
}

export async function getServerSideProps({ query: { slug } }) {
	const blog = await getBlogPage(slug)
	return {
		props: { ...blog.fields},
	}
}
