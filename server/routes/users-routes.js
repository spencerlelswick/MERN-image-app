const express = require('express')

const router = express.Router()

const DUMMY_USERS = [
  {
    id: 'u1',
    title: 'Empire state building API',
    description: 'big building',
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: '20 W 34th St, New York, NY 10001',
    creator: 'u1',
  },
]

module.exports = router
