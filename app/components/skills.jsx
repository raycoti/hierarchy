import React, {Component} from 'react';

const Skills = ({skills}) => {
  //text and image will be passed down
  //from props 
  return (
    <div className="row galrow">
      {skills.map((item,ind) => {
        return (
          <div key={ind} className="col-md-3 col-xs-6 gal">
            <div className="thumbnail">
              <img src={`images/${item.img}`} className="img-thumbnail iconimg"/>
              <div className="caption" >
                <h4 className="cap">{item.name}</h4>
                <p className="cap">{item.des}</p>
              </div>
            </div>
           
          </div>
        )
      })}
    </div>
  )
}

export default Skills;
