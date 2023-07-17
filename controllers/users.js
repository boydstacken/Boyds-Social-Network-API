const User = require("../Models/User")


module.exports = {
    //get all users
    async getUsers(req,res){
    try {
        const users = await User.find(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
    },
    //get a single user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({_id: req.params.userId})
            .select('-__v')
            .lean()
        
            if(!student) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user)
        }catch (err) {
            res.status(500).json(err);
        }
    },
    //creates new user
    async createUser(req,res) {
        try {
            const user = await User.create(req.body)
            res.json(user)
        } catch (err) {
            this.res.status(500).json(err)
        }
    },
    //updates user
    async updateUser(req, res) {
        try {
          const user = await User.findOneAndUpdate({ _id: req.params.userId });
    
          if (!user) {
            return res.status(404).json({ message: 'No such user exists' })
          }

          res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
    },
    //deletes user
    async deleteUser(req, res) {
        try {
            const user = await Student.findOneAndRemove({ _id: req.params.userId });
      
            if (!student) {
              return res.status(404).json({ message: 'No such user exists' })
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    //POST to add a new friend to a user's friend list. DELETE to remove a friend from a user's friend list


        
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