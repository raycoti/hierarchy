import React from 'react';
const ImgBlog = function ({image}){
  return (
    <div className="thumbnail">
      <img className="img-thumbnail des" src={`../images/blog/${image}`} />
    </div>
      
  )
}

export default ImgBlog;