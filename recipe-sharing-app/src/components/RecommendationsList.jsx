import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id}>
          <h4>{recipe.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
