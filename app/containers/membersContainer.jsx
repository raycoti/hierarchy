// 
//
import {connect} from 'react-redux';
import React, {Component} from 'react';
import Members from '../components/members'

const mapStateToProps = (state) => {
  return {
    members: state.main.members,
    hierarchy: state.sub.hierarchy,
    lead: state.sub.lead,
    positions: state.main.positions,
  }
}


export default connect(mapStateToProps, null)(Members)