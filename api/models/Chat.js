const mongoose = require('mongoose');

const chatModel = mongoose.Schema({
    Name: {
        type: String,
    },
    // decides if a particular chat is direct or grp chat
    IsGroupChat: {
        type: Boolean,
    },
    // list of all the users involved
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    lastMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    

});

//export 
const Chat = mongoose.model("Chat", chatModel)
module.exports = Chat;
 