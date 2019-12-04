const { Router } = require('express')

const routes = Router()

routes.get('/', () => {
  console.log('Hello World')
})

module.exports = routes
