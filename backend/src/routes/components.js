const express = require('express');
const router = express.Router();
const Component = require('../models/Component');
// Uncomment and implement auth middleware when ready
// const authMiddleware = require('../middleware/auth');

// Create new component (will add auth later)
router.post('/', async (req, res) => {
  try {
    const newComponent = await Component.create(req.body);
    res.status(201).json(newComponent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all components
router.get('/', async (req, res) => {
  try {
    const components = await Component.findAll();
    res.json(components);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a component
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Component.update(req.body, {
      where: { id: req.params.id }
    });
    
    if (updated) {
      const updatedComponent = await Component.findByPk(req.params.id);
      return res.json(updatedComponent);
    }
    
    res.status(404).json({ message: 'Component not found' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a component
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Component.destroy({
      where: { id: req.params.id }
    });
    
    if (deleted) {
      return res.json({ message: 'Component deleted successfully' });
    }
    
    res.status(404).json({ message: 'Component not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
