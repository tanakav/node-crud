const { Router } = require('express');
const ProjectService = require('../services/ProjectService');
const routes = Router();

routes.get("/", ProjectService.findAll);

routes.get("/:id", ProjectService.findById);

routes.post('/create', ProjectService.create);

routes.put("/:id", ProjectService.update);

routes.delete("/:id", ProjectService.deleteById);

module.exports = routes;

