
const router = require('express').Router();
const {getUsers} = require("../../controllers/users");
const User = require('../models/user')

router.route('/').get(getUsers)

