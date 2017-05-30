import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const Display = ({menu, theType}) => {
  //text and image will be passed down
  //from props 
  return (
    <div name="projects" className="row">
      {menu.map((item,ind) => {
        return (
          <div key={item.id} className="col-md-6">
            <Link to={`/${theType}/${item.name}`}>
              {/*<div className="thumbnail">
                <img src={`images/${item.imageUrl}`} className="img-thumbnail"/>
                <div className="caption" >
                  <h4 className="cap">{item.name}</h4>
                </div>
              </div>*/}
              <div className="hovereffect thumbnail ">
                <img className={`img-thumbnail image2 headImg `} width="100%" src={`/images/${item.imageUrl}`} alt="" />
                <div className="overlay2" height="100%">
                  <h3 className={`text2`}>{item.name}</h3>
                </div>
              </div>
            </Link>
           
          </div>
        )
      })}
    </div>
  )
}

export default Display;
