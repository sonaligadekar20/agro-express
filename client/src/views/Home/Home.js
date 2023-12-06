import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import farImg from "./farmer.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-evenly mt-4">
        <div>
          {" "}
          <img src={farImg} className="h-96" />
        </div>
        <div className="mt-2 w-full sm:w-full, p-3 lg:w-1/2">
          <h1>
            Welcome to the <span className="text-red-600">Agro-Express!</span>
          </h1>
          <div className="mt-4">
            <p>
              We are a group of passionate individuals who believe in supporting
              local agriculture and providing fresh produce to our community.
            </p>
            <p>
              Our mission is to provide the best quality of fresh produce to our
              community.
            </p>
            <p>
              Our vision is to provide the best quality of fresh produce to our
              community.
            </p>
            <p>
              We are committed to providing a safe and healthy environment for
              all customers, employees, and vendors.
            </p>
            <p>
              We are a small, local market that offers you the opportunity to
              purchase fresh fruits and vegetables directly from our growers.
            </p>

<Link to="/addproduct" className="no-underline"><button className="d-block mx-auto mt-4 bg-red-600 py-2 px-10 text-white rounded-lg">Buy your Products</button></Link>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
