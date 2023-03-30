import styled from '@emotion/styled'
import MuiMarkdown from 'mui-markdown'

import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const MarkdownImage = styled.img`
	max-width: 100%;
`
const overrides = {
	img: ({ alt, src }) => (
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<MarkdownImage alt={alt} src={`${src}?q=80&h=600`} />
		</Box>
	),
	p: props => (
		<Typography component={'div'} variant='body1' {...props}></Typography>
	),
}

const Paragraph = ({ text }) => {
	return <MuiMarkdown overrides={overrides}>{text}</MuiMarkdown>
}
export default Paragraph
