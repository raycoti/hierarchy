import React, {Component} from 'react';
import {connect} from 'react-redux';
const mapStateToProps = (state) => {
  return {
    info: state.canvas.info,
  }
}

const Info = function({info}) {

// test clicking of a node to see if it changes anything. 
//
 
  return (
    <div className="col-5-md">
      <p>{info}</p>
    </div>
  )
}

export default connect(mapStateToProps)(Info);