import { dishesMockData } from '../../Data/dishesMock.data.ts';
import CardComponent from '../../components/CardComponent';
import styles from './homePage.module.css';
import React from 'react';

const HomePage: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.cards}>
				{dishesMockData.map(data => {
					return <CardComponent key={data.id} {...data} />;
				})}
			</div>
		</div>
	);
};

export default HomePage;
