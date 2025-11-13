import { Router } from 'express';
import { getRecipes, getRandomRecipes, getRecipeDetails } from './controllers/recipesController';
import { addFavorite, getFavorites, deleteFavorite } from './controllers/favoritesController';
import 'dotenv/config';
import { ApiKeiValidator } from './validators/apiKeyValidator';
import { IdValidator, IngredientsValidator, RecipeValidator } from './validators/recipesValidator';

const router = Router();
// Recipes
router.get('/recipes', IngredientsValidator,ApiKeiValidator, getRecipes);
router.get('/recipes/random',ApiKeiValidator, getRandomRecipes);
router.get('/recipes/:id',IdValidator, getRecipeDetails);

// Favorites
router.post('/favorites',RecipeValidator, addFavorite);
router.get('/favorites', getFavorites);
router.delete('/favorites/:id',IdValidator, deleteFavorite);

// Testing 🧪
router.get('/', (req, res)=>{res.status(200).json('It is alive! 🧟')});

export default router;
