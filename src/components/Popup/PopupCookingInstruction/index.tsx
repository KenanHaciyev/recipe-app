import React from 'react';
import styles from './popupCookingInstruction.module.css'

const PopupCookingInstruction : React.FC<{cookingInstruction: string[]}>= ({cookingInstruction}) => {
	return (
		<div className={styles.instructionWrap}>
			<h3 className={styles.title}>Cooking instruction:</h3>
			<div className={styles.list}>
				{cookingInstruction.map((instructionItem, i) => {
					return (
						<p className={styles.instructionItem} key={i}>
							{instructionItem}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default PopupCookingInstruction;
