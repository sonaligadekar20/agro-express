import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

function SaleProduct() {
    const [farmerId, setFarmerId] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [supplierName, setSupplierName] = useState();
    const [carriers, setCarriers] = useState();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [vehical, setVehical] = useState("truck");

    return (
        <div>
            <Navbar />
            <div class="flex flex-col items-center justify-center h-screen "
                style={{ backgroundColor: "#fefafa" }}
            >
                <div class="w-full max-w-[500px] bg-white-100 rounded-lg shadow-md p-4 bg-white">
                    <p className="title">Sale Products</p>

                    <form class="flex flex-wrap">
                        <div className="input-field w-full">
                            <input
                                required=""
                                className="input"
                                type="text"
                                value={farmerId}
                                onChange={(e) => setFarmerId(e.target.value)}
                            />

                            <label className="label" htmlFor="input">
                                Farmers ID
                            </label>
                        </div>

                        <div className="input-field w-full">
                            <input
                                required=""
                                className="input"
                                type="text"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                            />
                            <label className="label" htmlFor="input">
                                Contact Number
                            </label>
                        </div>
            
                        <select
                            className="p-2 border rounded mt-3 w-50"
                            value={supplierName}
                            onChange={(e) => setSupplierName(e.target.value)}
                        >
                            <option className="">
                                Select Supplier Names
                            </option>
                            <option value="kedar">Kedar</option>
                            <option value="rupesh">Rupesh</option>
                            <option value="ramesh">Ramesh</option>
                            <option value="jayesh">Jayesh</option>
                            <option value="rameshwar">Rameshwar</option>
                            <option value="suresh">Suresh</option>
                        </select>

                        <select
                            className="p-2 border rounded mt-3 w-50"
                            value={carriers}
                            onChange={(e) => setCarriers(e.target.value)}
                        >
                            <option className="">
                                Goods Carriers Number
                            </option>
                            <option value="kedar">112</option>
                            <option value="rupesh">227</option>
                            <option value="ramesh">225</option>
                            <option value="jayesh">229</option>
                            <option value="rameshwar">3000</option>
                            <option value="suresh">2929</option>
                            <option value="suresh">247</option>
                            <option value="suresh">657</option>
                        </select>


                        <select
                            className="p-2 border rounded mt-3 w-50"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                        >
                            <option className="">
                                Select City (from)
                            </option>
                            <option value="rahuri">Rahuri</option>
                            <option value="pune">Pune</option>
                            <option value="nagpur">Nagpur</option>
                            <option value="mumbai">Mumbai</option>
                        </select>

                        <select
                            className="p-2 border rounded mt-3 w-50"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                        >
                            <option className="ms-2">
                                Select City (from)
                            </option>
                            <option value="mumbai">Mumbai</option>
                            <option value="pune">Pune</option>
                            <option value="nagpur">Nagpur</option>
                            <option value="rahuri">Rahuri</option>
                        </select>


                        <div className="mt-3 mx-auto">
                            <label className="mr-4" htmlFor="input">
                                <input type="radio"
                                    name="vehical"
                                    className="mr-2"
                                    value={vehical}
                                    checked={vehical === "truck"}
                                    onChange={() => setVehical("truck")}
                                />
                                Truck
                            </label>
                            <label className="mr-4" htmlFor="input">
                                <input
                                    type="radio"
                                    name="vehical"
                                    className="mr-2"
                                    value={vehical}
                                    checked={vehical === "train"}
                                    onChange={() => setVehical("train")}
                                />
                                Train
                            </label>

                            <label className="mr-4" htmlFor="input">
                                <input
                                    type="radio"
                                    name="vehical"
                                    className="mr-2"
                                    value={vehical}
                                    checked={vehical === "bus"}
                                    onChange={() => setVehical("bus")}
                                />
                                Bus
                            </label>
                        </div>

                    </form>
                    <div className="text-center">
                        <button type="button" className="submit-btn bg-red-600 px-5 mt-4"
                        >
                            Supply Products
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaleProduct;
