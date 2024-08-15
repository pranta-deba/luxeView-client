import { useContext } from 'react';
import { CartContext } from '../providers/cart/CartProvider';

const useCart = () => {
    const all = useContext(CartContext);
    return all
};

export default useCart;