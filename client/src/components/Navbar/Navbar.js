import React from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css"


function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to class="navbar-brand" href="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active ms-5" aria-current="page" to = "/"> Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5" to = "/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5" to ="/addproduct">AddProduct</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link ms-5" to ="/services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5" to ="/login">Login</Link>
        </li><li class="nav-item">
          <Link class="nav-link ms-5" to ="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar