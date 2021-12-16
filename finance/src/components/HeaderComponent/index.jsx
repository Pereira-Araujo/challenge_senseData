import SearchComponent from "./SearchComponent";
import NumberFormat from 'react-number-format';

import { Container } from './styles';

const HeaderComponent = ({ title, content, callFunction, searchValue,total }) => {
	return (
		<Container>
			<h1>{title}</h1>
			<p>{content}</p>

			<section>
				<article>
					<SearchComponent callFunction={callFunction} searchValue={searchValue} />
				</article>
				<div>TOTAL DE TRANSAÇÕES: <span><NumberFormat value={total} displayType="text" thousandSeparator={true} prefix="R$" /></span></div>
			</section>
		</Container>
	);
};
export default HeaderComponent;
