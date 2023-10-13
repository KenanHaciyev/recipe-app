import { IDishInterface } from './dish.interface.ts';

export interface IActionsInterface{
	type: string,
	payload: number | IDishInterface
}