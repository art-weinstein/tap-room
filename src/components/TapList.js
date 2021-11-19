import React from 'react';
import Tap from './Tap';
import PropTypes from "prop-types";

function TapList (props) {
  return(
    <>
      {props.tapList.map((tap) => 
        <Tap name={tap.name}
          brand={tap.brand}
          price={tap.price}
          content={tap.content}
          pints={tap.pints}
          id={tap.id}
          key={tap.key}
          onSelectingTap={props.onSelectingTap}
        />
      )}
    </>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onSelectingTap: PropTypes.func,
}


export default TapList;