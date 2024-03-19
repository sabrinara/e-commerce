import { useState, useEffect } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'; 

const Carts = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Retrieve cart items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCartItems);
    }, []);
    const generateStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<FaStar key={i} className="text-yellow-500 inline" />);
        }
        return stars;
    };
    const handleRemoveFromCart = (index) => {
        // Remove item from cart
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        // Update state and local storage
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
        Swal.fire({
            title: 'Removed from cart!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        })
    };

    return (
        <div>
            {cartItems.length === 0 ? (
                <p className="text-center text-3xl text-red-600 font-bold my-24">Cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10 md:m-14 lg:m-16 rounded">
                    {cartItems.map((item, index) => (
                        <div key={index} >
                            <div className="card  bg-base-100 shadow-xl">
                                <div className="flex flex-col md:flex-row justify-between ">
                                    <div className="w-full md:w-1/2">
                                        <figure><img src={item.img} className="w-full h-96 md:h-64 lg:h-full lg:object-center rounded" alt="product image" /></figure>
                                    </div>

                                    <div className="card-body w-full md:w-1/2">
                                        <h2 className="text-md">{item.name}</h2>
                                        <div className="flex justify-between  ">
                                             <p className=" font-bold "> <span className="text-black">{item.seller}</span></p>
                                             <p className="text-right"><IoCart className="text-lime-700 inline " />{item.stock}</p>
                                        </div>
                                       

                                        <p className="">{item.category}</p>
                                        <div className="flex justify-between items-center ">
                                      
                                            <p><FaHeart className="text-pink-600 inline items-end" /> {item.ratingsCount}</p>
                                            <Link to={`/allProducts/${item.id}`}><button className="bg-cyan-600 text-white py-1 px-2 text-sm rounded text-end">View</button></Link>
                                        </div>

                                        <div className="flex justify-between items-center ">

                                            <p>Price: <span className="text-red-600">{item.price}$</span></p>
                                            <p className="text-right">{generateStars(item.ratings)}</p>
                                        </div>
                                        <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded" onClick={() => handleRemoveFromCart(index)}>Remove</button>


                                    </div>
                                </div>

                            </div>
                            {/* <p>{item.name}</p>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => handleRemoveFromCart(index)}>Remove</button> */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carts;
