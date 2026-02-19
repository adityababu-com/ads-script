import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Music2, Play, Sparkles, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';

const stats = [
    { value: '35K+', label: 'Glow Girls' },
    { value: '12', label: 'Tier-1 Cities' },
    { value: '4.9/5', label: 'Top Rated' },
];

const cities = ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Pune', 'Chennai'];

const flavors = [
    {
        id: 'sakura',
        name: 'Sakura Berry Pop',
        vibe: 'Soft idol glow',
        gradient: 'from-pink-200 via-rose-100 to-fuchsia-100',
        stickMain: 'from-pink-300 via-rose-200 to-fuchsia-300',
        stickSoft: 'from-pink-200 via-rose-100 to-pink-300',
    },
    {
        id: 'peach',
        name: 'Peach Blossom Glow',
        vibe: 'Sunny pop energy',
        gradient: 'from-orange-200 via-amber-100 to-yellow-100',
        stickMain: 'from-orange-300 via-amber-200 to-yellow-300',
        stickSoft: 'from-orange-200 via-amber-100 to-yellow-200',
    },
    {
        id: 'blueberry',
        name: 'Blueberry Starlight',
        vibe: 'Runway calm mood',
        gradient: 'from-indigo-200 via-violet-100 to-purple-100',
        stickMain: 'from-violet-300 via-indigo-200 to-purple-300',
        stickSoft: 'from-indigo-200 via-violet-100 to-purple-200',
    },
];

const girlVisuals = [
    {
        src: 'https://images.unsplash.com/photo-1703905424956-a21a02769117?auto=format&fit=crop&w=960&q=72',
        alt: 'Korean fashion model with bold full-body presence',
        tag: 'Bold full-body',
    },
    {
        src: 'https://images.unsplash.com/photo-1703905424975-e3648cdeff31?auto=format&fit=crop&w=960&q=72',
        alt: 'Korean street-style model standing in full-body frame',
        tag: 'Street runway',
    },
    {
        src: 'https://images.unsplash.com/photo-1723015973566-1cb80ebe9aa9?auto=format&fit=crop&w=960&q=72',
        alt: 'Korean model in a tall full-body silhouette',
        tag: 'Tall silhouette',
    },
];

export const Home = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(255,235,117,0.45),transparent_40%),radial-gradient(circle_at_88%_14%,rgba(255,191,225,0.42),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(198,242,255,0.32),transparent_47%)]" />

            <section className="relative pt-24 md:pt-28 pb-10 md:pb-14 bg-[linear-gradient(180deg,#fffde6_0%,#ffeaf5_52%,#ffffff_100%)]">
                <div className="container mx-auto px-6">
                    <div className="flex items-end justify-between mb-5 md:mb-7">
                        <div>
                            <span className="inline-flex items-center rounded-full bg-white/90 border border-yellow-200 px-3 py-1 text-[11px] font-black tracking-[0.08em] text-yellow-700 uppercase mb-3">
                                Girl-only mood
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-tallpop-dark">
                                Girl-only moodboard
                            </h2>
                        </div>
                        <span className="md:hidden text-xs font-bold text-gray-500">Swipe ← →</span>
                    </div>

                    <div className="md:hidden -mx-6 px-6 overflow-x-auto pb-3 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <div className="flex gap-4 w-max pr-6">
                            {girlVisuals.map((visual, index) => (
                                <article
                                    key={visual.alt}
                                    className="relative w-[84vw] max-w-[350px] h-[80svh] max-h-[760px] min-h-[520px] shrink-0 snap-start rounded-[2rem] overflow-hidden border border-white/80 bg-white shadow-[0_35px_70px_-45px_rgba(35,28,8,0.55)]"
                                >
                                    <img
                                        src={visual.src}
                                        alt={visual.alt}
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                        fetchPriority={index === 0 ? 'high' : 'auto'}
                                        decoding="async"
                                        sizes="(max-width: 768px) 84vw, 28vw"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/55 via-black/10 to-transparent">
                                        <span className="inline-block rounded-full bg-white/90 border border-white/80 px-3 py-1 text-xs font-bold text-tallpop-dark">
                                            {visual.tag}
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:grid grid-cols-3 gap-5">
                        {girlVisuals.map((visual, index) => (
                            <div key={visual.alt} className="rounded-[1.8rem] overflow-hidden border border-white/80 bg-white shadow-[0_25px_60px_-45px_rgba(40,14,70,0.65)]">
                                <div className="aspect-[4/5]">
                                    <img
                                        src={visual.src}
                                        alt={visual.alt}
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                        decoding="async"
                                        sizes="(max-width: 1280px) 33vw, 26vw"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <span className="inline-block rounded-full bg-tallpop-light border border-tallpop-pink/30 px-3 py-1 text-xs font-bold text-tallpop-dark">
                                        {visual.tag}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative min-h-[92vh] md:min-h-screen pt-8 md:pt-14 pb-16 flex items-center">
                <motion.div
                    animate={{ y: [0, -22, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-10 left-8 md:left-24 w-56 h-56 rounded-full bg-tallpop-pink/35 blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, 24, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/3 right-0 md:right-16 w-64 h-64 rounded-full bg-tallpop-lavender/40 blur-3xl"
                />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-bold text-tallpop-dark mb-7">
                                ✨ Height + Glow Stick Sachets
                            </span>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[0.93] tracking-tight mb-6 text-tallpop-dark">
                                Glow up.
                                <br />
                                Stand tall.
                                <br />
                                <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-500 bg-clip-text text-transparent text-glow">
                                    Be the idol.
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-700 max-w-lg mb-8">
                                For teen girls who love K-pop, fashion, and confidence.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-9">
                                <Link to="/shop">
                                    <Button size="lg" className="w-full sm:w-auto" icon={<Sparkles size={20} />}>
                                        Shop Stick Sachets
                                    </Button>
                                </Link>
                                <Link to="/quiz">
                                    <Button variant="outline" size="lg" className="w-full sm:w-auto" icon={<Play size={18} />}>
                                        Take Idol Quiz
                                    </Button>
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {stats.map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-3xl border border-white/80 bg-white/85 p-4 shadow-[0_25px_65px_-40px_rgba(36,13,63,0.6)]"
                                    >
                                        <p className="text-2xl font-extrabold text-tallpop-dark">{item.value}</p>
                                        <p className="text-sm text-gray-600">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative mx-auto w-full max-w-[540px]"
                        >
                            <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-r from-tallpop-pink/35 via-white/70 to-tallpop-lavender/35 blur-2xl" />

                            <div className="relative rounded-[2.2rem] border border-white/80 bg-white/80 backdrop-blur-xl p-5 shadow-[0_55px_120px_-52px_rgba(87,40,128,0.75)]">
                                <div className="rounded-[1.8rem] overflow-hidden aspect-[4/5]">
                                    <img
                                        src="https://images.unsplash.com/photo-1604212485216-3397090e9825?auto=format&fit=crop&w=1200&q=80"
                                        alt="Korean woman full-body fashion visual with strong height presence"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-bold text-gray-700">
                                        <Music2 size={12} /> K-pop mood
                                    </span>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-bold text-gray-700">
                                        <MapPin size={12} /> Tier-1 India
                                    </span>
                                </div>

                                <div className="mt-4 rounded-2xl bg-tallpop-dark text-white px-4 py-3 text-sm font-bold text-center">
                                    30 stick sachets per box
                                </div>
                            </div>

                            <motion.div
                                animate={{ y: [0, -7, 0], rotate: [-4, -2, -4] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -left-7 top-20 hidden sm:block"
                            >
                                <div className="w-24 aspect-[2.8/8] rounded-[1.35rem] border border-white/80 bg-gradient-to-b from-pink-300 via-fuchsia-200 to-rose-300 p-3 shadow-xl" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 7, 0], rotate: [4, 2, 4] }}
                                transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -right-6 bottom-16 hidden sm:block"
                            >
                                <div className="w-24 aspect-[2.8/8] rounded-[1.35rem] border border-white/80 bg-gradient-to-b from-indigo-300 via-violet-200 to-purple-300 p-3 shadow-xl" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-8">
                <div className="container mx-auto px-6">
                    <div className="rounded-3xl border border-white/80 bg-white/80 px-6 py-6 shadow-[0_25px_70px_-45px_rgba(40,14,70,0.6)]">
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-4">
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} size={16} className="fill-yellow-400 text-yellow-400" />
                            ))}
                            Loved by girls across tier-1 India
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {cities.map((city) => (
                                <span key={city} className="text-xs font-bold px-3 py-1 rounded-full border border-white bg-gradient-to-r from-white to-pink-50 text-gray-600">
                                    {city}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-tallpop-dark mb-3">
                        Pick your flavor mood
                    </h2>
                    <p className="text-gray-600 mb-8">Three blends. One glow + height routine.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {flavors.map((flavor) => (
                            <motion.div
                                key={flavor.id}
                                whileHover={{ y: -6 }}
                                className={`rounded-[2rem] border border-white/80 bg-gradient-to-br ${flavor.gradient} p-6 shadow-[0_30px_70px_-45px_rgba(40,14,70,0.6)]`}
                            >
                                <div className="relative h-40 mb-5">
                                    <div className={`absolute left-1/2 top-4 -translate-x-1/2 w-24 aspect-[2.7/8] rounded-[1.3rem] border border-white/80 bg-gradient-to-b ${flavor.stickMain} shadow-lg`} />
                                    <div className={`absolute left-[31%] top-10 -translate-x-1/2 w-20 aspect-[2.7/8] rounded-[1.2rem] border border-white/70 bg-gradient-to-b ${flavor.stickSoft} shadow-md rotate-[-8deg]`} />
                                    <div className={`absolute left-[69%] top-10 -translate-x-1/2 w-20 aspect-[2.7/8] rounded-[1.2rem] border border-white/70 bg-gradient-to-b ${flavor.stickSoft} shadow-md rotate-[8deg]`} />
                                </div>

                                <h3 className="text-2xl font-display font-extrabold text-tallpop-dark mb-1">{flavor.name}</h3>
                                <p className="text-sm text-gray-700 mb-5">{flavor.vibe}</p>

                                <Link to={`/product/${flavor.id}`}>
                                    <Button variant="secondary" className="w-full" icon={<ArrowRight size={18} />}>
                                        View Flavor
                                    </Button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="rounded-[2rem] bg-gradient-to-br from-tallpop-dark via-purple-900 to-fuchsia-700 p-10 md:p-12 text-white shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold leading-tight mb-4">
                            Ready to glow tall?
                        </h2>
                        <p className="text-white/85 text-lg mb-7">Start your idol routine in one tear-open stick.</p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link to="/shop">
                                <Button size="lg" className="w-full sm:w-auto !bg-white !text-tallpop-dark hover:!opacity-95" icon={<Sparkles size={18} />}>
                                    Start Shopping
                                </Button>
                            </Link>
                            <Link to="/quiz">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-tallpop-dark" icon={<ArrowRight size={18} />}>
                                    Find My Flavor
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
