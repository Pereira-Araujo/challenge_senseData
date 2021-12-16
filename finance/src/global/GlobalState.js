import { useState, useEffect } from 'react';
import GlobalStateContext from './GlobalStateContext';
import { getTransactions } from './../services/Api/endpoints';

const GlobalState = (props) => {
	const [ product, setProduct ] = useState([]);

	const [ find, setFind ] = useState('');
	const [ idCode, setIdCode ] = useState('');
	const [ view, setView ] = useState('list');

	const [ open, setOpen ] = useState({
		about:false,
		addModal:false,
		editModal:false,
		inOut:'inflow'
	});

	const [ login, setLogin ] = useState({
		email: '',
		password: ''
	});

	const [ formData, setFormData ] = useState({
		title: '',
		category: '',
		type: '',
		amount: '',
		date: ''
	});

	const [ editFormData, setEditFormData ] = useState({
		title: '',
		category: '',
		type: '',
		amount: '',
		date: ''
	});

	const showTransaction = () => {
		return getTransactions(setProduct);
	};

	useEffect(() => {
		showTransaction();
	}, []);

	const data = {
		login,
		setLogin,
		product,
		find,
		setFind,
		open,
		setOpen,
		formData,
		setFormData,
		editFormData,
		setEditFormData,
		

		idCode,
		setIdCode,
		view,
		setView
	};
	return <GlobalStateContext.Provider value={data}>{props.children}</GlobalStateContext.Provider>;
};
export default GlobalState;
