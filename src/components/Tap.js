import React from 'react';
import PropTypes from 'prop-types';

function Tap (props) {
  return (
    <>
      <h4>{props.name} - {props.brand} - {props.price}</h4>
      <p>{props.content}% - {props.pints}</p>
      <hr/>
    </>
  );
}


Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  content: PropTypes.number.isRequired
}

Tap.defaultProps = {
  pints: 124
}

export default Tap;