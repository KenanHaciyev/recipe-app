import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import { Col, Row } from 'antd';

import HeaderComponent from './components/HeaderComponent';
import FavouritesPage from './Layouts/FavouritesPage';
import HomePage from './Layouts/HomePage';
import { AppContext } from './AppContext';
import reducer from './Reducer';

import './App.css';

function App() {
	const navigate = useNavigate();
	const [state, dispatch] = useReducer(reducer, []);

	useEffect(() => navigate('/'), []);

	return (
		<Row justify="center">
			<Col>
				<AppContext.Provider value={{ dispatch, state }}>
					<HeaderComponent />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/favourites" element={<FavouritesPage />} />
					</Routes>
				</AppContext.Provider>
			</Col>
		</Row>
	);
}

export default App;
