const router = require('express').Router()
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{
      model: Product
    }]
  })
    .then(categories => res.json(categories))
    .catch(err => console.log(err))
})

router.get('/categories/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findAll({
    include: [{
      model: Product,
      where: { id: req.params.id}
    }]
  })
    .then(category => res.json(category))
    .catch(err => console.log(err))
})

router.post('/categories', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(category => res.status(200).json(category))
    .catch(err => console.log(err))
})

router.put('/categories/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: { id: req.params.id }
  })
})

router.delete('/categories/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id }
  })
})

module.exports = router
