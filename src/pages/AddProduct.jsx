import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddProduct = () => {
    const [product, setproduct] = useState("")
    const [description, setdescription] = useState("")
    const [image, setimage] = useState("")
    const [price, setprice] = useState("")
    const [allProduct, setallProduct] = useState([])

    const addProduct = ()=>{

        const newProduct ={
            product,
            description,
            image,
            price
        }
        const  newAllProducts= [...allProduct, newProduct]
        setallProduct(newAllProducts)
        
        console.log("Submitted");
        console.log(allProduct);
    }
    


  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        addProduct()
        
    }} className="w-full max-w-xs p-5 bg-white rounded-lg font-mono">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unique-input">Add Product</label>
      <br />
      <input onChange={(e)=>setproduct(e.target.value)} className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" placeholder="Product name" type="text" id="unique-input" />
      <br />
      <input onChange={(e)=>setdescription(e.target.value)} className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" placeholder="Description" type="text" id="unique-input2" />
      <br />
      <input onChange={(e)=>setimage(e.target.value)} className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" placeholder="Image URL" type="text" id="unique-input2" />
      <br />
      <input onChange={(e)=>setprice(e.target.value)} className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" placeholder="Price" type="text" id="unique-input3" />
      <br />
      <button type='submit'>Add Product</button>
      <Link to={"/all-products"}><h1>View All Products</h1></Link>
    </form>
  );
}
export default AddProduct
