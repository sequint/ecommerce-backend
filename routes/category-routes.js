const router = require('express').Router()
const { FOREIGNKEYS } = require('sequelize/types/lib/query-types')
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
    .then(categories => console.log(categories))
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
})

router.post('/categories', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body
  })
})

router.put('/categories/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: id
    }
  })
})

router.delete('/categories/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id }
  })
})

module.exports = router
