
const db = require('./index')
const data = require('../seed.json')
const seedProjects = () => db.Promise.map(data.projects, project => db.model('projects').create(project))

const seedArts = () => db.Promise.map(data.arts, art => db.model('arts').create(art))


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedProjects)
  .then(seedArts)
  .then(() => console.log('done'))
  .catch(error => console.error(error))
  .finally(() => db.close())
