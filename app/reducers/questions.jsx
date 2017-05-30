import axios from 'axios';
const SET_QUESTION = 'SET_QUESTION';
const SET_ANSWER = 'SET_ANSWER';
const SET_CURRENT = 'SET_CURRENT';
const SET_PROJECTS = 'SET_PROJECTS';
const SET_ARTS ='SET_ARTS';
const initialState = {
  question: '1+1',
  current: {},
  answer: '2',
  type: 'multiple',
  skills: [{des: 'Javascript, Node.js, React & Redux, CSS, HTML, Postgres', name: 'Development' , img: 'bracket.png' },
            {des: 'Drawings, Sprite Art, 3D Models. Photoshop, Maya 3D, ', name: 'Art', img: 'art.png' },
            {des: 'Game development in Unity, Phaser, PlayCanvas', name: 'Games', img: 'controller.jpg' },
            {des: 'Virtual Enviornments in Unity and PlayCanvas', name: 'Vr', img: 'vrr.png' },
  ],
  menu: [],
  art: [],
}

/*[{name: 'Interactive Narrative', imageUrl: 'vr.png'},
   {name: 'KeyQuest', imageUrl: 'game4.png'},
   {name: 'Enviornment Generator', imageUrl: 'example.jpeg'},
   {name: 'Bubble Befuddle', imageUrl: 'bubble.jpg'},
   ]*/
export default function(state = initialState, action){
  const newState = Object.assign({}, state);

  switch (action.type){
    case SET_ANSWER:
      newState.answer = action.answer;
      break;
    case SET_QUESTION:
      newState.question = action.question;
      break;
    case SET_CURRENT:
      newState.current = action.current;
      break;
    case SET_PROJECTS:
      newState.menu = action.menu;
      break;
    case SET_ARTS:
      newState.art = action.art;
      break;
    default:
      return state;
  }
  return newState;
}

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question: question,
})
export const setAnswer = (answer) => ({
  type: SET_ANSWER,
  answer: answer,
})
export const setCurrent = (project) => ({
  type: SET_CURRENT,
  current: project,
})

export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  menu: projects,
})

export const setArts = (arts) => ({
  type: SET_ARTS,
  art: arts,
})


export const getProjects = () => {
  return (dispatch) => {
    axios.get(`/api/projects`)
      .then(result => {
       
        dispatch(setProjects(result.data))
      })
    }
}

export const getArts = () => {
  return (dispatch) => {
    axios.get(`/api/arts`)
      .then(result => {
       
        dispatch(setArts(result.data))
      })
    }
}



export const getProject = (name) => {
  return (dispatch) => {
    axios.get(`/api/projects/${name}`)
      .then(result => {
        dispatch(setCurrent(result.data))
      })
    }
}

export const getArt = (name) => {
  return (dispatch) => {
    axios.get(`/api/arts/${name}`)
      .then(result => {
        dispatch(setCurrent(result.data))
      })
    }
}