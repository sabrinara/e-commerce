import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/products.json')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    })
    return (
        <div className="overflow-x-auto">
            <h1 className='text-4xl my-4 text-center md:mr-20 text-cyan-600 font-bold '>All Products</h1>
           <table className="table w-full">
               <tr className="text-center text-xl ">
                   <th>No</th>
                   <th>Name</th>
                   <th className="">Image</th>
                   <th >Price</th>
                   <th>Quantity</th>
                   <th>Stock</th>
                   <th>Category</th>
                   <th colSpan={3}>Actions</th>
               </tr>
               {
                   products.map((product, index) => 
                    <tr key={product.id} className="text-center mx-5">
                       <td>{index+1}</td>
                       <td>{product.name}</td>
                       <td><img src={product.img} alt="product"  className="w-16 h-16"/></td>
                       <td >{product.price}</td>
                       <td>{product.quantity}</td>
                       <td>{product.stock}</td>
                       <td>{product.category}</td>
                       <td><Link to={`/allProducts/${product.id}`}><button className="px-3  py-1 bg-blue-700 text-white rounded">View</button></Link></td>
                       <td><button className="px-3  py-1 bg-green-700 text-white rounded ">Edit</button></td>
                       <td><button className="px-3  py-1 bg-red-700 text-white rounded">Delete</button></td>

                   </tr>
                   )
               }
           </table>
        </div>
    );
};

export default ProductList;