import React from 'react';
import Button from './Button';
import './styles.css';

class AddRecipeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        showForm: false,
        name: '',
        ingredients: []
    }
    this.toggleForm = this.toggleForm.bind(this);
    this.loadForm = this.loadForm.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ 'name' : event.target.value })
  }

  handleIngredientChange(event) {
    this.setState({ 'ingredients' : event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const newRecipe = {
      name: this.state.name.toLowerCase(),
      ingredients: this.state.ingredients.toLowerCase().split(',')
    }

    this.toggleForm();
    if (this.props.value === 'add'){
      this.props.onClickAddRecipe(newRecipe)
    } else {
      this.props.onClickEditRecipe(newRecipe)
    }
  }

  toggleForm() {
    this.setState({showForm:!this.state.showForm})
  }

  loadForm() {
    this.props.recipe ?
    this.setState({
      showForm:!this.state.showForm,
      name: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients.join(',')
    }) :
    this.setState({
      showForm: !this.state.showForm,
      name: '',
      ingredients: [] })
  }

  render() {
    if (this.state.showForm){
      return (
        <div id="abc">
          <div
            id="popupContact"
            className="well col-xs-offset-1 col-xs-10">
              <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    value={this.state.name}
                    placeholder="Recipe name..."
                    onChange={this.handleNameChange} />
                  <span className="input-group-btn">
                    <a className="same-width btn btn-warning" onClick={this.toggleForm}>Cancel</a>
                  </span>
                </div>
                <div className="input-group">
                  <input
                    className="form-control"
                    id="ingredients"
                    type="text"
                    value={this.state.ingredients}
                    placeholder="Ingredients..."
                    onChange={this.handleIngredientChange} />
                  <span className="input-group-btn">
                    <button className="same-width btn btn-success" type="submit">Submit!</button>
                  </span>
                  </div>
              </form>
              <p>Use a comma in between ingredients.</p>
          </div>
        </div>
      )
    } else {
      return (
        <Button value={this.props.value} action={this.loadForm} />
      )
    }
  }
}

export default AddRecipeForm;
