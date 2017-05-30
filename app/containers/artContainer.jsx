import {connect} from 'react-redux';
import React, {Component} from 'react';
import Calculator from '../components/calculator';
import { Link } from 'react-router-dom';
import Display from '../components/display'
import Art from '../components/art'
import {setQuestion, getProjects, setCurrent} from '../reducers/questions'
const mapStateToProps = (state) => {
  return {
    question: state.math.question,
    answer: state.math.answer,
    art: state.math.art,
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

class ArtContainer extends Component {
  constructor(){
    super()
    this.state = {slideIndex: 1}
    //for input form
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.plusSlides = this.plusSlides.bind(this);
    this.currentSlide = this.currentSlide.bind(this);
    this.showSlides = this.showSlides.bind(this);
  }
openModal() {
  document.getElementById('myModal').style.display = "block";
}

closeModal(e) {
  document.getElementById('myModal').style.display = "none";
}

plusSlides(n) {
  const ind = this.state.slideIndex;
  this.showSlides(ind + n);
  
}

currentSlide(n) {
  this.showSlides(n);
}

showSlides(n) {
  var i;
  
  var dots = document.getElementsByClassName("demo");
  let slideIndex;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1; this.setState({slideIndex:1})}
  else if (n < 1) {slideIndex = slides.length; this.setState({slideIndex: slides.length})}
  else{
     this.setState({slideIndex: n})
     slideIndex=n;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
  handleClick(e){
    //console.log('clicked',e.target.value);
  }
  componentWillMount(){
    this.props.setCurrent();
  }
  render(){
    return (
      <div className="container-fluid gallery" >
        <h1>Art</h1>
        <Art open={this.openModal} currentSlide={this.currentSlide} closeModal={this.closeModal} theType={'art'} plus={this.plusSlides} menu={this.props.art} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)