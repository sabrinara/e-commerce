import { FaArrowAltCircleLeft, FaBoxOpen, FaDollarSign, FaHeart, FaStar } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { SiBrandfolder } from "react-icons/si";
import { LiaShippingFastSolid } from "react-icons/lia";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

const ProductDetails = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(product => product.id === id);
    const { name, category, img, price, ratings, ratingsCount, stock, quantity, seller, shipping } = product || {};
    const generateStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<FaStar key={i} className="text-yellow-500 inline" />);
        }
        return stars;
    };
    const handleAddToCart = (product) => {
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductInCart = existingCartItems.some(item => item.id === product.id);

        if (isProductInCart) {
            // If product is already in cart, show SweetAlert
            Swal.fire({
                title: 'Product is already in the cart!',
                icon: 'warning',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            // If product is not in cart, add it to cart
            const updatedCartItems = [...existingCartItems, product];
            localStorage.setItem('cart', JSON.stringify(updatedCartItems));
            Swal.fire({
                title: 'Added to cart!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/carts');
        }
    };
    return (
        <div className="flex justify-between gap-10">
            <div className="w-1/2">
                <figure><img src={img} className="w-full h-[480px] " alt="Product" /></figure>

            </div>
            <div className="w-1/2 py-10 m-10">
                <button className="mb-10 text-rose-600" onClick={() => navigate(-1)}><FaArrowAltCircleLeft className="text-rose-500 inline text-2xl " /> Go Back</button>
                <h1 className="text-3xl font-bold text-cyan-700 mb-4">{name}</h1>
                <p className="text-xl my-3"><SiBrandfolder className="text-sky-500 inline text-2xl" /> Brand: {seller}</p>
               <div className="flex justify-between my-2">
               <p className="text-xl "> <BiSolidCategoryAlt className="text-violet-700 inline text-2xl" /> Category: {category}</p>
                <p className="text-xl mr-12"><FaDollarSign className="text-sky-700 inline text-2xl" />{price}</p>
               </div>
                <div className="flex justify-between my-2">
                    <p className="text-2xl"><FaHeart className="text-pink-600 inline items-end" /> {ratingsCount}</p>
                    <p className="mr-10 text-2xl">{generateStars(ratings)}</p>
                </div>
                <div className="flex justify-between my-2">
               
                <p className="text-2xl "><FaBoxOpen className="text-sky-700 inline " /> {quantity}</p>
                <p className="text-2xl mr-12"><IoCart className="text-lime-700 inline text-3xl" /> {stock}</p>
                </div>
               

                <div className="flex justify-between my-2">
                    <p className="text-2xl"><LiaShippingFastSolid className="text-sky-700 inline text-2xl" /> {shipping}</p>
                    <button className="bg-cyan-700 text-white py-2 px-4 rounded mr-10" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;