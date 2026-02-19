import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

export const Checkout = () => {
    const { items, cartTotal, clearCart } = useCart();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        phone: ''
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const orderData = {
                id: crypto.randomUUID(),
                customer_name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                address: formData.address,
                city: formData.city,
                zip: formData.zip,
                phone: formData.phone,
                items: items.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                })),
                total: cartTotal,
                status: 'pending'
            };

            const { error } = await supabase
                .from('orders')
                .insert(orderData);

            if (error) {
                console.error('Order error:', error);
                alert('Failed to place order. Please try again.');
            } else {
                clearCart();
                setIsSuccess(true);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 text-center flex flex-col items-center justify-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6"
                >
                    <CheckCircle size={48} />
                </motion.div>
                <h2 className="text-4xl font-display font-bold mb-4">Order Confirmed!</h2>
                <p className="text-gray-500 mb-8 max-w-md">
                    Thank you for popping into your glow-up era! We've sent a confirmation email to {formData.email}.
                </p>
                <Link to="/">
                    <Button>Back to Home</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <Link to="/cart" className="inline-flex items-center text-gray-500 hover:text-tallpop-pink mb-8">
                <ArrowLeft size={20} className="mr-2" /> Back to Cart
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-tallpop-pink transition-colors"
                                placeholder="idol@tallpop.com"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    required
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-tallpop-pink transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    required
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-tallpop-pink transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Address</label>
                            <input
                                required
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-tallpop-pink transition-colors"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">City</label>
                                <input
                                    required
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-tallpop-pink transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">ZIP Code</label>
                                <input
                                    required
                                    type="text"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-tallpop-pink transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Phone</label>
                            <input
                                required
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-tallpop-pink transition-colors"
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full mt-4" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 size={20} className="animate-spin mr-2" />
                                    Processing...
                                </>
                            ) : (
                                `Pay ₹${cartTotal.toLocaleString()}`
                            )}
                        </Button>

                        <p className="text-xs text-center text-gray-400">
                            Secure payment via Razorpay. Your data is safe.
                        </p>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 p-8 rounded-3xl h-fit">
                    <h3 className="font-bold text-xl mb-6">Your Order</h3>
                    <div className="space-y-4 mb-6">
                        {items.map(item => (
                            <div key={item.id} className="flex gap-4">
                                <div className="w-16 h-16 rounded-lg bg-white overflow-hidden relative">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    <span className="absolute top-0 right-0 bg-tallpop-pink text-white text-xs font-bold px-1.5 py-0.5 rounded-bl-lg">
                                        {item.quantity}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">{item.name}</h4>
                                    <p className="text-sm text-gray-500">₹{item.price.toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>₹{cartTotal.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
