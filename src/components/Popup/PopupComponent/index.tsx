import { IDishInterface } from '../../../types/dish.interface.ts';
import PopupCookingInstruction from '../PopupCookingInstruction';
import RatingComponent from '../../RatingComponent';
import React, { CSSProperties } from 'react';
import PopupIngredients from '../PopupIngredients';

import styles from './popupComponent.module.css';

import { Modal } from 'antd';

interface IPopupComponentProps {
	isPopupOpen: boolean;
	closePopup: () => void;
	item: IDishInterface;
}

const modal: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
};

const PopupComponent: React.FC<IPopupComponentProps> = ({ isPopupOpen, closePopup, item }) => {
	return (
		<Modal style={modal} closeIcon={false} open={isPopupOpen} onCancel={closePopup}>
			<div className={styles.popup}>
				<div className={styles.imgWrap}>
					<img className={styles.img} src={item.imageUrl} alt={item.name} />
				</div>
				<RatingComponent name={item.name} rating={item.rating} />
				<PopupIngredients ingredients={item.ingredients} />
				<PopupCookingInstruction cookingInstruction={item.cookingInstruction} />
				<div className={styles.details}>
					<p>Cooking time: {item.cookingTime}</p>
					<p>Serving for: {item.servings} person</p>
				</div>
			</div>
		</Modal>
	);
};

export default PopupComponent;
