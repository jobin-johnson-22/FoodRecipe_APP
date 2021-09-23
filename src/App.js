import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import RecipeList from './RecipeList';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState('vegan');

  const YOUR_APP_ID = 'c340f9f9';
  const YOUR_APP_KEY = 'a3620cf1f94e04d6433c2015d18fd932';

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    const result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className='app'>
      <h1>Food Recipe Plaza 🍔</h1>
      <form className='search' onSubmit={onSubmit}>
        <input
          className='app_input'
          type='text'
          placeholder='Enter Ingredient'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className='app_submit' type='submit' value='Search' />

        <select className='app_healthLabels'>
          <option value='vegan' onClick={() => setHealthLabels('vegan')}>
            vegan
          </option>
          <option
            value='vegetarian'
            onClick={() => setHealthLabels('vegetarian')}
          >
            vegetarian
          </option>
          <option value='paleo' onClick={() => setHealthLabels('paleo')}>
            paleo
          </option>
          <option
            value='dairy-free'
            onClick={() => setHealthLabels('dairy-free')}
          >
            dairy-free
          </option>
          <option
            value='gluten-free'
            onClick={() => setHealthLabels('gluten-free')}
          >
            gluten-free
          </option>
          <option
            value='wheat-free'
            onClick={() => setHealthLabels('wheat-free')}
          >
            wheat-free
          </option>
          <option
            value='low-sugar'
            onClick={() => setHealthLabels('low-sugar')}
          >
            low-sugar
          </option>
          <option value='egg-free' onClick={() => setHealthLabels('egg-free')}>
            egg-free
          </option>
          <option
            value='peanut-free'
            onClick={() => setHealthLabels('peanut-free')}
          >
            peanut-free
          </option>
          <option
            value='tree-nut-free'
            onClick={() => setHealthLabels('tree-nut-free')}
          >
            tree-nut-free
          </option>
          <option value='soy-free' onClick={() => setHealthLabels('soy-free')}>
            soy-free
          </option>
          <option
            value='fish-free'
            onClick={() => setHealthLabels('fish-free')}
          >
            fish-free
          </option>
          <option
            value='shellfish-free'
            onClick={() => setHealthLabels('shellfish-free')}
          >
            shellfish-free
          </option>
        </select>
      </form>

      <div className='app_recipes'>
        {recipes !== [] &&
          recipes.map((recipe) => {
            return <RecipeList recipe={recipe} />;
          })}
      </div>
    </div>
  );
}

export default App;
