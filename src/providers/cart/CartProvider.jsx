import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const productExists = cart.some(item => item._id === product._id);
        if (!productExists) {
            const updatedCart = [...cart, product];
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            toast.success('Product added to the cart.');
        } else {
            toast.error('Product is already in the cart.');
        }
    };
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(product => product._id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        toast.success('Product removed from the cart.');
    }
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
        toast.success('Cart cleared.');
    }
    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(localCart);
    }, [])

    const value = { cart, addToCart, removeFromCart, clearCart }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default CartProvider;