const router = require('express').Router();
const {getThoughts, getSingleThought, createThought, updateThought, deleteThought,createReaction, deleteReaction} = require("../../controllers/thoughts");

//api/thoughts
router.route('/').get(getThoughts)

router.route('/api/thoughts/:thoughtId').get(getSingleThought)

router.route('/api/thoughts').post(createThought)

router.route('/api/thoughts/:thoughtId').put(updateThought)

router.route('/api/thoughts/:thoughtId').delete(deleteThought)

///api/thoughts/:thoughtId/reactions


router.route('api/thoughts/:thoughtId/reactions').post(createReaction)


router.route('/api/thought/:userId/friends/:friendId').delete(deleteReaction)

module.exports = router;