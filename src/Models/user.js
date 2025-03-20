const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLenght: 50,
      },
      lastName: {
        type: String,
        required: true,
      },
      emailId: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      
      },
      about: {
        type: String,
      },
      skills: {
        type: [String],
      },
},  {
    timestamps: true,
  })

  