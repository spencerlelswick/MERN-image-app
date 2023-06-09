const express = require('express')

const HttpError = require('../models/http-error')

const router = express.Router()

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire state building API',
    description: 'big building',
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: '20 W 34th St, New York, NY 10001',
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Some other state building API',
    description: 'big building',
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: '20 W 34th St, New York, NY 10001',
    creator: 'u2',
  },
]

router.get('/:pid', (req, res, next) => {
  const placeId = req.params.pid
  const place = DUMMY_PLACES.find((p) => p.id === placeId)
  if (!place) {
    return res
      .status(404)
      .json({ message: 'Could not find a place by that id' })
  }

  if (!place) {
    throw new HttpError('Could not find a place for provided place id')
  }
  res.json({ place })
})

router.get('/user/:uid', (req, res, next) => {
  const userId = req.params.uid
  const place = DUMMY_PLACES.find((u) => u.creator === userId)

  if (!place) {
    return next(
      new HttpError('Could not find a place for provided user id', 404)
    )
  }
  res.json({ place })
})

module.exports = router
