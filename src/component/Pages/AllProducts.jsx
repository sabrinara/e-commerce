import axios from "axios";
import { useEffect, useState } from "react"; // Import useState
import { Link } from "react-router-dom";

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]); // Initialize allProducts with an empty array and use useState

    useEffect(() => {
        axios.get("/products.json")
            .then(res => setAllProducts(res.data))
            .catch(err => console.log(err));
    }, []); 
    return (
        <div className="py-10 bg-emerald-100">
            <div className="grid grid-cols-1 md:grid-cols-3  gap-10 m-10 md:m-14 lg:m-16">
                {allProducts.map((product, index) => (
                    <div key={product.id} data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}>
                        
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={product.img} className="w-full h-96 md:h-64 lg:h-full lg:object-center" alt="Product" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <div className="flex justify-between items-center gap-36">
                                <p>{product.category}</p>
                                <p className="text-cyan-900 font-bold justify-end"> <span className="text-black">{product.seller}</span></p>
                                </div>
                                <div className="card-actions">
                                    <div className="flex justify-between gap-28">
                                    <button className="bg-cyan-700 text-white py-2 px-4 rounded">Add to Cart</button>
                                    <button className="bg-cyan-700 text-white py-2 px-4 rounded">Details</button>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
