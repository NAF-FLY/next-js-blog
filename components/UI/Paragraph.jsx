import styled from '@emotion/styled'
import MuiMarkdown from 'mui-markdown'

import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const MarkdownImage = styled.img`
	max-width: 100%;
`
const overrides = {
	img: ({ alt, src }) => (
		<Box sx={{ display: 'flex', justifyContent: 'center' }} margin={'2em 0'}>
			<MarkdownImage alt={alt} src={`${src}?q=80&h=600`} />
		</Box>
	),
	p: props => <Typography component={'div'} variant='body1' {...props} />,
	h1: props => (
		<Typography
			component={'h1'}
			variant='h1'
			{...props}
			textAlign='center'
			marginBottom={'.5em'}
		/>
	),
	h2: props => (
		<Typography
			component={'h2'}
			variant='h2'
			{...props}
			textAlign='center'
			marginBottom={'.5em'}
		/>
	),
	h3: props => (
		<Typography
			component={'h3'}
			variant='h3'
			{...props}
			textAlign='center'
			marginBottom={'.5em'}
		/>
	),
}

const Paragraph = ({ text }) => {
	return <MuiMarkdown overrides={overrides}>{text}</MuiMarkdown>
}
export default Paragraph
