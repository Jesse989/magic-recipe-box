import React from 'react';
import AddRecipeForm from './AddRecipeForm';

const Recipes = (props) => {
  return (
    <div className="text-center col-xs-5 col-md-3">
      {props.recipes.map( (recipe, i) => (
        <h4
          className="recipe-link"
          id={i}
          key={i}
          onClick={props.onClickSelectRecipe.bind(this, i)}>
          ~ {recipe.name}
        </h4>
      ))}
    <hr />
      <AddRecipeForm
      onClickAddRecipe={props.onClickAddRecipe}
      value={"add"} />
    </div>
  )}

export default Recipes;
