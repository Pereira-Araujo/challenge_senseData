import { useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import GlobalStateContext from '../../../global/GlobalStateContext';
import Inflow from './Inflow'
import OutFlow from './OutFlow'
import { Container, Content, TopContent, GroupButton } from './styles'

export default function InOutflow({ openProps, callFunction }) {
	const { open, setOpen } = useContext(GlobalStateContext);

	return (
		<Drawer anchor={'right'} open={openProps} onClose={callFunction}>
			<Container>
				<TopContent>
					<h1>ENTRADAS E SAÍDAS</h1>
				</TopContent>
				<Content>
					Aqui estão suas transações, verifique as opções:
					<GroupButton>
						<Button variant="outlined" onClick={()=>setOpen({...open,inOut:'inflow'})} color="primary">Entradas</Button>
						<Button variant="outlined" onClick={()=>setOpen({...open,inOut:'outflow'})} color="error">Saídas</Button>
					</GroupButton>

					<section>
						{open.inOut === 'inflow'? (<Inflow/>) : (<OutFlow/>)}
					</section>
				</Content>
			</Container>
		</Drawer>
	);
}
