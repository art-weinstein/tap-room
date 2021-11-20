import React from 'react';
import PropTypes from 'prop-types';

function TapDetails(props) {
  const { tap } = props;
  const handleSellBeer = (event) => {
    props.onSellTap(event.target.value)
  }
  const handleFillKeg = (event) => {
    props.onFillTap(event.target.value)
  }


  if (tap.pints > 0) {
    return (
      <>
        <h1>Tap Details</h1>
        <h3>Name: {tap.name} - Brand: {tap.brand} - Price: ${tap.price} - Alcohol Content: {tap.content}% - available pints {tap.pints}</h3>
        <hr />
        <button value={tap.id} onClick={handleSellBeer}>Sell a pint!</button>
      </>
    );
  } else if (tap.pints === 0){
    return (
      <>
        <h3>{tap.name} is out of stock!</h3>
        <hr />
        <button value={tap.id} onClick={handleFillKeg}>Refill the keg</button>
      </>
    )
  }
}


TapDetails.propTypes = {
  tap: PropTypes.object,
  onSellTap: PropTypes.func,
  onFillTap: PropTypes.func,
  onNewResetClick: PropTypes.func
}

export default TapDetails;
