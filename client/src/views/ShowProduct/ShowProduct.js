import React, { useEffect, useState } from "react";
import "./ShowProduct.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

function ShowProduct() {
  const [user, setUser] = useState({});
  const [myProduct, setmyProduct] = useState([]);

  const loadmyProduct = async () => {
    const userId = user._id;
    if (!userId) {
      return;
    }
    const response = await axios.get(`/api/v1/products/user/${userId}`);
    const productData = response?.data?.data;
console.log(productData);
    setmyProduct(productData);
  };

  useEffect(
    () => {
      loadmyProduct();
    },
    [user],
    [myProduct]
  );

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user" || "{}"));
    if (storageUser) {
      setUser(storageUser);
    } else {
      alert("login first");
    }
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-center my-3 text-red-500">My Products</h1>
      </div>
     {
      myProduct.map((product, i)=>{
        const{description, price,productName,quantity} = product
        return(
          <div className="p-3"> 
          <div key={i} className="border lg:w-4/6 sm:w-96 mx-auto p-3 px-5 bg-white rounded-md relative" style={{ boxShadow: "2px 2px 5px rgba(0,0,0,0.2)" }}>
            <p><b>Product Name :</b>  {productName} <span className="ms-5"><b>Price : ₹ </b>{price}</span>  
            <span className="ms-5" > <b>Product quantity :</b> {quantity} kg</span>
            </p>
            <hr/>
             <p><b>Product description :</b>  {description}</p>
          </div>
          </div>
        )
      })
     }
    </>
  );
}

export default ShowProduct;
