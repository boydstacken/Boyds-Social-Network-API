const mongoose = require ('mongoose');
const Thought = require('../Models/Thought');

module.exports = {
    //get all thought
    async getThoughts(req,res){
    try {
        const thoughts = await User.find(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
    },
    //get a single thought
    async getSingleThought(req, res) {
        try {
            const thought = await User.findOne({_id: req.params.thoughtId})
            .select('-__v')
            .lean()
        
            if(!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(user)
        }catch (err) {
            res.status(500).json(err);
        }
    },
    //creates new thought
    async createThought(req,res) {
        try {
            const thought = await Thought.create(req.body)
            res.json(thought)
        } catch (err) {
            this.res.status(500).json(err)
        }
    },
    async updateThought(req, res) {
        try {
          const thoughr = await Thought.findOneAndUpdate({ _id: req.params.thoughtId });
    
          if (!thought) {
            return res.status(404).json({ message: 'No such thought exists' })
          }

          res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
      
            if (!thought) {
              return res.status(404).json({ message: 'No thought user exists' })
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}