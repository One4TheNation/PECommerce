const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  try {

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: 'Server' })
  }
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  try {

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: 'Server' })
  }
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  try {

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: 'Server' })
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: 'Server' })
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: 'Server' })
  }
});

module.exports = router;
