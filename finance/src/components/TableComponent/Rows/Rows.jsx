import RemoveIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/EditRounded';
import { TextTable } from './styles';
import NumberFormat from 'react-number-format';
import Tooltip from '@mui/material/Tooltip';

const Rows = ({ info, callEdit, callRemove, amount, category, title, type, date }) => {
	return (
		<tr key={info}>
			<TextTable>{category.toLowerCase() === 'entrada' ? <span className={'inflow'}>{category.toUpperCase()}</span> : <span className={'outflow'}>{category.toUpperCase()}</span>} </TextTable>

			<TextTable ><NumberFormat className={'amount'} value={amount} displayType="text" thousandSeparator={true} prefix="R$" /></TextTable>
			<TextTable>{type.toUpperCase()} </TextTable>
			<TextTable>
				{title.toUpperCase()}
			</TextTable>
			<TextTable>
				{date.toUpperCase()}
			</TextTable>

			<TextTable>
				<Tooltip title="editar" placement="right-start">
					<EditIcon onClick={callEdit} color="primary" />
				</Tooltip>
			</TextTable>
			<TextTable>
				<Tooltip title="apagar" placement="right-start">
					<RemoveIcon onClick={callRemove} color="error" />
				</Tooltip>
			</TextTable>
		</tr>
	);
};
export default Rows;
