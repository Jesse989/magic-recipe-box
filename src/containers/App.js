import React from 'react';
import Header from '../components/Header';
import SelectedRecipe from '../components/SelectedRecipe';
import Recipes from '../components/Recipes';
import { connect } from 'react-redux';
import * as recipeActions from '../actions/recipeActions';

class App extends React.Component {
 render() {
  return (
      <div>
        <Header />
        <SelectedRecipe
          recipe={this.props.selectedRecipe}
          onClickEditRecipe={this.props.onClickEditRecipe}
          onClickDeleteRecipe={this.props.onClickDeleteRecipe} />
        <Recipes
          onClickSelectRecipe={this.props.onClickSelectRecipe}
          onClickAddRecipe={this.props.onClickAddRecipe}
          recipes={this.props.recipes} />
      </div>
    )
  }
}

const mapStateToProps = ({recipes}) => ({
    recipes: recipes.recipes,
    selectedRecipe: recipes.selectedRecipe
  });

const mapDispatchToProps = (dispatch) => ({
  onClickSelectRecipe: recipe =>
    dispatch(recipeActions.selectRecipe(recipe)),
  onClickAddRecipe: recipe =>
    dispatch(recipeActions.addRecipe(recipe)),
  onClickEditRecipe: recipe =>
    dispatch(recipeActions.editRecipe(recipe)),
  onClickDeleteRecipe: () =>
    dispatch(recipeActions.deleteRecipe())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
