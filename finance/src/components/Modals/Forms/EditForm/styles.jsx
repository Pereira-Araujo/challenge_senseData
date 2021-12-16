import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';

import { colorContrast, colorToGradient } from '../../../../styles/colors';

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	font-family: 'Noto Sans', sans-serif;
	text-align: center;
	width: 500px;
	height: 100vh;
	color: ${colorToGradient};
`;

export const TopContent = styled.header`
	width: 100%;
	height: 24vh;
	background: ${colorContrast};
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bolder;

	text-transform:capitalize;
`;
export const Content = styled.div`
	margin-top: -4rem;

	height: 40vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const FormColumns = styled.section`
	display: flex;
	justify-content: space-between;

	input {
		max-width: 164px;
	}
`;

export const OptionsSelect = styled(Select)`
min-width:164px;

`


export const FormStart = styled.section`
	width: 400px;
	display: flex;
	align-items: flex-start;

	input {
		max-width: 164px;
	}
`;
export const Input = styled(TextField)`

  @media (max-width: 450px) {
    margin-bottom: 8rem;
  }
`;
export const Action = styled.footer`
	width: 400px;
	height: 10vh;
	display: flex;
	justify-content: flex-end;

	button {
		margin-bottom: 2rem;
	}
`;
