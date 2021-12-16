import RemoveIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/EditRounded';
import Tooltip from '@mui/material/Tooltip';
import NumberFormat from 'react-number-format';
import { Container, Content, Title, BoxFlex, BoxRight, BoxLeft } from './styles';

const PostCard = ({ thisKey, title, type, category, date, amount, callRemove, callEdit }) => {
	return (
		<Container key={thisKey}>
			<figure>
				<Tooltip title="editar" placement="left-start">
					<EditIcon onClick={callEdit} color="primary" />
				</Tooltip>
				<Tooltip title="apagar" placement="right-start">
					<RemoveIcon onClick={callRemove} color="error" />
				</Tooltip>
			</figure>

			<Content>
				<Title>{title}</Title>
				<BoxFlex>
					{category.toLowerCase() === 'entrada' ? <span className={'inflow'}>{category}</span> : <span className={'outflow'}>{category}</span>}
					<p><NumberFormat value={amount} displayType="text" thousandSeparator={true} thousandsGroupStyle={"thousand"} prefix="R$" /></p>
				</BoxFlex>

				<BoxLeft>
					{type}
				</BoxLeft>
				<BoxRight>
					{date}
				</BoxRight>
			</Content>

		</Container>
	);
};
export default PostCard;

