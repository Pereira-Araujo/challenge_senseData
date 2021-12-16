import { useState, useContext, useEffect } from 'react';
import GlobalStateContext from '../../../../global/GlobalStateContext';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { getTransactionName, patchTransaction } from '../../../../services/Api/endpoints';

import { Container, Input, Content, TopContent, FormColumns, FormStart, Action,OptionsSelect } from './styles';

const EditForm = () => {
	const { editFormData, setEditFormData, idCode, product } = useContext(GlobalStateContext);
	const [transactionName, setTransactionName] = useState('');

	const getName = (id) => setTransactionName(getTransactionName(id, product));

	const editTransaction = (id) => {
		const objProduct = product.filter((item) => item.id === id);

		const body = {
			title: editFormData.title.length > 0 ? editFormData.title : objProduct[0].title,
			type: editFormData.type.length > 0 ? editFormData.type : objProduct[0].type,
			category: editFormData.category.length > 0 ? editFormData.category : objProduct[0].category,
			amount: editFormData.amount.length > 0 ? editFormData.amount : objProduct[0].amount,
			date: editFormData.date.length > 0 ? editFormData.date : objProduct[0].date
		};
		if (editFormData.title.length !== 0
			|| editFormData.type.length !== 0
			|| editFormData.category.length !== 0
			|| editFormData.amount.length !== 0) {

			return patchTransaction(id, body);
		} else {
			alert('Houve algum erro')
		}
	}

	useEffect(() => {
		getName(idCode);
	});
	return (
		<Container>
			<TopContent>
				<h1>{transactionName}</h1>
			</TopContent>

			<Content>
				<Input
					required
					label="Titulo"
					variant="outlined"
					value={editFormData.title}
					onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
				/>

				<FormColumns>
					<Input
						required
						label="Tipo"
						variant="outlined"
						value={editFormData.type}
						onChange={(e) => setEditFormData({ ...editFormData, type: e.target.value })}
					/>
						< FormControl>
						<InputLabel>Categoria *</InputLabel>
						<OptionsSelect
							label="Categoria"
							value={editFormData.category}
							onChange={(e) => setEditFormData({ ...editFormData, category: e.target.value })}
						>
							<MenuItem value={'entrada'}>Entrada</MenuItem>
							<MenuItem value={'saida'}>Saída</MenuItem>
						</OptionsSelect>
					</FormControl>
				</FormColumns>
				<Input
					required
					label="Valor"
					variant="outlined"
					value={editFormData.amount}
					onChange={(e) => setEditFormData({ ...editFormData, amount: e.target.value })}
				/>
				<FormStart>

				</FormStart>
			</Content>
			<Action>
				<Button variant="contained" onClick={() => editTransaction(idCode)}>
					Editar
				</Button>
			</Action>
		</Container>
	);
};

export default EditForm;
