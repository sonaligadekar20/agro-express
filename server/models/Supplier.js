// models/supplier.js
import { Schema, model } from "mongoose";

const supplierSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  
  supplierPerson: {
    type: String,
    required: true,
    enum: ["JUNED", "NIKITA", "SONALI"],
  },
  contactNumber: {
    type: String,
    required: true,
  },
  vehical: {
    type: String,
    required: true,
    enum: ["truck", "train"],
  },
  vehicalRegNumber: {
    type: String,
    required: true,
    enum: ["112", "227", "225", "225"],
  },

  from: {
    type: String,
    required: true,
    enum: ["mumbai", "pune", "nagpur", "rahuri"],
  },

  to: {
    type: String,
    required: true,
    enum: ["mumbai", "pune", "nagpur", "rahuri"],
  }
},{timestamps:true});

const Supplier = model("Supplier", supplierSchema);

export default Supplier;