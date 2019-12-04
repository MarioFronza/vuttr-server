const Tool = require("../models/Tool");

class ToolController {
  async index(req, res) {
    const { tag } = req.query

    const filters = {}

    if (tag) {
      filters.tags = tag
    }

    const tools = await Tool.find(filters);
    return res.json(tools);
  }

  async store(req, res) {
    const { title, link, description, tags } = req.body;
    const tool = await Tool.create({
      title,
      link,
      description,
      tags
    });
    return res.status(201).json(tool);
  }

  async destroy(req, res) {
    const { id } = req.params
    await Tool.findByIdAndDelete(id);
    return res.status(204).send();
  }
}

module.exports = new ToolController();
