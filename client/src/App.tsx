import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import type { Recipe } from './types/recipe';
import { useState } from 'react';

function App() {
  const [fetchedRecipes, setFetchedRecipes] = useState<Recipe[]>([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage fetchedRecipes={fetchedRecipes} setFetchedRecipes={setFetchedRecipes} />
          }
        />
        <Route path="/recipe/:id" element={<RecipePage fetchedRecipes={fetchedRecipes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
