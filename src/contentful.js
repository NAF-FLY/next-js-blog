const contentful = require('contentful')
const client = contentful.createClient({
	// This is the space ID. A space is like a project folder in Contentful terms
	space: 'ih9um2415wu7',
	// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
	accessToken: '6yesc_5hr8FPzPbZVkUeYtfPEaDKG4EQyedybOSz_Dg',
})

export function getBlogPage(slug) {
	return client
		.getEntries({ 'fields.slug': slug, content_type: 'blogPage', include: 3 })
		.then(resp => resp.items[0])
		.catch(err => console.log(err))
}
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
export function getBlogPages() {
	return client
		.getEntries({ content_type: 'blogPage', include: 3 })
		.then(resp => resp.items)
		.catch(err => console.log(err))
}

export function searchBlogPages(query = 'undefined undefined') {
	return client
		.getEntries({ content_type: 'blogPage', include: 3, query })
		.then(resp => resp.items)
		.catch(err => console.log(err))
}
