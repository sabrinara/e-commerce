import axios from "axios";
import { useEffect, useState } from "react"; // Import useState
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]); // Initialize allProducts with an empty array and use useState
    const navigate = useNavigate();

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

    const handleAddToCart = (product) => {
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCartItems = [...existingCartItems, product];
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        Swal.fire({
           title: 'Added to cart!',
           icon: 'success',
           showConfirmButton: false,
           timer: 1500
        })
        navigate('/carts')
        
        
    };
    return (
        <div className="py-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 m-10 md:m-14 lg:m-16">
                {allProducts.map((product, index) => (
                    <div key={product.id} data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}>
                        
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={product.img} className="w-full h-96 md:h-64 lg:h-full lg:object-center" alt="Product" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <div className="flex justify-between items-center  gap-28">
                                <p>{product.category}</p>
                                <p className="text-cyan-900 font-bold "> <span className="text-black">{product.seller}</span></p>
                                </div>
                                <div className="flex justify-between items-center gap-32">
                                    
                                     <p>Price: <span className="text-red-600">{product.price}$</span></p>
                                     <p className="">{generateStars(product.ratings)}</p> 
                                </div>
                               
                               
                                <div className="card-actions">
                                    <div className="flex justify-between gap-28">
                                    <button className="bg-cyan-700 text-white py-2 px-4 rounded" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                    <Link to={`/allProducts/${product.id}`}><button className="bg-cyan-700 text-white py-2 px-4 rounded">View Details</button></Link>
                                    {/* <button className="bg-cyan-700 text-white py-2 px-4 rounded">Details</button> */}
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
