const router = require('express').Router();
const {getThoughts, getSingleThought, createThought, updateThought, deleteThought,createReaction, deleteReaction} = require("../../controllers/thoughts");
const Thought = require('../../models/user')


//api/thoughts
router.route('/').get(getThoughts)

router.route('thoughts/:thoughtId').get(getSingleThought)

router.route('thoughts').post(createThought)

router.route('thoughts/:thoughtId').put(updateThought)

router.route('/thoughts/:thoughtId').delete(deleteThought)

///api/thoughts/:thoughtId/reactions


router.route('/thoughts/:thoughtId/reactions').post(createReaction)


router.route('thoughts/:userId/friends/:friendId').delete(deleteReaction)

module.exports = router;