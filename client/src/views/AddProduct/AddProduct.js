import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios"

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const addProducts= async()=>{
    const user = JSON.parse(localStorage.getItem('user' || "{}"));
    const response = await axios.post('/api/v1/products',{
      user:user._id, 
      productName,
      price,
      quantity,
      description,
    })
    console.log(response.data.data);

    if(response?.data?.data){
      alert("Your Product saved successfully");
      window.location.href = "/showproduct";
    }
    else{
      alert(response?.data?.message);
    }

  } ;


  return (
    <>
      <Navbar />
      <div>
      <form className="form-control mx-auto " action="">
        <p className="title">Add Your Products</p>
        <div className="input-field">
          <input
            required=""
            className="input"
            type="text"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <label className="label" for="input">
            Enter Product Name    
          </label>
        </div>

        <div className="input-field">
          <input
            required=""
            className="input"
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <label className="label" for="input">
            Enter Price
          </label>
        </div>
        <div className="input-field">
          <input
            required=""
            className="input"
            type="text"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <label className="label" for="input">
            Enter Quantity
          </label>
        </div>
        <div className="input-field">
        <textarea
          name="description"
          value={description}
          onChange={(e)=>{
            setDescription(e.target.value);
          }}
          placeholder="Description"
          className="w-full p-2 border rounded"
        ></textarea>
        </div>

        <button type="button" className="submit-btn bg-red-600"
         onClick={addProducts}
         >
          Add Products
        </button>
      </form>

      </div>

    </>
  );
}

export default AddProduct;
