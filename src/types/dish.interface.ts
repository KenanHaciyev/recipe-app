export interface IDishInterface {
    id: number;
    name: string;
    imageUrl: string;
    rating: number;
    cookingTime: string;
    ingredients: string[];
    cookingInstruction: string[];
    match: number;
    servings: number;
}