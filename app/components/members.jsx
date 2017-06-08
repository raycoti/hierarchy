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
          return <MemberNode id={id} name={members[id].name} coor={positions[id]}/>
        })}
      <TextLabel />
  {/*      <Label 
        x={10}
        y={10}
        opacity={0.75}>
        <Text
         text='Label pointing left'
        fontFamily= 'Calibri'
        fontSize= {18}
        padding= {5}
        fill= 'white'>

        </Text>
        </Label>*/}
      </Layer>
    </Stage>
    </div>
  )
}

export default Members;