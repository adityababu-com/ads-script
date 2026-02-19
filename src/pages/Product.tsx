import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Check, ShieldCheck, Leaf, Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const variants = {
    sakura: {
        name: 'Sakura Berry Pop',
        color: 'bg-pink-200',
        accent: 'text-pink-500',
        price: '₹1,499',
        description: 'Sweet, floral, and bursting with strawberry-cherry notes. Perfect for that soft-girl aesthetic.',
        ingredients: ['Hydrolyzed Collagen', 'Glutathione', 'Vitamin C', 'Sakura Extract'],
        images: [
            'https://images.unsplash.com/photo-1703905424956-a21a02769117?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1604212485216-3397090e9825?auto=format&fit=crop&w=1400&q=80',
        ]
    },
    peach: {
        name: 'Peach Blossom Glow',
        color: 'bg-orange-200',
        accent: 'text-orange-500',
        price: '₹1,499',
        description: 'Juicy, refreshing peach flavor. Like biting into a summer fruit while listening to upbeat pop.',
        ingredients: ['Hydrolyzed Collagen', 'Peach Extract', 'Hyaluronic Acid', 'Vitamin D3'],
        images: [
            'https://images.unsplash.com/photo-1703905424975-e3648cdeff31?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1714317634651-624c031a05b8?auto=format&fit=crop&w=1400&q=80',
        ]
    },
    blueberry: {
        name: 'Blueberry Starlight',
        color: 'bg-indigo-200',
        accent: 'text-indigo-500',
        price: '₹1,599',
        description: 'Cool, calming blueberry with a hint of lavender. For the mysterious, dreamy idol vibe.',
        ingredients: ['Hydrolyzed Collagen', 'Blueberry Extract', 'Magnesium', 'Zinc'],
        images: [
            'https://images.unsplash.com/photo-1723015973566-1cb80ebe9aa9?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1698755302257-435f4fd64fee?auto=format&fit=crop&w=1400&q=80',
        ]
    }
};

export const Product = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const initialVariant = (id && id in variants) ? (id as keyof typeof variants) : 'sakura';
    const [selectedVariant, setSelectedVariant] = useState<keyof typeof variants>(initialVariant);
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);
    const { addItem } = useCart();

    useEffect(() => {
        if (id && id in variants) {
            setSelectedVariant(id as keyof typeof variants);
        }
        window.scrollTo(0, 0);
    }, [id]);

    const product = variants[selectedVariant];

    return (
        <div className="pt-16 pb-20 md:pt-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedVariant}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="relative aspect-square md:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                            >
                                <img
                                    src={product.images[activeImage]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-tallpop-dark">
                                    Premium
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        <div className="flex gap-3 justify-center md:justify-start">
                            {product.images.map((img: string, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-tallpop-pink scale-110' : 'border-transparent opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="px-2 md:px-0">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span className="text-xs md:text-sm text-gray-500">(1,248 reviews)</span>
                        </div>

                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-2 text-tallpop-dark">{product.name}</h1>
                        <p className="text-base md:text-xl text-gray-400 mb-4 md:mb-6">Height + Glow Powder (30 Sachets)</p>

                        <div className="text-2xl md:text-3xl font-bold text-tallpop-pink mb-4 md:mb-6">{product.price}</div>

                        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
                            {product.description} Packed with premium ingredients to support your natural growth potential and give you that idol-like radiance from within.
                        </p>

                        {/* Variant Selector */}
                        <div className="mb-6 md:mb-8">
                            <label className="block text-sm font-bold text-gray-900 mb-3">Select Flavor</label>
                            <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
                                {Object.entries(variants).map(([key, val]) => (
                                    <button
                                        key={key}
                                        onClick={() => setSelectedVariant(key as keyof typeof variants)}
                                        className={`group relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all ${selectedVariant === key ? 'ring-4 ring-offset-2 ring-tallpop-pink scale-110' : 'hover:scale-105'
                                            } ${val.color}`}
                                        title={val.name}
                                    >
                                        {selectedVariant === key && (
                                            <motion.div layoutId="check" className="absolute inset-0 flex items-center justify-center text-white">
                                                <Check size={20} strokeWidth={3} />
                                            </motion.div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity & CTA */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-6 md:mb-8">
                            <div className="flex items-center border border-gray-200 rounded-full order-2 sm:order-1">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-4 py-2 text-gray-600 hover:text-tallpop-pink"
                                >-</button>
                                <span className="w-8 text-center font-bold">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-4 py-2 text-gray-600 hover:text-tallpop-pink"
                                >+</button>
                            </div>
                            <Button
                                size="lg"
                                className="flex-1 w-full sm:w-auto order-1 sm:order-2"
                                onClick={() => {
                                    addItem({
                                        id: selectedVariant,
                                        name: product.name,
                                        price: parseInt(product.price.replace(/[^\d]/g, '')),
                                        image: product.images[0]
                                    }, quantity);
                                    navigate('/cart');
                                }}
                            >
                                Add to Cart - {product.price}
                            </Button>
                            <button className="p-3 rounded-full border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors order-3">
                                <Heart size={20} />
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600">
                                <ShieldCheck className="text-green-500 w-4 h-4 md:w-5 md:h-5" /> FSSAI Certified
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600">
                                <Leaf className="text-green-500 w-4 h-4 md:w-5 md:h-5" /> 100% Vegetarian
                            </div>
                        </div>

                        {/* Ingredients */}
                        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-100">
                            <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Key Ingredients</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.ingredients.map((ing: string) => (
                                    <span key={ing} className="px-3 py-1 bg-tallpop-light rounded-full text-xs font-semibold text-tallpop-pink">
                                        {ing}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
