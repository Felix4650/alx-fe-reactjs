import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // 👇 ALX wants "validate"
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Include at least two ingredients";
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Recipe Submitted Successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add New Recipe
        </h2>

        {/* Title */}
        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full p-3 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mb-3">
            {errors.title}
          </p>
        )}

        {/* Ingredients */}
        <textarea
          placeholder="Ingredients (comma separated)"
          className="w-full p-3 border rounded-lg mb-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm mb-3">
            {errors.ingredients}
          </p>
        )}

        {/* Steps */}
        <textarea
          placeholder="Preparation Steps"
          className="w-full p-3 border rounded-lg mb-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        {errors.steps && (
          <p className="text-red-500 text-sm mb-4">
            {errors.steps}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
