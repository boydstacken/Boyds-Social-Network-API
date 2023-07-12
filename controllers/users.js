const User = require("../Models/User")


module.exports = {
    async getUsers(req,res){
    try {
        const user = await User.find(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
    },
    

}

// route to get all users
// app.get('/api/Users', async (req, res) => {
//     try {
//         //Using user model in route
//         const result = await user.find({})
//         res.status(200).json(result)
//     } catch (error) {
//         res.status(500).send(err)
//     }
// })
// app.get('/api/Users', async (req, res) => {
//     try 
//     const userId = req.params.username
//     const result = await user.aggregate([
//         {$match: {_id: mongoose.Types.ObjectId(userId) },
//     }
//         //Filter by a single user 
// ])
//     res.status(200).json(result)
// } catch (error) {
//     res.status(500).send(err)
// }
// try{

// }

// app.post()