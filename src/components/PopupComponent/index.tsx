import React, { CSSProperties } from 'react';
import { Modal } from 'antd';
import styles from './popupComponent.module.css';
import { IDishInterface } from '../../types/dish.interface.ts';

interface IPopupComponentProps {
	isPopupOpen: boolean;
	handleCancel: () => void;
	item: IDishInterface;
}

const modal: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
};

const PopupComponent: React.FC<IPopupComponentProps> = ({ isPopupOpen, handleCancel, item }) => {
	return (
		<>
			<Modal
				style={modal}
				closeIcon={false}
				title={item.name}
				open={isPopupOpen}
				onCancel={handleCancel}
			>
				<div className={styles.popup}>
					<div className={styles.imgWrap} >
					<img className={styles.img} src={item.imageUrl} alt={item.name} />
					</div>
					<div className={styles.ingredientsWrap} >
						<h3 className={styles.ingredient} >Ingredients:</h3>
						<div className={styles.ingredientsList} >{item.ingredients.map(ingredientItem => <p>-{ingredientItem}</p>)}</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default PopupComponent;
