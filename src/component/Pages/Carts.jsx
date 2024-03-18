import { useState, useEffect } from "react";

const Carts = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Retrieve cart items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCartItems);
    }, []);

    const handleRemoveFromCart = (index) => {
        // Remove item from cart
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        // Update state and local storage
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <p>{item.name}</p>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carts;
