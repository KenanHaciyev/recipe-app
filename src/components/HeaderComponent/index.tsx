import React from 'react';
import {Layout} from "antd";
import {Header} from "antd/es/layout/layout";
import styles from './headerComponent.module.css'

const HeaderComponent: React.FC = () => {
    return (
        <Layout>
            <Header className={styles.header} >
                <ul className={styles.listItems} >
                    <div className={styles.left} >
                        <li>
                            <a href="#">Logo</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                    </div>
                    <li>
                        <a href="#">Favourites</a>
                    </li>
                </ul>
            </Header>
        </Layout>
    );
};

export default HeaderComponent;
