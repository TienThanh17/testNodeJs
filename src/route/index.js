const newsRouter = require('./news')
const siteRouter = require('./site')
const courseRouter = require('./courses')
const meRouter = require('./me')

function Route(app) {

  app.use('/news', newsRouter)
  app.use('/course', courseRouter)
  app.use('/me', meRouter)
  app.use('/', siteRouter)

}

module.exports = Route;
