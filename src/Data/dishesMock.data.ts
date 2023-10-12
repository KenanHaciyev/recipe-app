import spaghetti from '../assets/images/spaghetti.png';
import alfredo from '../assets/images/alfredo.png';
import beefStir from '../assets/images/beefStir.webp';
import mushroomRisotto from '../assets/images/mushroomRisotto.webp';
import salmon from '../assets/images/salmon.webp';
import vegetables from '../assets/images/vegetables.png';
import lasagna from '../assets/images/lasagna.png';
import pizza from '../assets/images/pizza.webp';
import taco from '../assets/images/taco.png';
import chicken from '../assets/images/chicken.png';

import { IDishInterface } from '../types/dish.interface.ts';

export const dishesMockData: IDishInterface[] = [
	{
		id: 1,
		name: 'Spaghetti Carbonara',
		imageUrl: spaghetti,
		rating: 4.5,
		cookingTime: '20 minutes',
		ingredients: [
			'200g spaghetti',
			'2 large eggs',
			'100g Pecorino Romano cheese',
			'50g guanciale',
			'2 cloves garlic',
			'Salt and black pepper to taste',
		],
		cookingInstruction: [
			'1. Boil the spaghetti according to the package instructions. Drain and set aside.',
			'2. In a bowl, whisk together the eggs and grated Pecorino Romano cheese.',
			'3. In a pan, sauté the guanciale and minced garlic until crispy. Remove from heat.',
			'4. Toss the cooked spaghetti with the egg-cheese mixture and the guanciale. Season with salt and pepper. Serve hot.',
		],
		match: 78,
		servings: 2,
	},
	{
		id: 2,
		name: 'Chicken Alfredo',
		imageUrl: alfredo,
		rating: 4.5,
		cookingTime: '30 minutes',
		ingredients: [
			'2 boneless, skinless chicken breasts',
			'8 oz fettuccine pasta',
			'1 cup heavy cream',
			'1/2 cup grated Parmesan cheese',
			'2 cloves garlic',
			'Salt and pepper to taste',
		],
		cookingInstruction: [
			'1. Season the chicken breasts with salt and pepper, then cook them in a pan until no longer pink inside. Remove from the pan and slice into strips.',
			'2. Cook the fettuccine pasta according to package instructions. Drain and set aside.',
			'3. In the same pan, sauté minced garlic, then add heavy cream and grated Parmesan cheese. Stir until the sauce thickens.',
			'4. Combine the cooked pasta, sliced chicken, and Alfredo sauce. Serve hot.',
		],
		match: 82,
		servings: 4,
	},
	{
		id: 3,
		name: 'Beef Stir-Fry',
		imageUrl: beefStir,
		rating: 4,
		cookingTime: '25 minutes',
		ingredients: [
			'1 lb beef sirloin, thinly sliced',
			'2 cups broccoli florets',
			'1 red bell pepper, sliced',
			'3 cloves garlic',
			'Soy sauce and ginger to taste',
		],
		cookingInstruction: [
			'1. Heat a wok or large skillet over high heat. Add oil and garlic, then stir in the beef and cook until browned. Remove from the pan.',
			'2. In the same pan, stir-fry the broccoli and bell pepper until tender.',
			'3. Return the beef to the pan and season with soy sauce and ginger. Cook for a few more minutes.',
			'4. Serve the beef stir-fry over cooked rice.',
		],
		match: 74,
		servings: 3,
	},
	{
		id: 4,
		name: 'Mushroom Risotto',
		imageUrl: mushroomRisotto,
		rating: 3.5,
		cookingTime: '35 minutes',
		ingredients: [
			'1 cup Arborio rice',
			'8 oz mushrooms, sliced',
			'1/2 cup dry white wine',
			'4 cups chicken broth',
			'1/2 cup grated Parmesan cheese',
		],
		cookingInstruction: [
			'1. In a saucepan, heat the chicken broth and keep it warm.',
			'2. In a separate pan, sauté mushrooms in olive oil until browned. Set aside.',
			'3. In the same pan, add Arborio rice and cook until translucent. Pour in the white wine and cook until absorbed.',
			'4. Gradually add the warm chicken broth, stirring until the rice is creamy. Stir in sautéed mushrooms and Parmesan cheese. Serve hot.',
		],
		match: 70,
		servings: 4,
	},
	{
		id: 5,
		name: 'Salmon with Lemon Butter Sauce',
		imageUrl: salmon,
		rating: 5,
		cookingTime: '25 minutes',
		ingredients: [
			'4 salmon fillets',
			'2 tablespoons butter',
			'2 tablespoons lemon juice',
			'2 cloves garlic',
			'Salt and pepper to taste',
		],
		cookingInstruction: [
			'1. Season the salmon fillets with salt and pepper.',
			'2. In a pan, melt butter and sauté minced garlic until fragrant. Stir in lemon juice.',
			'3. Cook the salmon fillets in the lemon butter sauce until they flake easily with a fork.',
			'4. Serve the salmon with the sauce poured over it.',
		],
		match: 92,
		servings: 4,
	},
	{
		id: 6,
		name: 'Vegetable Curry',
		imageUrl: vegetables,
		rating: 4.5,
		cookingTime: '40 minutes',
		ingredients: [
			'2 cups mixed vegetables',
			'1 can coconut milk',
			'2 tablespoons curry paste',
			'1 cup cooked rice',
		],
		cookingInstruction: [
			'1. In a pot, combine mixed vegetables, coconut milk, and curry paste. Simmer until the vegetables are tender.',
			'2. Serve the vegetable curry over cooked rice.',
		],
		match: 81,
		servings: 3,
	},
	{
		id: 7,
		name: 'Classic Lasagna',
		imageUrl: lasagna,
		rating: 5,
		cookingTime: '60 minutes',
		ingredients: [
			'1 lb ground beef',
			'9 lasagna noodles',
			'1 cup ricotta cheese',
			'2 cups shredded mozzarella cheese',
			'1 jar marinara sauce',
		],
		cookingInstruction: [
			'1. In a pan, brown the ground beef. Drain excess fat.',
			'2. Cook the lasagna noodles according to package instructions. Drain and set aside.',
			'3. In a baking dish, layer lasagna noodles, ground beef, ricotta cheese, mozzarella cheese, and marinara sauce.',
			'4. Repeat the layers and bake in the oven until bubbly and golden.',
		],
		match: 88,
		servings: 6,
	},
	{
		id: 8,
		name: 'Homemade Pizza',
		imageUrl: pizza,
		rating: 4.5,
		cookingTime: '30 minutes',
		ingredients: [
			'Pizza dough',
			'Tomato sauce',
			'Mozzarella cheese',
			'Pepperoni slices',
			'Bell peppers, sliced',
		],
		cookingInstruction: [
			'1. Roll out the pizza dough and spread tomato sauce over it.',
			'2. Sprinkle mozzarella cheese over the sauce and add pepperoni slices and bell peppers.',
			'3. Bake the pizza in a preheated oven until the crust is golden and the cheese is bubbly.',
		],
		match: 94,
		servings: 4,
	},
	{
		id: 9,
		name: 'Grilled Shrimp Tacos',
		imageUrl: taco,
		rating: 4.0,
		cookingTime: '20 minutes',
		ingredients: [
			'1 lb large shrimp',
			'8 small tortillas',
			'Cabbage slaw',
			'Lime crema sauce',
			'Cilantro leaves',
		],
		cookingInstruction: [
			'1. Season the shrimp with your choice of seasonings and grill until cooked through.',
			'2. Warm the tortillas on the grill or in a pan.',
			'3. Assemble the tacos with grilled shrimp, cabbage slaw, lime crema sauce, and cilantro leaves.',
		],
		match: 85,
		servings: 2,
	},
	{
		id: 10,
		name: 'Chicken Breast Sliced',
		imageUrl: chicken,
		rating: 4.5,
		cookingTime: '25 minutes',
		ingredients: [
			'2 chicken breasts, sliced',
			'Salt and pepper to taste',
			'2 cloves garlic, minced',
			'1 tablespoon olive oil',
			'1/2 cup chicken broth',
			'1/4 cup heavy cream',
		],
		cookingInstruction: [
			'1. Season the sliced chicken breasts with salt and pepper.',
			'2. In a pan, heat olive oil and sauté minced garlic until fragrant.',
			'3. Add the seasoned chicken slices and cook until browned and no longer pink inside.',
			'4. Pour in chicken broth and heavy cream. Simmer until the sauce thickens.',
			'5. Serve the sliced chicken with the creamy garlic sauce over it.',
		],
		match: 90,
		servings: 2,
	}
];
