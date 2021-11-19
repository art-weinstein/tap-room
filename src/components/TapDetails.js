import React from 'react';
import PropTypes from 'prop-types';

function TapDetails(props) {
  const {tap} = props;
  const handleSellBeer = (event) => {
    props.onSellTap(event.target.value)
  }
  return(
    <>
      <h1>Tap Details</h1>
      <h3>{tap.name} - {tap.brand} - ${tap.price} - {tap.content}% - available pints {tap.pints}</h3>
      <hr/>
      <button value = {tap.id} onClick={handleSellBeer}>Sell a pint!</button>
    </>
  );
}

TapDetails.propTypes = {
  tap: PropTypes.object,
  onSellTap: PropTypes.func
}

export default TapDetails;
