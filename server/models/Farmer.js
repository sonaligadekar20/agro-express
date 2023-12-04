// models/farmer.js
import {Schema, model} from mongoose;

const farmerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  contactNumber: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
},{timestamps:true});

const Farmer = model("Farmer", farmerSchema);

export default Farmer;