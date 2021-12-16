import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStateContext from '../../../global/GlobalStateContext';

import { userLogin } from '../../../services/authentication';
import InputComponent from '../../InputComponent';
import SenseDataIcon from '../../../assets/logo_sensedata.png';
import { FormContainer, LoginButton } from './styles';

const SignInComponent = ({ buttonName }) => {
	const history = useNavigate();

	const { login, setLogin } = useContext(GlobalStateContext);

	const send = (event) => {
		return userLogin(event, history, login);
	};

	return (
		<FormContainer onSubmit={send}>

			<img src={SenseDataIcon} alt={'senseData icon'} />

			<InputComponent
				element={'email'}
				label={'E-mail'}
				value={login.email}
				callFunction={(event) => setLogin({ ...login, email: event.target.value })}
			/>
			<InputComponent
				element={'password'}
				label={'Senha'}
				value={login.password}
				callFunction={(event) => setLogin({ ...login, password: event.target.value })}
				type={'password'}
			/>

			<LoginButton type="submit" fullWidth variant="contained" color="primary">
				{buttonName}
			</LoginButton>
		</FormContainer>
	);
};
export default SignInComponent;
