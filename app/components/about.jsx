import React, {Component} from 'react';

import HhBlog from './hBlog';
import PpBlog from './pBlog';
import ImgBlog from './imgBlog';
import ABlog from './aBlog';
const About = function({project}){
  const split = /<[a-z]>/g;
  const description = project.description || '';
  const example = description.split(split) || [];
  return (
    <div className="blogg" >
      {example.map((item, key) => {
        const elem = item.split('</')
        switch (elem[1]){
          case 'p>':
            return <PpBlog key={key} paragraph={elem[0]} />;
          case 'h>':
            return <HhBlog key={key} header={elem[0]} />;
          case 'i>':
            return <ImgBlog key={key} image={elem[0]} />;
          case 'a>':
            return <ABlog key={key} url={elem[0]} />
          default: 
            return null;
        }
      })}
    </div>
  )
}

export default About;
