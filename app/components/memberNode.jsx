import {connect} from 'react-redux';
import React, {Component} from 'react';
import { Rect } from 'react-konva';

class memberNode extends Component {
    constructor(...args) {
      super(...args);
      this.state = {
        color: 'green',
        x: this.props.xcoor,
        y: 10
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleDragStart = this.handleDragStart.bind(this)
    }
    
    handleDragStart(){
    console.log('dragStart', this.state.x);
    /*figure out how to keep track of the position*/ 

    //conva may not be draggable
    //have coordinates out of bound if not a part of it.


    //have it just clickable 
  };
    handleClick() {
      //don't set state but rather toggle something else that way we don't need to care about the x and y coord
      //also checkout out how to make drop end events
      console.log('render text at designated Info section')
    }
    render() {
        return (
            <Rect
                draggable = {true}
                x={this.props.xcoor} y={10} width={50} height={50}
                fill={this.state.color}
                shadowBlur={10}
                onClick={()=>this.handleClick()}
                onDragStart = {this.handleDragStart} 
            />
        );
    }
}

export default memberNode;