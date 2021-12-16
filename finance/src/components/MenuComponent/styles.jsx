import styled from 'styled-components';
import { colorToGradient, colorContrast, white } from '../../styles/colors';

export const Container = styled.main`
	background-image: ${colorContrast};
	width: 16vw;
	height: 92vh;
	padding: 2rem 0.5rem 0;
	border-radius: 1%;
	margin: 1rem 0 0 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	color: ${colorToGradient};
	font-weight: bolder;

	figure {
		background: ${colorToGradient};
		width: 6rem;
		height: 6rem;
		padding: 2%;
		border-radius: 50%;

		
		img {
			width: 6rem;
			height: 6rem;
		}
		.myAvatar {
			border-radius: 50%;
			animation-name: showAbout;
			animation-duration: 4s;
			animation-fill-mode: forwards;
		}
	}

	section {
		span {
			font-weight: bolder;
			cursor: pointer;
			font-size: 18px;
			&:hover {
				color: white;
			}
		}

		article {
			margin-top: 4rem;
			width: 14rem;
			height: 14rem;
			letter-spacing: 1px;
			animation-name: showAbout;
			animation-duration: 4s;
			animation-fill-mode: forwards;
			position: relative;

			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		b {
			color: ${white};
			cursor: pointer;
		}
		a {
			text-decoration: none;
			color: ${colorToGradient};
		}

		div {
			display: flex;
			justify-content: space-between;
		}
	}

	@keyframes showAbout {
		0% {
			opacity: 0;
			bottom: 0px;
		}
		50% {
			opacity: 50%;
		}
		100% {
			opacity: 100%;
			bottom: 140px;
		}
	}

	footer {
		height: 4rem;
		width: 14rem;
		display: flex;
		justify-content: space-between;
		cursor: pointer;

		p {
			&:hover {
				color: ${white};
			}
		}
	}
`;
