import React from 'react';
import styles from './popupIngredients.module.css';

const PopupIngredients : React.FC<{ingredients: string[]}>= ({ingredients}) => {
	return (
		<div className={styles.ingredientsWrap}>
			<h3 className={styles.title}>Ingredients:</h3>
			<div className={styles.list}>
				{ingredients.map((ingredientItem: string, i: number) => (
					<p key={i}>-{ingredientItem}</p>
				))}
			</div>
		</div>
	);
};

export default PopupIngredients;
