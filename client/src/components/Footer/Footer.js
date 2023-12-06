import React from 'react';
import { Link } from "react-router-dom"
import './Footer.css';


function Footer() {
  return (
    <>

    <footer class="text-center text-lg-start bg-red text-primary p-2 mt-5">
        
     <section class="">
       <div class="container text-center text-md-start mt-5 text-light">
         
         <div class="row mt-3">
          
           <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
             <p class="text-uppercase fw-bold mb-4 fs-4">
               Agro Express
             </p>
             <p class="fs-5">
             The "Agro Express" project is a modern web application designed to help users explore and learn more about agricultural .
             </p>
           </div>
           
           <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
           
             <p class="text-uppercase fw-bold mb-4 fs-4">
               Quick Links
             </p>
             <p class="fs-fs-5" >
               <Link class="text-reset" to={"/"}>Home </Link>
             </p>
             <p  class="fs-fs-5">
             <Link class="text-reset" to={"/about"}>About </Link>
             </p>
             <p  class="fs-fs-5">
             <Link class="text-reset" to={"/addproduct"}>AddProduct </Link>
             </p>
             <p  class="fs-fs-5">
               <Link class="text-reset" to={"/showproduct"}>ShowProduct</Link>
             </p> 
           </div>
         
           <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
             <p class="text-uppercase fw-bold mb-4 fs-4">
               Useful links
             </p>
             <p class="fs-fs-5">
               <a href="#!" class="text-reset">Pricing</a>
             </p>
             <p class="fs-fs-5">
               <a href="#!" class="text-reset">Settings</a>
             </p>
             <p class="fs-fs-5">
               <a href="#!" class="text-reset">Orders</a>
             </p>
             <p class="fs-fs-5">
               <a href="#!" class="text-reset">Help</a>
             </p>
           </div>
          
           <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             
             <p class="text-uppercase fw-bold mb-4 fs-4">Contact</p>
           
           
           </div>
       
         </div>
   
       </div>
     </section>
   
     
    
   </footer>
   </>
    
  )
}
  
export default Footer;

