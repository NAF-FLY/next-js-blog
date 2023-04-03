import styled from '@emotion/styled'

export const BlogGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin: 1em auto;
	gap: 0.5em;
	max-width: 90%;
	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 1em;
		width: 100%;
	}
	@media (min-width: 1000px) {
		grid-template-columns: repeat(4, 1fr);
		width: 100%;
		max-width: 1440px;
	}
`
