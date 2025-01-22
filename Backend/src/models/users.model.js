/**
 * 用户模型
 */

const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: null
    },
    bio: {
        type: String,
        default: null
    },
    favorites: {
        type: [Schema.Types.ObjectId],
        default: []
    },
    blogs: {
        type: [Schema.Types.ObjectId],
        default: []
    }
},
{
    timestamps: true
})

const User = mongoose.model('users',userSchema)

module.exports = {
    User
}

