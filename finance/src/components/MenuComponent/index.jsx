import { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';

import MeIcon from '../../assets/avatar.png';
import SenseDataIcon from '../../assets/logo_menu.png';
import { changeText } from '../../services/changeText';
import { exit } from '../../services/authentication';
import { Container } from './styles';

import About from './About';
import Options from './Options';

const MenuComponent = () => {
	const { open,setOpen } = useContext(GlobalStateContext);

	return (
		<Container>
			<header>
				<figure>
					{open.about ? (

						<img className={'myAvatar'} src={MeIcon} alt={'me icon'} />

					) : (
						<article>
							<img src={SenseDataIcon} alt={'senseData'} />
							<h1>SenseData</h1>
						</article>

					)}
				</figure>

			</header>

			<section>{open.about ? <About /> : <Options />}</section>

			<footer>
				<p onClick={() => setOpen({...open,about:!open.about})}>{changeText(open.about, 'Menu', 'Sobre')}</p>
				<p onClick={exit}>Sair</p>
			</footer>
		</Container>
	);
};
export default MenuComponent;
