import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";

// Existing imports and component definition...

const HomeProduct = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('/products.json')
            .then(res => setItems(res.data))
            .catch(err => console.log(err))
    }, []); // Add an empty dependency array to useEffect to run it only once

    const generateStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<FaStar key={i} className="text-yellow-500 inline" />);
        }
        return stars;
    };

    // Slice the items array to get only the first 6 items
    const slicedItems = items.slice(0, 5);

    return (
        <div>
            <h1 className="text-4xl text-center font-bold my-10 text-cyan-600 ">Products from Compy!</h1>
            <div>
                {slicedItems.length === 0 ? (
                    <p className="text-center text-3xl text-red-600 font-bold my-24">Cart is empty.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10 md:m-14 lg:m-16 rounded">
                        {slicedItems.map((item, index) => (
                            <div key={index} >
                                <div className="card bg-base-100 shadow-xl">
                                    <div className="flex flex-col md:flex-row justify-between ">
                                        <div className="w-full md:w-1/2">
                                            <figure><img src={item.img} className="w-full h-96 md:h-64 lg:h-full lg:object-center rounded" alt="product image" /></figure>
                                        </div>

                                        <div className="card-body w-full md:w-1/2">
                                            <h2 className="text-md">{item.name}</h2>
                                            <div className="flex justify-between  ">
                                                <p className="font-bold "> <span className="text-black">{item.seller}</span></p>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeProduct;
