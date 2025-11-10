import SearchBar from '../components/SearchBar';
import hero from '../assets/hero.jpg';
import Header from '../components/Header';
import RecipesList from '../components/ReciepesList';
import type { Recipe } from '../types/recipe';
import { useState } from 'react';

interface HomePageProps {
  fetchedRecipes: Recipe[];
  setFetchedRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
}

export default function HomePage({ fetchedRecipes, setFetchedRecipes }: HomePageProps) {
  const [searchText, setSearchText] = useState('');
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-[700px] flex flex-col items-center w-full"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
          backgroundBlendMode: 'darken',
        }}>
        <div className="w-[1440px] mt-12">
          <Header />
        </div>
        <div className="w-1/3 my-auto">
          <h2 className="text-4xl font-semibold text-white text-center drop-shadow-lg mb-10">
            Find the Perfect Recipe with What’s Already in Your Fridge
          </h2>
          <SearchBar setFetchedRecipes={setFetchedRecipes} setSearchText={setSearchText} />
        </div>
      </div>
      <div className="max-w-5xl mx-auto pt-16">
        <RecipesList fetchedRecipes={fetchedRecipes} searchText={searchText} />
      </div>
    </div>
  );
}
