import { Typography } from '@mui/material'

const BlogCover = ({ title, description, coverImage }) => (
	<>
		<Typography variant='h4' component='h4'>
			{title}
		</Typography>
		<Typography variant='h5' component='h5'>
			{description}
		</Typography>
		{/* <img src={coverImage.scr} alt={coverImage.altText}/> */}
	</>
)

export default BlogCover
