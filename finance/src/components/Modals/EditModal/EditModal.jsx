
import Drawer from '@mui/material/Drawer';
import EditForm from '../Forms/EditForm/EditForm'

export default function EditModal({ open, callFunction, id }) {
	return (
		<Drawer anchor={'right'} open={open} onClose={callFunction}>
			<EditForm id={id} />
		</Drawer>
	);
}
