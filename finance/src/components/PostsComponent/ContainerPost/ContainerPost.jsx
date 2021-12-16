
import { useContext } from 'react';
import GlobalStateContext from '../../../global/GlobalStateContext';
import PostCard from '../../PostsComponent/PostCard/PostCard';
import EditModal from '../../Modals/EditModal/EditModal';
import { Container } from './styles';
import { delTransaction } from '../../../services/Api/endpoints';

export const ContainerPost = ({ posts }) => {
	const { open, setOpen, idCode, setIdCode } = useContext(GlobalStateContext);

	const removeProduct = (id) => {
		return delTransaction(id)
	};

	const openModal = (id) => {
		setIdCode(id);
		setOpen({...open, editModal:true});
	};
	return (
		<Container>
			<EditModal open={open.editModal} thisId={idCode} callFunction={() => setOpen({ ...open, editModal: false })} />
			{posts.map((post) => {
				return (
					<PostCard
					    key={post.id}
						callRemove={() => removeProduct(post.id)}
						callEdit={() => openModal(post.id)}
						thisKey={post.id}
						title={post.title.toUpperCase()}
						type={post.type.toUpperCase()}
						category={post.category.toUpperCase()}
						amount={post.amount.toUpperCase()}
						date={post.date.toUpperCase()}
					/>
				);
			})}
		</Container>
	);
};
export default ContainerPost;
