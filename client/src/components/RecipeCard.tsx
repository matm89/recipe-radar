import { Star, Clock, Flame } from 'lucide-react';
import type { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  console.log(recipe);
  return (
    <div className="min-w-[500px] bg-white rounded-2xl shadow-lg hover:shadow-lg transition overflow-hidden group hover:cursor-pointer">
      <img
        src={recipe.image}
        alt="recipe-image"
        className="w-full h-[200px] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />

      <div className="p-4 pb-5">
        <h2 className="text-xl font-semibold mb-4">{recipe.title}</h2>

        <div className="flex items-center gap-1 mb-4">
          <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
          <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
          <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
          <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
          <Star className="text-gray-300 w-5 h-5" />
          <p className="text-green-600 text-sm ml-2 font-medium">{recipe.likes} ratings</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-600 gap-6">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-500" />
              <span>30 min</span>
            </div>
            <div className="flex items-center gap-1">
              <Flame className="w-4 h-4 text-gray-500" />
              <span>376 Calories</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className="text-red-500 font-semibold">6g</span>
            <span className="text-blue-500 font-semibold">32g</span>
            <span className="text-yellow-500 font-semibold">24g</span>
          </div>
        </div>
      </div>
    </div>
  );
}
