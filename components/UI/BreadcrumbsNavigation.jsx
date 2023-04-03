import { NavigateNext } from '@mui/icons-material'
import { Breadcrumbs, Link as MUILink, Typography } from '@mui/material'
import Link from 'next/link'

const BreadcrumbsNavigation = ({ breadcrumbs, current }) => {
	return (
		<Breadcrumbs
			aria-label='breadcrumb'
			separator={<NavigateNext fontSize='small' />}
			margin='1.5em 0'
		>
			{breadcrumbs.map(({ href, title }) => (
				<Link
					href={href}
					passHref
					style={{ color: 'inherit' }}
					legacyBehavior
					key={title}
				>
					<MUILink underline='hover' color='inherit' href='/'>
						{title}
					</MUILink>
				</Link>
			))}
			<Typography color='text.primary'>{current}</Typography>
		</Breadcrumbs>
	)
}
export default BreadcrumbsNavigation
