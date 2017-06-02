import React, {Component} from 'react';
import Member from './member';

const Members = function({members, hierarchy}){
  return (
    <div>
      <h1>Members</h1>
    {Object.keys(members).map(id => {
      return <Member name={members[id].name} role={hierarchy[id]}/>
    })}
    </div>
  )
}

export default Members;