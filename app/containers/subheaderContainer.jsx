import {connect} from 'react-redux';
import React, {Component} from 'react';
import SubHeader from '../components/subheader';
import {getProjects, getArts} from '../reducers/questions';
const mapStateToProps = (state)=>{
  return {
    current: state.math.current,
    menu: state.math.menu,
    art: state.math.art,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    getProjects(){
        dispatch(getProjects())
      },
    getArt(){
      dispatch(getArts())
    }
  }
}

class SubheaderContainer extends Component{
  constructor(){
    super()
  }
  componentWillMount(){
      if(!this.props.menu.length){
      this.props.getProjects();
    }
      if(!this.props.art.length){
      this.props.getArt();
    }
  }
  render(){
    let title, image
    let extra = false;
    title = this.props.current.name || '' ;
    image = this.props.current.imageUrl|| 'loading.png';
    if(image !=='soulSearching.png'){
      extra = true;
    }
    const divStyle = {
      backgroundImage: `url(/images/${image})`,
    };

    
    return (
      <div className="parallax" style={divStyle} >
      <SubHeader text={title} img={image} other={extra} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubheaderContainer)
