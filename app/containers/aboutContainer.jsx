import {connect} from 'react-redux';
import React, {Component} from 'react';
import Calculator from '../components/calculator';
import Display from '../components/display'
import {setQuestion} from '../reducers/questions'
import { Link } from 'react-router-dom';
import About from '../components/about'
import axios from 'axios';
import {getProject, setCurrent, getArt} from '../reducers/questions';
const mapStateToProps = (state) => {
  return {
    question: state.math.question,
    answer: state.math.answer,
    current: state.math.current,
    projects: state.math.menu,
    //image maybe
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    nextQuestion(){
      dispatch(setQuestion('2 + 2'));
    },
    getCurrent(name, type){
      switch (type){
        case 'art':
          dispatch(getArt(name));
          break;
        case 'project':
          dispatch(getProject(name));
          break;
        default:
          dispatch(getProject(name));
      }
      
    },
    setCurrent(){
      dispatch(setCurrent({}));
    }
  }
}

class CalculatorContainer extends Component {
  constructor(){
    super()
  
  }
  componentWillMount(){
    const url = this.props.match.path;
    const name = this.props.match.params.name;
    switch (url){
      case '/projects/:name':
        this.props.getCurrent(name, 'project' )
        break;
      case '/art/:name':
        this.props.getCurrent(name, 'art' )
        break;
      default:
        this.props.getCurrent('KeyQuest','project' );
        //default can't find;
    }
  
  }
  componentWillUnmount(){
    this.props.setCurrent()
  }
  render(){
    
    return (
      <div className="container-fluid">
      <About project={this.props.current} />
      </div>
      
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer)

