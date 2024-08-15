import AOS from 'aos';
import { FaTrashAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import useCart from '../../hooks/useCart';
AOS.init({ duration: 1000 });

const Cart = () => {
    const { cart, clearCart, removeFromCart } = useCart();

    const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Cart | LuxeView</title>
            </Helmet>
            <div data-aos="fade-up" className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-[#1A1A2E] mb-6">Shopping Cart</h1>

                {cart.length === 0 ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-[#1A1A2E]">Your Cart is Empty</h2>
                        <p className="text-gray-600 mt-4">Add some items to your cart to see them here.</p>
                    </div>
                ) : (
                    <div>
                        <button
                            onClick={clearCart}
                            className="bg-[#E94560] text-white px-4 py-2 rounded-md hover:bg-[#0F3460] focus:outline-none mb-6"
                        >
                            Clear All
                        </button>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                                <thead className="bg-[#1A1A2E] text-white">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Image</th>
                                        <th className="px-4 py-2 text-left">Product Name</th>
                                        <th className="px-4 py-2 text-left">Description</th>
                                        <th className="px-4 py-2 text-left">Price</th>
                                        <th className="px-4 py-2 text-left">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(item => (
                                        <tr key={item._id} className="border-b hover:bg-gray-100 transition-all">
                                            <td className="px-4 py-2">
                                                <img src={item.productImage} alt={item.productName} className="w-20 h-20 object-cover rounded-md" />
                                            </td>
                                            <td className="px-4 py-2 text-[#1A1A2E]">{item.productName}</td>
                                            <td className="px-4 py-2 text-gray-600">{item.description}</td>
                                            <td className="px-4 py-2 text-[#E94560] font-bold">${item.price.toFixed(2)}</td>
                                            <td className="px-4 py-2">
                                                <button
                                                    onClick={() => removeFromCart(item._id)}
                                                    className="bg-[#E94560] text-white px-4 py-2 rounded-md hover:bg-[#0F3460] focus:outline-none flex items-center gap-2"
                                                >
                                                    <FaTrashAlt /> Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-6 flex justify-between items-center">
                            <p className="text-2xl font-bold text-[#1A1A2E]">Total Amount: ${totalAmount.toFixed(2)}</p>
                            <button
                                onClick={() => alert('Proceed to checkout')}
                                className="bg-[#E94560] text-white px-6 py-3 rounded-md hover:bg-[#0F3460] focus:outline-none"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
