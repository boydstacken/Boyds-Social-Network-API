const router = require('express').Router();
const {getThoughts, getSingleThought, createThought, updateThought, deleteThought,createReaction, deleteReaction} = require("../../controllers/thoughts");

//api/thoughts
router.route('/').get(getThoughts).post(createThought)

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)


///api/thoughts/:thoughtId/reactions


router.route('/:thoughtId/reactions').post(createReaction)


router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;