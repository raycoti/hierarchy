import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    groups: state.main.groups,
    subGroups: state.sub.subGroups,    
  }
}

const Search = function({groups, subGroups,onChange, subChange}){
  return(
    <div>
      <li>
        <select onChange={(e)=>{onChange(e)}} className="btn btn-default btn-select">
          <option value="default">Select Institution</option>
          {Object.keys(groups).map((name) => {
            return (
            <option key={groups[name].id} value={name}>{name.toUpperCase()}</option>
            )
          })}
      </select>
      <select onChange={(e)=>{subChange(e)}}  className="btn btn-default btn-select">
          <option value="default">Select Committie</option>
          {subGroups.map((subGroup) => {
            return (
            <option key={subGroup.id} value={subGroup.id}>{subGroup.name.toUpperCase()}</option>
            )
          })}
      </select>
      </li>
    </div>
  )
}

export default connect(mapStateToProps,null)(Search)