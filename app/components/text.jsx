import {Label, Text} from 'react-konva';
import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
  text: state.canvas.info,
  xcoor: state.canvas.x,
  ycoor: state.canvas.y
})


const TextLabel = function({text,xcoor,ycoor}){

  return (
    <Label 
        x={xcoor}
        y={ycoor}
        opacity={0.75}
    > 
      <Text
      text={text}
       fontFamily= 'Calibri'
        fontSize= {18}
        padding= {5}
        fill= 'black'
      >

      </Text>
    </Label>
  )
}

export default connect(mapStateToProps)(TextLabel)