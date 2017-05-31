import {connect} from 'react-redux';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Display from '../components/display'
import {setQuestion, getProjects, setCurrent} from '../reducers/questions'
import Skills from '../components/skills'
const mapStateToProps = (state) => {
  return {
    question: state.math.question,
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

class HomeContainer extends Component {
  constructor(){
    super()
    //change handler
    //for input form
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    //console.log('clicked',e.target.value);
  }
  componentWillMount(){
    this.props.setCurrent();
  }
  render(){
    return (
      <div className="container-fluid projects" >
        <p className="subtext">Just a Kid from Chicago who loves technology</p>
        <h1 >projects</h1>
        <Display theType={'projects'} menu={this.props.menu}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
