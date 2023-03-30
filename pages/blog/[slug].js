import { getBlogPage } from '@/src/contentful'
import { Box } from '@mui/system'

import rendererComponent from '@/src/renderer'

export default function BlogPage({ content }) {
	return (
		<Box sx={{ maxWidth: '1440px', width: '100%', margin: '0 auto' }}>
			{content.map((item, key) => rendererComponent(item, key))}
		</Box>
	)
}

export async function getServerSideProps({ query: { slug } }) {
	const blog = await getBlogPage(slug)
	return {
		props: { ...blog.fields },
	}
}
