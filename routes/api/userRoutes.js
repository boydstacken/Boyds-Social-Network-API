
const router = require('express').Router();
const {getUsers,getSingleUser, createUser, updateUser, deleteUser} = require("../../controllers/users");
const User = require('../../models/user')

//api/users
router.route('/api/user').get(getUsers)

router.route('/api/users/:userId').get(getSingleUser)

router.route('/api/user').post(createUser)

router.route('/api/user/:userId').put(updateUser)

router.route('/api/user/:userId').delete(deleteUser)

router.route('/api/users/:userId/friends/:friendId').put(updateUser)

router.route('/api/users/:userId/friends/:friendId').delete(deleteUser)

module.exports = router;