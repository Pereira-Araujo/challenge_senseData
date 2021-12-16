import styled from 'styled-components';
import { mostLightGrey,inflow,outflow } from '../../../styles/colors';
import  {colorToGradient} from '../../../styles/colors'
export const TextTable = styled.td`
	color: ${colorToGradient};

	&:hover {
		background: ${mostLightGrey};
	}

	.inflow{
		color:${inflow};
		font-weight:bold;

	}

	.outflow{
		color:${outflow};
		font-weight:bold;

	}

	.amount{
		font-weight:bolder;

	}


`;
