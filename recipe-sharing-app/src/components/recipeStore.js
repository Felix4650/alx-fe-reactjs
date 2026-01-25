import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // CRUD
  addRecipe: (recipe) =>
    set(state => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.recipes, recipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
      filteredRecipes: state.filteredRecipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id),
      filteredRecipes: state.filteredRecipes.filter(recipe => recipe.id !== id),
      favorites: state.favorites.filter(fid => fid !== id),
    })),

  // Search & Filter
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () =>
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Favorites
  addFavorite: (id) =>
    set(state => ({
      favorites: [...new Set([...state.favorites, id])],
    })),

  removeFavorite: (id) =>
    set(state => ({
      favorites: state.favorites.filter(fid => fid !== id),
    })),

  // Recommendations
  generateRecommendations: () =>
    set(state => ({
      recommendations: state.recipes.filter(
        recipe => !state.favorites.includes(recipe.id) && Math.random() > 0.5
      ),
    })),
}));

