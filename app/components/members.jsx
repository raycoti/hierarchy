import React, {Component} from 'react';
import Member from './member';
import {Layer, Rect, Stage, Group, Label, Text} from 'react-konva';
import MemberNode from './memberNode';
import Info from './info';
import TextLabel from './text';

const Members = function({members,positions,lead, hierarchy}){
  return (
    <div >
      <h1>Members</h1>
    
    <Stage width={700} height={700}>
      <Layer >    
        {Object.keys(members).map((id,int) => {
          console.log(members[id].name)
          let role=""; 
          if(hierarchy[id]) role = hierarchy[id].role
          return <MemberNode key={id} id={id} role={role} name={members[id].name} coor={positions[id]}/>
        })}
      <TextLabel />
      </Layer>
    </Stage>
    </div>
  )
}

export default Members;