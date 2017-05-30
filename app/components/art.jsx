import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from './modal'


const Art = ({menu,open, closeModal, currentSlide, theType, plus}) => {
  return (
    <div className="container-fluid row">
      {menu.map((item,ind) => {
        return (
          <div key={item.id} className="col-md-3 theGallery ">
            {/*<Link to={`/${theType}/${item.name}`}>*/}
              {/*<div className="thumbnail">
                <img src={`images/${item.imageUrl}`} className="img-thumbnail"/>
                <div className="caption" >
                  <h4 className="cap">{item.name}</h4>
                </div>
              </div>
              <div className="hovereffect thumbnail ">
                <img className={`img-thumbnail image2 headImg `} width="100%" src={`/images/${item.imageUrl}`} alt="" />
                <div className="overlay2" height="100%">
                  <h3 className={`text2`}>{item.name}</h3>
                </div>
              </div>
            */}
            <div className="hovereffect thumbnail theGallery" onClick={()=>{
                open(); currentSlide(ind+1)} }>
                <img className={`img-thumbnail image2 headImg img3`}  width="100%" src={`/images/${item.imageUrl}`} alt=""  />
                <div className="overlay2" height="100%">
                  <h3 className={`text2`}>{item.name}</h3>
                </div>
              </div>
            {/*<div className="imgcolumn">
              <img src={`images/${item.imageUrl}`}  onClick={()=>{
                open(); currentSlide(ind+1) } }
                className="hover-shadow cursor img-thumbnial"/>
            </div>*/}
            {/*</Link>*/}
          </div>
        )
      })}
      <Modal menu={menu} close={closeModal} plus={plus} />
      
    </div>
  )
}

export default Art;


/*<div class="row">
  <div class="column">
    <img src="img_nature.jpg" style="width:100%" onclick="openModal();currentSlide(1)" class="hover-shadow cursor"/>
  </div>
  <div class="column">
    <img src="img_fjords.jpg" style="width:100%" onclick="openModal();currentSlide(2)" class="hover-shadow cursor"/>
  </div>
  <div class="column">
    <img src="img_mountains.jpg" style="width:100%" onclick="openModal();currentSlide(3)" class="hover-shadow cursor"/>
  </div>
  <div class="column">
    <img src="img_lights.jpg" style="width:100%" onclick="openModal();currentSlide(4)" class="hover-shadow cursor"/>
  </div>
</div>*/

