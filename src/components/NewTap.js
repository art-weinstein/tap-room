import {v4} from 'uuid';
import React from 'react';
import PropTypes from 'prop-types';

export default function NewTap(props) {
  const handleSubmit = (event) => {
    event.preventDefault()

    props.onNewTapCreation({
      id: v4(),
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: parseInt(event.target.price.value),
      content: parseInt(event.target.content.value),
      pints: parseInt(124),
    })
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="name"/>
      <input type="text" name="brand"/>
      <input type="number" name="price"/>
      <input type="number" name="content"/>
      <input type="number" name="pints"/>
    </form>
  )
}

NewTap.propTypes = {
  onNewTapCreation: PropTypes.func
}
