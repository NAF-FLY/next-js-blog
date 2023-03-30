import rendererComponent from '@/src/renderer'
import styled from '@emotion/styled'
import { Box } from '@mui/system'

const LeftRightImage = styled.img`
	max-width: 100%;
`

const LeftRight = ({ left, right, image }) => {
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr',
				gap: 2,
				marginTop: 4,
				alignItems: 'center',
			}}
		>
			{left ? rendererComponent(left) : ''}
			<LeftRightImage
				src={`https:${image.fields.file.url}?q=80`}
				alt={image.fields.description}
			/>
			{right ? rendererComponent(right) : ''}
		</Box>
	)
}
export default LeftRight
