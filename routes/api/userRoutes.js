
const router = require('express').Router();
const {getUsers} = require("../../controllers/users");


router.route('/').get(getUsers)

router.post('/api/users/:userId/friends/:friendID', (req, res) => {
    const user_id = req.params.userId.indexOf

})

router.delete('users/userId/friends/:friend_id', (req, res) => {
    userId = req.params.user_id
    friendId = req.params.friend_id
})

res.status(200).json({message: 'Friend removed'})

module.exports = router;
