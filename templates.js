export const templates = {
    controller: `const $$MODEL$$ = require('../models/$$model$$');

exports.create$$MODEL$$ = async (req, res) => {
  try {
    const $$model$$ = await $$MODEL$$.create(req.body);
    res.status(201).json($$model$$);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAll$$MODEL$$s = async (req, res) => {
  try {
    const $$MODEL$$s = await $$MODEL$$.findAll();
    res.status(200).json($$MODEL$$s);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.get$$MODEL$$ById = async (req, res) => {
  try {
    const $$model$$ = await $$MODEL$$.findByPk(req.params.id);
    if ($$model$$) {
      res.status(200).json($$model$$);
    } else {
      res.status(404).json({ message: '$$MODEL$$ not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update$$MODEL$$ = async (req, res) => {
  try {
    const $$model$$ = await $$MODEL$$.findByPk(req.params.id);
    if ($$model$$) {
      await $$model$$.update(req.body);
      res.status(200).json($$model$$);
    } else {
      res.status(404).json({ message: '$$MODEL$$ not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete$$MODEL$$ = async (req, res) => {
  try {
    const $$model$$ = await $$MODEL$$.findByPk(req.params.id);
    if ($$model$$) {
      await $$model$$.destroy();
      res.status(200).json({ message: '$$MODEL$$ deleted' });
    } else {
      res.status(404).json({ message: '$$MODEL$$ not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
`, router: `const express = require('express');
const router = express.Router();
const $$model$$Controller = require('../controllers/$$model$$');

// POST /$$model$$ - Create a new $$model$$
router.post('/', $$model$$Controller.create$$MODEL$$);

// GET /$$model$$ - Retrieve all $$model$$
router.get('/', $$model$$Controller.getAll$$MODEL$$s);

// GET /$$model$$/:id - Retrieve a single $$model$$ by its ID
router.get('/:id', $$model$$Controller.get$$MODEL$$ById);

// PUT /$$model$$/:id - Update a $$model$$ by its ID
router.put('/:id', $$model$$Controller.update$$MODEL$$);

// DELETE /$$model$$/:id - Delete a $$model$$ by its ID
router.delete('/:id', $$model$$Controller.delete$$MODEL$$);

module.exports = router;
`
}
