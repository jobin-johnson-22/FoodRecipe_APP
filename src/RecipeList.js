import React from 'react';
import './RecipeList.css';

const RecipeList = ({ recipe }) => {
  return (
    recipe['recipe']['image'].match(/\.(jpeg|jpg|png|gif)$/) != null && (
      <div
        className='recipeList'
        onClick={() => {
          window.open(recipe['recipe']['url']);
        }}
      >
        <img
          className='recipe_img'
          src={recipe['recipe']['image']}
          alt={recipe['recipe']['image']}
        />
        <p className='recipe_name'>{recipe['recipe']['label']}</p>
      </div>
    )
  );
};

export default RecipeList;
