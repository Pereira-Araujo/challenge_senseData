import Drawer from '@mui/material/Drawer';
import AddForm from '../Forms/AddForm/AddForm'

export default function AddModal({ open, callFunction, thisId }) {
	return (
		<Drawer anchor={'right'} open={open} onClose={callFunction}>
			<AddForm thisId={thisId} />
		</Drawer>
	);
}
