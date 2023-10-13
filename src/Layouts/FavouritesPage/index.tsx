import CardComponent from '../../components/CardComponent';
import { AppContext } from '../../AppContext';

import styles from './favouritesPage.module.css';
import React, { useContext } from 'react';

const FavouritesPage: React.FC = () => {
	const context = useContext(AppContext);
	return (
		<>
			{!context!.state.length ? (
				<h3 className={styles.title}>Cart is Empty</h3>
			) : (
				<h2 className={styles.title}>Cart</h2>
			)}
			<div className={styles.wrapper}>
				<div className={styles.cards}>
					{context!.state.map(data => {
						return <CardComponent key={data.id} {...data} />;
					})}
				</div>
			</div>
		</>

	);
};

export default FavouritesPage;
