import React, {Component} from 'react';
const SubHeader = function({text,img, other}){
  let extraStyle = '';
  if (other) extraStyle = 'extra';
  return (
      <div className="hovereffect headImg">
        {/*<img className={`img-responsive headImg `} width="100%" src={`../images/${img}`} alt="" />*/}
        <div className="overlay" height="100%">
          <h3 className={`${extraStyle}info2 `}>{text}</h3>
        </div>
      </div>
     
  )
}

export default SubHeader;
