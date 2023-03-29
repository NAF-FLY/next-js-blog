import { getBlogPage } from '@/src/contentful'
import styled from '@emotion/styled'
import { Box } from '@mui/system'

import MuiMarkdown from 'mui-markdown'

const MarkdownImage = styled.img`
	max-width: 100%;
`

const overrides = {
	img: ({ alt, src }) => (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<MarkdownImage alt={alt} src={`${src}?q=80&h=600`} />
		</Box>
	),
}

export default function BlogPage({ content, ...props }) {
	return (
		<Box sx={{ maxWidth: '1440px', width: '100%', margin: '0 auto' }}>
			{content.map((item, key) => {
				const contentType = item.sys.contentType.sys.id

				if (contentType === 'paragraph') {
					return (
						<MuiMarkdown overrides={overrides} key={key}>
							{item.fields.text}
						</MuiMarkdown>
					)
				}
				return (
					<span key={key}>
						<br />
						{`Unknown type ${contentType}`}
					</span>
				)
			})}
		</Box>
	)
}

export async function getServerSideProps({ query: { slug } }) {
	const blog = await getBlogPage(slug)
	return {
		props: { ...blog.fields },
	}
}
