import { useContext } from 'react';
import Button from '@mui/material/Button';
import GlobalStateContext from '../../../../global/GlobalStateContext';
import { postTransaction } from '../../../../services/Api/endpoints';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import moment from 'moment'

import { Container, Input, Content, TopContent, FormColumns, FormStart, Action, OptionsSelect } from './styles';


const AddForm = () => {
	const { formData, setFormData } = useContext(GlobalStateContext);

	const newTransaction = () => {
		const body = {
			title: formData.title,
			type: formData.type,
			category: formData.category,
			amount: formData.amount,
			date: moment().format('DD/MM/YY')
		};
		if (formData.title.length !== 0
			&& formData.type.length !== 0
			&& formData.category.length !== 0
			&& formData.amount.length !== 0) {
			return postTransaction(body);
		}else{
			alert('Houve algum erro')
		}


	};

	return (
		<Container>
			<TopContent>
				<h1>Nova Transação</h1>
			</TopContent>

			<Content>
				<Input
					required
					label="Titulo "
					variant="outlined"
					value={formData.title}
					onChange={(e) => setFormData({ ...formData, title: e.target.value })}
				/>
				<FormColumns>

					<Input
						required
						label="Tipo"
						variant="outlined"
						value={formData.type}
						onChange={(e) => setFormData({ ...formData, type: e.target.value })}
					/>
					< FormControl>
						<InputLabel>Categoria *</InputLabel>
						<OptionsSelect
							label="Categoria"
							value={formData.category}
							onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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
					value={formData.amount}
					onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
				/>
				<FormStart>

				</FormStart>
			</Content>
			<Action>
				<Button variant="contained" onClick={newTransaction}>
					Adicionar
				</Button>
			</Action>
		</Container>
	);
};

export default AddForm;
