import { motion } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';

export const Cart = () => {
    const { items, removeItem, updateQuantity, cartTotal } = useCart();

    if (items.length === 0) {
        return (
            <div className="pt-24 pb-16 md:pt-32 md:pb-20 container mx-auto px-4 md:px-6 text-center">
                <div className="flex justify-center mb-4 md:mb-6 text-tallpop-pink/30">
                    <ShoppingBag size={64} />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">Your bag is empty</h2>
                <p className="text-gray-500 mb-6 md:mb-8 text-sm md:text-base px-4 md:px-0">Looks like you haven't added any glow-up essentials yet.</p>
                <Link to="/">
                    <Button className="text-sm md:text-base">Start Shopping</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-20 pb-16 md:pt-32 md:pb-20 container mx-auto px-4 md:px-6">
            <h1 className="text-2xl md:text-4xl font-display font-bold mb-6 md:mb-8 text-center">Your Bag</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4 md:space-y-6">
                    {items.map(item => (
                        <motion.div
                            layout
                            key={item.id}
                            className="flex gap-3 md:gap-6 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white border border-gray-100 shadow-sm"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg md:rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-sm md:text-lg">{item.name}</h3>
                                        <p className="text-xs md:text-sm text-gray-500">30 Sachets</p>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div className="flex items-center border border-gray-200 rounded-full h-7 md:h-8">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="px-2 md:px-3 hover:text-tallpop-pink text-sm"
                                        >-</button>
                                        <span className="w-5 md:w-6 text-center text-xs md:text-sm font-bold">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="px-2 md:px-3 hover:text-tallpop-pink text-sm"
                                        >+</button>
                                    </div>
                                    <div className="font-bold text-sm md:text-lg">₹{(item.price * item.quantity).toLocaleString()}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 sticky top-24 md:top-32">
                        <h3 className="font-bold text-xl mb-6">Order Summary</h3>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>₹{cartTotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="text-green-500 font-medium">Free</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-4 mb-8">
                            <div className="flex justify-between font-bold text-xl">
                                <span>Total</span>
                                <span>₹{cartTotal.toLocaleString()}</span>
                            </div>
                            <p className="text-xs text-gray-400 mt-2">Including GST</p>
                        </div>


                        <Link to="/checkout">
                            <Button size="lg" className="w-full mb-4" icon={<ArrowRight size={20} />}>
                                Proceed to Checkout
                            </Button>
                        </Link>

                        <div className="flex justify-center gap-2">
                            <img src="https://cdn.razorpay.com/static/assets/logo/payment_methods/upi.svg" className="h-4" alt="UPI" />
                            <img src="https://cdn.razorpay.com/static/assets/logo/payment_methods/visa.svg" className="h-4" alt="Visa" />
                            <img src="https://cdn.razorpay.com/static/assets/logo/payment_methods/mastercard.svg" className="h-4" alt="Mastercard" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
