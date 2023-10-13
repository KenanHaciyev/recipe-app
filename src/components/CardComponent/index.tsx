import React, { useState } from 'react';
import styles from './cardComponent.module.css';
import heart from '../../assets/icons/heart.svg';
import outlinedHeart from '../../assets/icons/heartOutlined.svg';
import RatingComponent from "../RatingComponent";
import {IDishInterface} from "../../types/dish.interface.ts";
import PopupComponent from "../PopupComponent";

const CardComponent: React.FC<IDishInterface> = (props) => {
	const [isSelected, setIsSelected] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleCancel = () => setIsPopupOpen(false)

	return (
		<div >
			<section className={styles.card} >
                <div  >
                    <img onClick={() => setIsPopupOpen(!isPopupOpen)} className={styles.img} src={props.imageUrl} alt="dish" />
                    <div className={styles.iconBackground}>
                        <img
                            onClick={() => setIsSelected(!isSelected)}
                            src={isSelected ? heart : outlinedHeart}
                            alt="icon"
                            className={styles.favourite}
                        />
                    </div>
                </div>
                <h4 className={styles.matching} >{props.match}% Match</h4>
            </section>
            <RatingComponent name={props.name} rating={props.rating} />
            <PopupComponent item={props} isPopupOpen={isPopupOpen} handleCancel={handleCancel}/>
		</div>
	);
};

export default CardComponent;
