import React from 'react';
import PropTypes from 'prop-types';

function TapDetails(props) {
  const {tap} = props;

  return(
    <>
      <h1>Tap Details</h1>
      <h3>{tap.name} - {tap.brand} - ${tap.price} - {tap.content}% - available pints {tap.pints}</h3>
      <hr/>
    </>
  );
}

NewTap.propTypes = {
  tap: PropTyeps.object,
}

export default TapDetails;
