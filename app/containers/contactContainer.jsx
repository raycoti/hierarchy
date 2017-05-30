import {connect} from 'react-redux';
import React, {Component} from 'react';
import Calculator from '../components/calculator';
import Display from '../components/display'
import {setQuestion, setCurrent} from '../reducers/questions'
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    question: state.math.question,
    answer: state.math.answer,
    //image maybe
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    nextQuestion(){
      dispatch(setQuestion('2 + 2'));
    },
      setCurrent(){
      dispatch(setCurrent({
        name: "Blurring the line between dreams and reality",
        imageUrl: 'soulSearching.png'
      }));
    }
  }
}

class CalculatorContainer extends Component {
  constructor(){
    super()
    //change handler
    //for input form
    this.handleClick = this.handleClick.bind(this);
  }
   componentWillMount(){
    this.props.setCurrent();
  }
  handleClick(e){
    //console.log('clicked',e.target.value);
  }
  render(){
    return (
      <div className="container">
      
      <div className="col-md-8 col-md-offset-2 col-sm-12">
      <h2>Ray Coti</h2>
      <a href="https://www.linkedin.com/in/raycoti/"><h3>Linkedin</h3></a>
      <a href="https://www.github.com/raycoti"><h3>Github</h3></a>
      </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer)
