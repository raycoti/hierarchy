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
          let role=""; ;
          let position
          if(hierarchy[id]) {role = hierarchy[id].role; position =positions[id]}
          else{
            position = {x:0, y:10000}
          }
          return <MemberNode key={id} id={id} role={role} name={members[id].name} coor={position}/>
        })}
      <TextLabel />
      </Layer>
    </Stage>
    </div>
  )
}

export default Members;