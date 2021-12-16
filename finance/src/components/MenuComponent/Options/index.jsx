import { useContext } from 'react';
import AddModal from '../../../components/Modals/AddModal/AddModal';
import InOutflow from '../../Modals/InOutFlows/InOutFlow'
import GlobalStateContext from '../../../global/GlobalStateContext';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Arrows from '@mui/icons-material/CompareArrowsOutlined';
 import CalendarViewDayOutlinedIcon from '@mui/icons-material/CalendarViewDayOutlined';
import { OptionsList } from './styles';

const Options = () => {

	const { setView, open, setOpen } = useContext(GlobalStateContext);

	return (
		<main>
			<AddModal open={open.addModal} callFunction={() => setOpen({ ...open, addModal: false })} />

			<InOutflow openProps={open.inflow} callFunction={() => setOpen({ ...open, inflow: false })} />


			<OptionsList>
				<li onClick={() => setOpen({ ...open, addModal: true })}>
					<AddBoxOutlinedIcon />NOVO
				</li>

				<li onClick={() => setOpen({ ...open, inflow: true })}>
					<Arrows />ENTRADAS/SAÍDAS
				</li>

				<li onClick={() => setView('grid')}>
					<GridViewOutlinedIcon />CARDS
				</li>

				<li onClick={() => setView('list')}>
					<CalendarViewDayOutlinedIcon />LISTA
				</li>

			</OptionsList>
		</main>
	);
};

export default Options;
