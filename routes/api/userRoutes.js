
const router = require('express').Router();
const {getUsers} = require("../../controllers/users");


router.route('/').get(getUsers)

router.get('/api/users/:userId', async (req, res)=> {
    const userId = req.params.userId
    try {
        const user = await user.findById(userId)
        .populate('thoughts')
        .populate('friends')
    
    res.status(200).json({message:'Got a single user by its id and populated thought and friend data', user});
} catch (error) {
    res.status(500).json({error: 'Failed to retreive user by its id with populated thought and friend data'});
}
});

router.post('/api/users/', async (req, res) => {
    try {
        const newUser = await UserActivation.create(req.body)
        
        res.status(201).json({message: 'Created a new user'})
    } catch (error) {
    res.status(200).json({message: 'Error in creating a new user'})
    }
})

router.put('/api/users/:userId/friends/:friendId', (req, res) => {
    const userId = req.params.userId
    res.status(200).json({message: 'Updated a user by its id'})
})

router.delete('/api/users/userId/friends/:friendId', (req, res) => {
    userId = req.params.userId
    friendId = req.params.friendId

    res.status(200).json({message: 'Friend removed'})

})

module.exports = router;
