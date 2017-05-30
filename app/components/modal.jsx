import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const Modal = ({menu, close, plus}) => {
  //text and image will be passed down
  //from props 
  
  return (
    <div id="myModal" onClick={close} className="modal">
      <span className="close cursor" onClick={close}>&times;</span>
      <div className="modal-content">
        {menu.map((item,ind) => { return (
          <div key={item.id}className="mySlides">
           {/* <div className="numbertext">click to read more</div>*/}
             {/* <Link to={`/art/${item.name}`}> if i want it to go to blog post*/}
              <img src={`images/${item.imageUrl}`} onClick={(e)=>{ e.stopPropagation(); plus(1)}} className="img-thumbnail demo " alt={item.name} /> {/*</Link>*/}
          </div>)
        })}
      </div>
       <a className="prev" onClick={(e)=>{ e.stopPropagation(); plus(-1)}}>&#10094;</a>
       <a className="next" onClick={(e )=>{e.stopPropagation(); plus(1)} }>&#10095;</a>
      <div className="caption-container">
      <p id="caption"></p>
    </div>
    </div>
  )
}

export default Modal;

