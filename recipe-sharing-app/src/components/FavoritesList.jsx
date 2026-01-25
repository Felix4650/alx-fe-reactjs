import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const { recipes, favorites } = useRecipeStore();

  const favRecipes = favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
