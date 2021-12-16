import { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';

import Header from './Header/Header';
import Rows from './Rows/Rows';

import EditModal from '../Modals/EditModal/EditModal';
import { delTransaction } from '../../services/Api/endpoints';

import { Container } from './styles';


const TableComponent = ({ data }) => {
	const { open, setOpen, idCode, setIdCode } = useContext(GlobalStateContext);
	const removeTransaction = (id) => {
		return delTransaction(id);
	};

	const openModal = (id) => {
		setIdCode(id);
		setOpen({...open, editModal:true});
	};
	const title = ['CATEGORIA','VALOR',  'TIPO', 'TITULO', 'DATA', 'EDITAR', 'APAGAR'];

	return (
		<Container>
			<EditModal open={open.editModal} thisId={idCode} callFunction={() => setOpen({...open,editModal:false})} />

			<table>
				<Header keys={title} />
				<tbody>
					{data.map((line) => (
						<Rows
						    key={line.id}
							info={line.id}
							amount={line.amount}
							category={line.category}
							title={line.title}
							type={line.type}
							date={line.date}
							callEdit={() => openModal(line.id)}
							callRemove={() => removeTransaction(line.id)}
						/>
					))}
				</tbody>
			</table>
		</Container>
	);
};
export default TableComponent;
