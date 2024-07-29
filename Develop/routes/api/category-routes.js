const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Reader.findAll({
      include: [{ model: Category }, { model: Product }], 
      attributes: {
        include: [
          [
            sequelize.literal(),
          ],
        ],
      },
    })
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id,
      {
        include: [{ model: Category }, { model: Product }],
        attributes: {
          include: [
            [
              sequelize.literal(),
            ],
          ],
        },,
      });
      
      if (!categoryData) {
        res.status(404).json({ message: 'Not found!' });
        return;
      }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: 'Server' })
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData

  try {

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: 'Server' })
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: 'Server' })
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'Deleted & Gone' });
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
