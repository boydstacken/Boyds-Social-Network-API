const mongoose = require ('mongoose');

//userSchema is created with designated fields
const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true, trim:true},
    email: {type: String, required: true, unique: true, trim: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']},
    thoughts: [{type: mongoose.Types.ObjectId, ref: 'thought'}],
    friends: [{type: mongoose.Types.ObjectId, ref: 'user'}],
})

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = mongoose.model('User', userSchema);

module.exports = User;