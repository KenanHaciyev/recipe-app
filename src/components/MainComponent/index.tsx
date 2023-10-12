import React from 'react';
import CardComponent from "../CardComponent";
import styles from './mainComponent.module.css'
import {dishesMockData} from "../../Data/dishesMock.data.ts";

const MainComponent: React.FC = () => {
    return (
        <div className={styles.wrapper} >
           <div className={styles.cards} >
               {
                   dishesMockData.map((data, i) => {
                       return <CardComponent key={i} {...data} />
                   })
               }
           </div>
        </div>
    );
};

export default MainComponent;
