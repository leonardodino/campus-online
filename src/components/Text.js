import styled from 'styled-components'
import {colors, fonts} from '../constants'
import {above} from '../utils/responsive'

const lineHeight = 2

const Text = styled.div`
	font-family: ${fonts.serifText};
	line-height: ${lineHeight};
	margin-bottom: 4rem;
	color: ${colors.base88};
	${above.md`
		font-size: 1.125em;
	`} strong {
		font-weight: bold;
	}

	em {
		font-style: italic;
	}

	* + * {
		margin-top: ${0.5 * lineHeight}em;
	}

	h2,
	h3 {
		margin-top: ${lineHeight}em;
		font-family: ${fonts.sans};
	}

	h2 + h3,
	h3 + h2 {
		margin-top: ${lineHeight}em;
	}

	h2 {
		font-size: 1.5em;
		hyphens: none;
		line-height: ${0.75 * lineHeight};
		color: ${colors.base66};
	}

	h3 {
		hyphens: none;
		font-size: 1.25em;
		font-weight: 600;
		position: relative;
		line-height: ${0.875 * lineHeight};
	}

	a {
		color: currentColor;
		:hover {
			color: ${colors.base};
		}
	}

	blockquote {
		hyphens: none;
		border-left: 1px solid ${colors.base22};
		font-size: 1.125em;
		font-style: italic;
		letter-spacing: -0.25px;
		line-height: ${0.875 * lineHeight};
		color: ${colors.base66};
		padding: 1em 0 1em 1.5em;
		${above.lg`
			margin-left: -1.5em;
		`};
	}

	hr {
		margin: 3em 0;
		border: none;
		height: 1px;
		background: ${colors.base22};
	}

	img {
		width: 100%;
	}

	ul {
		li {
			list-style: circle;
		}
	}
`

export default Text
