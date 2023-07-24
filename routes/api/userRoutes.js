
const router = require('express').Router();
const {getUsers,getSingleUser, createUser, updateUser, deleteUser} = require("../../controllers/users");
const User = require('../../models/user')

//api/users
router.route('/').get(getUsers).post(createUser)

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

router.route('/:userId/friends/:friendId').put(updateUser).delete(deleteUser)


module.exports = router;