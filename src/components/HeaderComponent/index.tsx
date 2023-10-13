import React from 'react';
import { Layout, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';
import { items } from '../../Data/headerItems.data.ts';

const HeaderComponent: React.FC = () => {
	return (
		<Layout>
			<Header>
				<Menu style={{ width: '25%' }} theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
					{items.map((item, i) => {
						return (
							<Menu.Item key={i}>
								{<Link to={item.url} />}
								{item.title}
							</Menu.Item>
						);
					})}
				</Menu>
			</Header>
		</Layout>
	);
};

export default HeaderComponent;
