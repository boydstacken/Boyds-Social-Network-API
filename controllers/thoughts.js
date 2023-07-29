const mongoose = require ('mongoose');
const Thought = require('../Models/Thought');

module.exports = {
    //get all thoughts
    async getThoughts(req, res){
    try {
        const thoughts = await Thought.find(req.body);
        res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
   },
    //get a single thought
    async getSingleThought(req, res) {
        try {
            const thoughts = await Thought.findOne({_id: req.params.thoughtId})
            .select('-__v')
            .lean()
        
            if(!thoughts) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thoughts)
        }catch (err) {
            res.status(500).json(err);
        }
    },
    //creates new thought
    async createThought(req,res) {
      console.log(req.body)
        try {
            const thoughts = await Thought.create(req.body)
            res.json(thoughts)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //updates thought
    async updateThought(req, res) {
      console.log(req.body)
        try {
          const thoughts = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body, {new: true});
          if (!thoughts) {
            return res.status(404).json({ message: 'No such thought exists' })
          }

          res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
    },
    //deletes thought
    async deleteThought(req, res) {
        try {
            const thoughts = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
            if (!thoughts) {
              return res.status(404).json({ message: 'No thought user exists' })
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //creates reaction by id
    async createReaction (req, res) {
            console.log(req.body)
      try {
              usersSchema = await findOneAndUpdate(
                  {_id: req.params.thoughtId},
                  {$addtoSet: {reactions: req.body}},
                  {runValidators: true, new:true} 
              )
              if (!usersSchema) {
                return res.status(404).json({ message: 'No such reaction exists' })
              }
    
              res.json(usersSchema);
        } catch (err) {
          res.status(500).json(err);
        }
    },
    //deletes and removes reaction by id
    async deleteReaction (req, res) {
        try {
          const reactions = await Thought.delete({ _id: req.params.reactionId });
    
          if (!reactions) {
            return res.status(404).json({ message: 'No such reaction exists' })
          }

          res.json(reactions);
    } catch (err) {
      res.status(500).json(err);
    }
    }
}