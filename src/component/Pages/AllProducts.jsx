import axios from "axios";
import { useEffect, useState } from "react"; // Import useState
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]); // Initialize allProducts with an empty array and use useState

    useEffect(() => {
        axios.get("/products.json")
            .then(res => setAllProducts(res.data))
            .catch(err => console.log(err));
    }, []); 

    const generateStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<FaStar key={i} className="text-yellow-500 inline" />);
        }
        return stars;
    };
    return (
        <div className="py-10 bg-emerald-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 m-10 md:m-14 lg:m-16">
                {allProducts.map((product, index) => (
                    <div key={product.id} data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}>
                        
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={product.img} className="w-full h-96 md:h-64 lg:h-full lg:object-center" alt="Product" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <div className="flex justify-between items-center gap-28">
                                <p>{product.category}</p>
                                <p className="text-cyan-900 font-bold justify-end"> <span className="text-black">{product.seller}</span></p>
                                </div>
                                <div className="flex justify-between items-center gap-32">
                                    
                                     <p>Price: <span className="text-red-600">{product.price}$</span></p>
                                     <p className="">{generateStars(product.ratings)}</p> 
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
