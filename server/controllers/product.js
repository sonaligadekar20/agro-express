import Product from './../models/Product.js'

const postApiProduct = async (req,res)=>{
  const {user, productName, price, quantity, description} = req.body;

  try{
      const product = new Product({
          user,
          productName,
          price,
          quantity,
          description
      })
  
      const saveProducts = await product.save();
      res.json({
          success:true,
          data:saveProducts,
          message:"Product added successfully"
      })
  }catch(err){
      res.json({
          success:false,
          message:err.message
      })
  }
}

export {postApiProduct }