import React from 'react';

const DeleteForm = (props) => {
  return (
    <div>
      <button
        className="same-width btn btn-danger"
        onClick={props.onClickDeleteRecipe}>Delete</button>
    </div>
  )
}

export default DeleteForm;
