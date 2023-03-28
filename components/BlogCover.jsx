import { CardActionArea, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link from 'next/link'

const BlogCover = ({ title, description, coverImage, slug }) => {
	const imageUrl = `https:${coverImage.fields.file.url}?q=80&h=200&w=200`

	return (
		<Link href={`/blog/${slug}`} passHref>
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='140'
						image={imageUrl}
						alt={coverImage.fields.description}
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{title}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	)
}

export default BlogCover
