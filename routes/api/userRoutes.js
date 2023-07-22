
const router = require('express').Router();
const {getUsers} = require("../../controllers/users");
const User = require('/../../Models/User')

router.route('/').get(getUsers)

