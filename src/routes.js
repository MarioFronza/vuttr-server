const { Router } = require('express')

const ToolController = require('./app/controllers/ToolController')

const routes = Router()

// routes.get("/tools", ToolController.index)
// routes.post("/tools", ToolController.store)
routes.delete("/tools/:id", ToolController.destroy)

module.exports = routes
