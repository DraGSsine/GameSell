import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  verified:{
    type:Boolean,
    default:false,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  userUpdates: {
    emailLastUpdate: {
      type: Date,
      default: Date.now,
      require:true
    },
    passwordLastUpdate: {
      type: Date,
      default: Date.now,
      require:true
    },
  },
});

export default mongoose.model("User", UserSchema);
