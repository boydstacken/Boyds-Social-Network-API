const router = require('express').Router();
const {getThoughts, getSingleThought, createThought, updateThought, deleteThought,createReaction, deleteReaction} = require("../../controllers/thoughts");

//api/thoughts
router.route('/api/thoughts').get(getThoughts)

router.route('/api/thughts/:thoughtId').get(getSingleThought)

router.route('/api/thoughts').post(createThought).push(createThought)

router.route('/api/thoughts/:thoughtId').put(updateThought)

router.route('/api/thoughts/:thoughtId').delete(deleteThought)

///api/thoughts/:thoughtId/reactions


router.route('api/thoughts/:thoughtId/reactions').post(createReaction)


router.route('/api/thought/:userId/friends/:friendId').delete(deleteReaction)

module.exports = router;