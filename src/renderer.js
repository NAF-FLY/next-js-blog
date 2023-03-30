import Quote from '@/components/Quote'
import Paragraph from '@/components/UI/Paragraph'

const rendererComponent = (data, key) => {
	const contentType = data.sys.contentType.sys.id

	switch (contentType) {
		case 'paragraph':
			return <Paragraph key={key} {...data.fields} />
		case 'quote':
			return <Quote key={key} {...data.fields} />
		default:
			return <span key={key}>{`Unknown type ${contentType}`}</span>
	}
}
export default rendererComponent
