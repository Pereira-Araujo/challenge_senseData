import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	height: 100vh;
	overflow-y: hidden;

	div {
		overflow: scroll;
		overflow-x: hidden;
		::-webkit-scrollbar {
			width: 0;
			background: transparent;
		}
	}
`;

export const HomePosts = styled.div`
	overflow: hidden;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;
