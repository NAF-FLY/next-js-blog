export default function BlogPage({ slug }) {
	return <h1>Hello {slug}</h1>
}

export function getServerSideProps({ query: { slug } }) {
	return {
		props: { slug },
	}
}
