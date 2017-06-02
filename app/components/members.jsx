import React, {Component} from 'react';
import Member from './member';
import {Layer, Rect, Stage, Group} from 'react-konva';
import MemberNode from './memberNode';

const Members = function({members, hierarchy}){
  return (
    <div>
      <h1>Members</h1>
    {Object.keys(members).map(id => {
      return <Member name={members[id].name} role={hierarchy[id]}/>
    })}
    <Stage width={700} height={700}>
      <Layer >    
        {Object.keys(members).map((id,int) => {
          return <MemberNode xcoor={100*int} />
        })}
      </Layer>
    </Stage>
    
    </div>
  )
}

export default Members;