import { v4 } from 'uuid';
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
  return (
    <>
      <h3>Add a Keg</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="brand" placeholder="Brand" />
        <input type="number" name="price" placeholder="Price" />
        <input type="number" name="content" placeholder="Alcohol Content" />
        <button>Add</button>
      </form>
    </>
  )
}

NewTap.propTypes = {
  onNewTapCreation: PropTypes.func
}
