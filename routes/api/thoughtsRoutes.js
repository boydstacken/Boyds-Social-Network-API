const router = require('express').Router();
const {getThoughts} = require("../../controllers/thoughts");

router.route('/').get(getThoughts)

router.get('/api/thoughts/:thoughtId', (req, res)=> {
const thoughtId = req.params.thoughtId

res.status(200).json({message:'Got single thought by id'})
})

router.post('/api/thoughts ', (req, res) => {
    const {userId, content} = req.body
    const newThought = createThought(content)

    res.status(200).json({message:'Posted to create a new thought'})
})

router.put('/api/thoughts/:thoughtId', (req, res) => {
    const thoughtId = req.params.thoughtId
    const updatedContent = req.params.content
    const updatedThought = updateThought(thoughtId, updatedContent)

    res.status(200).json({message:'Updated a single thought by its id'})
})

router.delete('/api/thoughts/:thoughtId', (req, res) => {
    const thoughtId = req.params.thoughtId
    const deletedThought = removedThought(thoughtId)

    res.status(200).json({message:'Deleted a single thought by its id'})
})

router.post('/api/thoughts/:thoughtId/reactions', (req, res) => {
    const thoughtId = req.params.thoughtId
    const {reaction} = req.body
    const createdReaction = createReactionInThought(thoughtId, reaction)

    res.status(200).json({message:'Created a reaction by its id'})
})

router.delete('/api/thoughts/:thoughtId/reactions', (req, res) => {
    const thoughtId = req.params.thoughtId
    const reactionId = req.params.reactionId

    res.status(200).json({message:'Deleted a reaction by its id'})

})
module.exports = router;