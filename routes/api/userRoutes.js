
const router = require('express').Router();
const {getUsers,getSingleUser, createUser, updateUser, deleteUser, addFriendToUser} = require("../../controllers/users");
const User = require('../../models/user')

//api/users
router.route('/').get(getUsers).post(createUser)

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

router.route('/:userId/friends/:friendId').put(addFriendToUser).delete(deleteUser)


module.exports = router;