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

const getApiProductsById = async(req, res)=>{
    const { id } = req.params;
  const findUser = await Product.find({ user: id }).populate("user");

  findUser.forEach((product) => {
    product.user.password = undefined;
  });
  res.json({
    success: true,
    data: findUser,
    message: "product successfully fetch by user ",
  });
}

const putApiTransactionsById = async(req,res)=>{
  const {id} = req.params;

  const {productName, price, quantity, description} = req.body;

  await Product.updateOne({_id : id},{$set:{
    productName,
    price,
    quantity,
    description
  }})

  try{
    const updateProducts = await Product.findOne({_id : id});
  
    res.json({
      success:true,
      data : updateProducts,
      message:'Update Successfully'
    })
  }
  catch(err){
    res.json({
      success:false,
      err:err.message
    })
  }

}

export {postApiProduct, getApiProductsById, putApiTransactionsById}