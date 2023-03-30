import styled from '@emotion/styled'
import { AutoStories } from '@mui/icons-material'
import { Alert, AlertTitle } from '@mui/material'

const QuoteComponent = styled(Alert)`
	.MuiAlert-message {
		width: 100%;
		text-align: center;
	}
`

const Quote = ({ quote, author }) => {
	return (
		<QuoteComponent severity='info' icon={<AutoStories fontSize='inherit' />}>
			<AlertTitle>{quote}</AlertTitle>
			author - <strong>{author}</strong>
		</QuoteComponent>
	)
}
export default Quote
