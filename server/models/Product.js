// models/product.js
import {Schema, model} from "mongoose"

const productSchema = new Schema({
farmer: {
    type: Schema.Types.ObjectId,
    ref: 'Farmer',
  },
  productName: {
    type: String,
    required: true,
   
  },
  description: {
    type: String,
    required: true,
  }
});

const Product = model('Product', productSchema);

export default Product;