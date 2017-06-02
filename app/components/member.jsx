import React, {Component} from 'react';

const Member = function({role,name}) {
  let theRole = '';
  if(role) theRole=role.role;
  //position 
  return (
    <div>
      <h4>{name}</h4>
      <p>{theRole}</p>
    </div>
  )
}

export default Member;