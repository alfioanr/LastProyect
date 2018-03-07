const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var MessageSchema = new Schema({
  sender: {type: mongoose.Schema.Types.ObjectId,ref: "User"},
  messages: [
    {
      message: String,
    }
  ],
  receiver:{type: mongoose.Schema.Types.ObjectId,ref: "User"}
}); /* owner Objectid*/


  //destinatario //objectid
  //mensaje // el mensaje entre ambos

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
