const mongoose = require ('mongoose');

//reaction Schema is created with designated fields
const reactionsSchema = new mongoose.Schema({
    reactionId: {type: mongoose.Types.ObjectId, default: new mongoose.Types.ObjectId},
    reactionBody: {type: String, required: true},
    username: {type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: {type: Date, default: Date.now},
})
    reactionsSchema.virtual('officialCreatedAt').get(function (){
        const officialCreatedAt = this.createdAt.toLocaleString();
        return officialCreatedAt;
    })


reactionsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

module.exports = Reaction;

//thought Schema is created with designated fields
const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, minlength: 1, maxlength: 280},
    createdAt: {type: Date, default: Date.now},
    username: {type: String, required: true},
    reactions: [reactionsSchema],
})
    thoughtSchema.virtual('officialCreatedAt').get(function (){
        const officialCreatedAt = this.createdAt.toLocaleString();
        return officialCreatedAt;
    })

const document = await thought.findById(documentId)
console.log(document.officalCreatedAt)

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = mongoose.model('Thought', thoughtSchema)

module.exports = Thought;