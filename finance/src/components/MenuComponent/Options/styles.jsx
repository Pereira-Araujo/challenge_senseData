import styled from 'styled-components';

export const OptionsList = styled.ul`
	margin-top: 4rem;
	height: 12rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	animation-name: showOptions;
	animation-duration: 4s;
	animation-fill-mode: forwards;
	position: relative;

	li {
		width: 12rem;
		margin-top: 1.5rem;
		cursor: pointer;
		padding-bottom:0.5rem;
		border-bottom: 1px solid #95bdfa;

		display:flex;
		justify-content:space-between;
	}
	li:hover{
		color:white;
	}

	@keyframes showOptions {
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
`;
