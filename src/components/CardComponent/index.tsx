import { ADD_TO_FAVOURITES, DELETE_FROM_FAVOURITES } from '../../constants/reducer.constants.ts';
import outlinedHeart from '../../assets/icons/heartOutlined.svg';
import { IDishInterface } from '../../types/dish.interface.ts';
import heart from '../../assets/icons/heart.svg';
import RatingComponent from '../RatingComponent';
import PopupComponent from '../Popup/PopupComponent';
import { AppContext } from '../../AppContext';

import React, { useContext, useEffect, useState } from 'react';

import styles from './cardComponent.module.css';

const CardComponent: React.FC<IDishInterface> = dishItem => {
	const context = useContext(AppContext);
	const [isSelected, setIsSelected] = useState(false);
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const closePopup = () => setIsPopupOpen(false);

	useEffect(() => {
		if (context) {
			const { state } = context;
			const isFavorite = state.find(dish => dish.id === dishItem.id);
			isFavorite && setIsSelected(true);
		}
	}, [dishItem.id]);

	const toggleFavourite = () => {
		setIsSelected(!isSelected);

		if (context && context.state.find(dish => dish.id === dishItem.id)) {
			context.dispatch({ type: DELETE_FROM_FAVOURITES, payload: dishItem.id });
		} else {
			context!.dispatch({ type: ADD_TO_FAVOURITES, payload: dishItem });
		}
	};

	return (
		<div>
			<section className={styles.card}>
				<div>
					<img
						onClick={() => setIsPopupOpen(!isPopupOpen)}
						className={styles.img}
						src={dishItem.imageUrl}
						alt="dish"
					/>
					<div className={styles.iconBackground}>
						<img
							onClick={() => toggleFavourite()}
							src={isSelected ? heart : outlinedHeart}
							alt="icon"
							className={styles.favourite}
						/>
					</div>
				</div>
				<h4 className={styles.matching}>{dishItem.match}% Match</h4>
			</section>
			<RatingComponent name={dishItem.name} rating={dishItem.rating} />
			<PopupComponent item={dishItem} isPopupOpen={isPopupOpen} closePopup={closePopup} />
		</div>
	);
};

export default CardComponent;
