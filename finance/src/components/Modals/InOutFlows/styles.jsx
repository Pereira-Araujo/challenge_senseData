import styled from 'styled-components';

import { colorContrast, colorToGradient } from '../../../styles/colors';

export const Container = styled.main`
	display: flex;
	flex-direction: column;
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
`;
export const Content = styled.div`
width:420px;
padding-top:2rem;
`;

export const GroupButton = styled.section`
margin-top:2rem;
display:flex;
justify-content:space-around;

button{
	
	margin-bottom:2rem;
}

`