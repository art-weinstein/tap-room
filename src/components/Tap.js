import React from 'react';
import PropTypes from 'prop-types';

function Tap (props) {
  return (
    <> 
      <div onClick = {() =>props.onSelectingTap(props.id)}>
        <h4>{props.name} - {props.brand} - ${props.price}</h4>
        <p>Alcohol content: {props.content}% - [click here for details/orders]</p>
        <hr/>
      </div>
    </>
  );
}


Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  content: PropTypes.number.isRequired,
  onSelectingTap: PropTypes.func,
}


export default Tap;