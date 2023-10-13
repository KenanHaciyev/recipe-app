import { ADD_TO_FAVOURITES, DELETE_FROM_FAVOURITES } from '../constants/reducer.constants.ts';
import { IActionsInterface } from '../types/actions.interface.ts';
import { IDishInterface } from '../types/dish.interface.ts';

export default function (state: IDishInterface[], action: IActionsInterface ) {
	switch (action.type) {
		case ADD_TO_FAVOURITES:
			return [...state, action.payload] as IDishInterface[];

		case DELETE_FROM_FAVOURITES: {
			const refreshedDishes = state.filter((dish: IDishInterface) => dish.id !== action.payload);
			return [...refreshedDishes] as IDishInterface[];
		}

		default:
			return state;
	}
}
