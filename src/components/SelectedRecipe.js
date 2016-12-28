import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import DeleteForm from './DeleteForm';

const SelectedRecipe = (props) => {

  return (
    <div className="text-center">
      <div className="well well-xs col-xs-5 col-xs-offset-1 col-md-offset-3 col-md-3">
        <h2>{props.recipe ? props.recipe.name : "" }</h2>
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <td>{props.recipe ?
                    "Ingredients:" :
                    "Please add a recipe..."}
              </td>
            </tr>
          </thead>
          <tbody>
            {props.recipe ? props.recipe.ingredients.map( (ingredient, i) =>
              <tr key={i}><td key={i}>{ingredient}</td></tr>) : null }
          </tbody>
        </table>
        <div className="row">
          <div className="col-xs-12">
            <div className="col-xs-6">
              <AddRecipeForm
                onClickEditRecipe={props.onClickEditRecipe}
                value={"Edit"}
                recipe={props.recipe}/>
            </div>
            <div className="col-xs-6">
              <DeleteForm
                onClickDeleteRecipe={props.onClickDeleteRecipe}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SelectedRecipe;
