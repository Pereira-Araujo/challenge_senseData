import styled from 'styled-components';
import { colorDefault, lightGrey } from '../../../styles/colors';

export const SearchInput = styled.input`
	height: 1.5rem;
	width: 22rem;
	height: 1.8rem;
	border: ${lightGrey} 1px solid;
	padding: 4px;
	border-radius: 6px;
	color: ${colorDefault};

	font-family: 'Nunito', sans-serif;
		font-weight: 600;
	letter-spacing: 2px;

	::-webkit-input-placeholder {
		font-weight: 500;
		color: ${lightGrey};
		letter-spacing: 1px;
	}

	:focus {
		outline: none;
		box-shadow: none;
	}
`;
