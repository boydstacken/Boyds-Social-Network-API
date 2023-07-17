const router = require('express').Router();

const {getThoughts} = require("../../controllers/thoughts");

router.route('/').get(getThoughts)

router.post('/api/thoughts/:thoughtId/friends/:friendID', (req, res) => {
    const user_id = req.params.thoughtId.indexOf

})

router.delete('users/thoughtId/thought/:thought_id', (req, res) => {
    thoughtId = req.params.thought_id
    friendId = req.params.thought_id
})

res.status(200).json({message: 'Friend removed'})

module.exports = router;