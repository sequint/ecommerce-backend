const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../models')

// The `/api/tags` endpoint

router.get('/tags', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({ include: Product })
    .then(tags => res.json(tags))
    .catch(err => console.log(err))
})

router.get('/tags/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findAll({ include: Product, where: { id: req.params.id } })
    .then(category => res.json(category))
    .catch(err => console.log(err))
})

router.post('/tags', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then(category => res.status(200).json(category))
    .catch(err => console.log(err))
})

router.put('/tags/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: { id: req.params.id }
  })
})

router.delete('/tags/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.update(req.body, {
    where: { id: req.params.id }
  })
})

module.exports = router
