import {connect} from 'react-redux';
import React, {Component} from 'react';
import { Rect } from 'react-konva';
import {setText, setCoor, setRole} from '../reducers/canvas';
import {setPosition} from '../reducers/group'
const mapDispatchToProps = (dispatch) => ({
  changeText(text){
    dispatch(setText(text))
  },
  changeRole(role){
    dispatch(setRole(role))
  },
  toogleCoor(theview,x,y){
    dispatch(setCoor(x,y))
  },
  changePos(id,pos){
    dispatch(setPosition(id,pos))
  }
})

class memberNode extends Component {
    constructor(...args) {
      super(...args);
      this.state = {
        view: false,
        color: 'blue',
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleDragEnd = this.handleDragEnd.bind(this);
      this.handleDragStart = this.handleDragStart.bind(this);
    }
    
    handleDragStart(e){
     this.props.changeText('')
     this.props.changeRole('')

  };
    handleDragEnd(e){
      
      const x= e.target.x();
      const y = e.target.y();
      const id= this.props.id;
      this.props.changePos(id, {x,y});
    
  };
    handleClick() {
     const newView= !this.state.view;
     const role = this.props.role || '';
       this.setState({
        color:'blue',
        view: newView
      })
      this.props.toogleCoor(newView,this.props.coor.x,this.props.coor.y+45)
      this.props.changeText(this.props.name)
      this.props.changeRole(role)
    }
    render() {
        let xCoor = 0;
        let yCoor = 0;
        if(this.props.coor){
          xCoor = this.props.coor.x;
          yCoor = this.props.coor.y;
        }
        return (
            <Rect
                draggable = {true}
                x={xCoor} y={yCoor} width={50} height={50}
                fill={this.state.color}
                shadowBlur={10}
                onClick={()=>this.handleClick()}
                onDragStart = {this.handleDragStart}
                onDragEnd= {this.handleDragEnd} 
            />
        );
    }
}

export default connect(null,mapDispatchToProps)(memberNode);