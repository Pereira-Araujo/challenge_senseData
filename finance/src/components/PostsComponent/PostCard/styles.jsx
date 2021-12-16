import styled from 'styled-components';
import { lightGrey, white, mostLightGrey, colorToGradient, inflow, outflow } from '../../../styles/colors';

export const Container = styled.main`
	color: ${colorToGradient};
	height: 18rem;
	width: 14rem;
	margin: 14px;
	margin-left: 2rem;
	background: ${white};
	box-shadow: 0 0 10px ${lightGrey};
	transition: transform 100mx ease-in-out;

	&:hover {
		transform: scale(1.05);
	}

	figure {
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		cursor: pointer;

		:first-child :hover {
			background: ${mostLightGrey};
			border-radius: 100%;
		}
	}

`;

export const Content = styled.section`
	height:14rem;
	padding:0 1rem 0 1rem;
	display:flex;
	flex-direction:column;
	justify-content:space-evenly;
	
	.inflow{
		color:${inflow};
	}

	.outflow{
		color:${outflow};

	}
`
export const BoxFlex = styled.div`
display:flex;
justify-content:space-between;
font-weight:bold;
`

export const BoxLeft = styled.div`


`

export const BoxRight = styled.div`
display:flex;
justify-content:end;
`


export const Title = styled.p`
font-weight:bold;
font-size:20px;
`