import React, { Dispatch } from 'react';
import { IDishInterface } from '../types/dish.interface.ts';
import { IActionsInterface } from '../types/actions.interface.ts';

interface FavoritesTypes {
	dispatch: Dispatch<IActionsInterface>,
	state: IDishInterface[]
}

export const AppContext = React.createContext<FavoritesTypes | null>(null);
