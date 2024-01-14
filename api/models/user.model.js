import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username:{
    type: String, //only we can have string as username not boolean or other
    required: true, //we can't add a user without username
    unique: true, //all username must be unique
  },
  email:{
    type: String, //only we can have string as username not boolean or other
    required: true, //we can't add a user without username
    unique: true, //all username must be unique
  },
  password:{
    type: String, //only we can have string as username not boolean or other
    required: true, //we can't add a user without username
  }
}, {timestamps: true} //means mongodb will add the time of creation and change in it
); 

const User = mongoose.model('User', userSchema);

export default User;