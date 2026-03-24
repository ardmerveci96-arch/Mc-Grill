import { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  MapPin, 
  ChevronRight, 
  Plus, 
  Star, 
  Clock, 
  Smartphone, 
  ArrowRight,
  Menu as MenuIcon,
  X,
  Flame,
  Timer,
  CheckCircle2,
  CreditCard,
  Apple
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  orders: string;
  description: string;
}

interface Deal {
  id: string;
  title: string;
  discount: string;
  image: string;
  expiresIn: number; // seconds
}

// --- Mock Data ---
const MENU_CATEGORIES = ['Burgers', 'Chicken', 'Sides', 'Drinks', 'Desserts'];

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'The Flame King',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    category: 'Burgers',
    rating: 4.9,
    orders: '15k+',
    description: 'Double flame-grilled beef, melted cheddar, crispy onions, and our secret BBQ sauce.'
  },
  {
    id: 'b2',
    name: 'Spicy Zinger',
    price: 7.49,
    image: 'https://images.unsplash.com/photo-1513185158878-8d8c1827003f?auto=format&fit=crop&w=800&q=80',
    category: 'Chicken',
    rating: 4.8,
    orders: '12k+',
    description: 'Crispy spicy chicken breast, jalapeños, and cool mayo.'
  },
  {
    id: 's1',
    name: 'Loaded Fries',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    category: 'Sides',
    rating: 4.7,
    orders: '20k+',
    description: 'Golden fries topped with cheese sauce and bacon bits.'
  },
  {
    id: 'd1',
    name: 'Choco Lava',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80',
    category: 'Desserts',
    rating: 4.9,
    orders: '8k+',
    description: 'Warm chocolate cake with a molten center.'
  }
];

const DEALS: Deal[] = [
  {
    id: 'd1',
    title: 'Family Feast Bundle',
    discount: 'Save 30%',
    image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=800&q=80',
    expiresIn: 3600
  },
  {
    id: 'd2',
    title: 'BOGO Burger Tuesday',
    discount: 'Buy 1 Get 1',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    expiresIn: 7200
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-brown/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white">
            <Flame size={24} fill="currentColor" />
          </div>
          <span className="text-2xl font-display font-black text-brand-red tracking-tighter italic">FLAMEGRILL</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-bold uppercase text-sm tracking-widest">
          <a href="#" className="text-brand-red">Menu</a>
          <a href="#" className="hover:text-brand-red transition-colors">Offers</a>
          <a href="#" className="hover:text-brand-red transition-colors">Locations</a>
          <a href="#" className="hover:text-brand-red transition-colors">Rewards</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-brand-brown/5 rounded-full transition-colors">
            <ShoppingBag size={24} />
          </button>
          <button 
            className="md:hidden p-2 hover:bg-brand-brown/5 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
          <button className="hidden md:block btn-primary py-2 px-6 text-sm">Sign In</button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-b border-brand-brown/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4 font-bold uppercase tracking-widest">
              <a href="#" className="p-2 text-brand-red">Menu</a>
              <a href="#" className="p-2">Offers</a>
              <a href="#" className="p-2">Locations</a>
              <a href="#" className="p-2">Rewards</a>
              <button className="btn-primary w-full">Sign In</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-yellow/20 text-brand-brown px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-brand-yellow/30">
            <Star size={14} fill="currentColor" className="text-brand-yellow" />
            Voted Best Burger in Town 2024
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.9]">
            Flame-Grilled <br />
            <span className="text-brand-red">Perfection.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-brown/70 mb-8 max-w-md">
            Juicy, bold, and delivered hot to your door. Taste the difference of real fire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary text-lg px-10">Order Now</button>
            <button className="btn-secondary text-lg px-10">View Menu</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative"
        >
          <div className="absolute inset-0 bg-brand-yellow rounded-full blur-[100px] opacity-20 animate-pulse"></div>
          <img 
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80" 
            alt="Delicious Burger"
            className="relative z-10 w-full h-auto drop-shadow-2xl rounded-3xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-brand-brown/5 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-brand-brown/50 uppercase tracking-widest">Delivery Time</p>
              <p className="text-xl font-display font-black">15-25 MIN</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const QuickOrderBar = () => {
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  
  return (
    <div className="sticky top-16 z-40 bg-brand-brown text-white py-3 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 bg-white/10 p-1 rounded-full">
          <button 
            onClick={() => setOrderType('delivery')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all ${orderType === 'delivery' ? 'bg-brand-red text-white' : 'text-white/70 hover:text-white'}`}
          >
            Delivery
          </button>
          <button 
            onClick={() => setOrderType('pickup')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all ${orderType === 'pickup' ? 'bg-brand-red text-white' : 'text-white/70 hover:text-white'}`}
          >
            Pickup
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium">
          <MapPin size={18} className="text-brand-yellow" />
          <span>Enter your location for delivery time</span>
          <ChevronRight size={16} className="text-white/50" />
        </div>

        <div className="hidden sm:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">142 Orders nearby</span>
          </div>
          <button className="flex items-center gap-2 bg-brand-red px-4 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform">
            <ShoppingBag size={18} />
            <span>$0.00</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const DealsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-2">Exclusive Offers</p>
            <h2 className="text-4xl">Hot Deals <span className="text-brand-red">Right Now</span></h2>
          </div>
          <button className="text-brand-brown font-bold flex items-center gap-2 hover:text-brand-red transition-colors">
            View All Deals <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEALS.map((deal) => (
            <motion.div 
              key={deal.id}
              whileHover={{ y: -10 }}
              className="card-deal group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {deal.discount}
                </div>
                <div className="absolute bottom-4 right-4 bg-brand-brown/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  <Timer size={14} />
                  <span>01:24:59</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-4">{deal.title}</h3>
                <button className="w-full btn-secondary py-2 text-sm">Grab This Deal</button>
              </div>
            </motion.div>
          ))}
          
          <div className="card-deal bg-brand-brown text-white flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-brown mb-6">
              <Smartphone size={32} />
            </div>
            <h3 className="text-2xl mb-2">App Exclusive</h3>
            <p className="text-white/70 text-sm mb-6">Get a FREE Large Fries with your first app order.</p>
            <button className="btn-primary w-full">Download App</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState('Burgers');

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Explore Our <span className="text-brand-red">Menu</span></h2>
          <div className="flex justify-center gap-4 overflow-x-auto hide-scrollbar pb-4">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-brand-red text-white shadow-lg' 
                    : 'bg-white text-brand-brown hover:bg-brand-brown/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.filter(item => item.category === activeCategory || activeCategory === 'Burgers').map((item) => (
            <motion.div 
              layout
              key={item.id}
              className="bg-white rounded-3xl p-4 shadow-xl border border-brand-brown/5 group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-3 right-3 w-10 h-10 bg-brand-red text-white rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Plus size={24} />
                </button>
              </div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1 text-brand-yellow">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-bold text-brand-brown">{item.rating}</span>
                </div>
                <span className="text-[10px] font-bold text-brand-brown/40 uppercase tracking-widest">{item.orders} ordered</span>
              </div>
              <h3 className="text-lg mb-1">{item.name}</h3>
              <p className="text-xs text-brand-brown/60 mb-4 line-clamp-2">{item.description}</p>
              <p className="text-xl font-display font-black text-brand-red">${item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    cheese: true,
    bacon: false,
    onions: true,
    pickles: true,
    sauce: true
  });

  const toggleIngredient = (key: keyof typeof ingredients) => {
    setIngredients(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="py-24 bg-brand-brown text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-brand-red rounded-full blur-[120px] opacity-20"></div>
          <div className="relative flex flex-col items-center">
            {/* Visual Burger Stack */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="relative w-full max-w-sm">
              <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" className="w-full rounded-full shadow-2xl" alt="Burger" referrerPolicy="no-referrer" />
              
              <AnimatePresence>
                {ingredients.cheese && (
                  <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="absolute inset-0 bg-brand-yellow/30 rounded-full border-4 border-brand-yellow pointer-events-none"></motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-brand-yellow font-bold uppercase tracking-[0.2em] text-xs mb-4">Interactive Experience</p>
          <h2 className="text-5xl md:text-6xl mb-8 leading-tight">Build Your <br /><span className="text-brand-yellow">Masterpiece</span></h2>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            {Object.entries(ingredients).map(([key, value]) => (
              <button
                key={key}
                onClick={() => toggleIngredient(key as keyof typeof ingredients)}
                className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                  value ? 'border-brand-yellow bg-brand-yellow/10' : 'border-white/10 bg-white/5 hover:border-white/30'
                }`}
              >
                <span className="font-bold uppercase tracking-widest text-sm">{key}</span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${value ? 'bg-brand-yellow text-brand-brown' : 'bg-white/10'}`}>
                  {value ? <CheckCircle2 size={16} /> : <Plus size={16} />}
                </div>
              </button>
            ))}
          </div>

          <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Total Price</p>
                <p className="text-3xl font-display font-black text-brand-yellow">$12.49</p>
              </div>
              <button className="btn-primary px-8">Add to Cart</button>
            </div>
            <p className="text-xs text-white/40 italic">* Custom burgers are flame-grilled to order. Estimated prep time: 8 mins.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AppPromotion = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 bg-brand-red rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-brown/10 skew-x-12 translate-x-1/4"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-5xl md:text-7xl mb-6 leading-tight">Skip the Line. <br />Get the <span className="text-brand-yellow">App.</span></h2>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm">
                <CheckCircle2 className="text-brand-yellow" /> Exclusive Daily Coupons
              </li>
              <li className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm">
                <CheckCircle2 className="text-brand-yellow" /> Earn Points on Every Bite
              </li>
              <li className="flex items-center gap-3 font-bold uppercase tracking-widest text-sm">
                <CheckCircle2 className="text-brand-yellow" /> Faster One-Click Checkout
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-brown text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-black transition-colors">
                <Apple size={28} />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold opacity-50">Download on the</p>
                  <p className="text-lg font-bold">App Store</p>
                </div>
              </button>
              <button className="bg-brand-brown text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-black transition-colors">
                <Smartphone size={28} />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold opacity-50">Get it on</p>
                  <p className="text-lg font-bold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <motion.img 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" 
              alt="App Screenshot" 
              className="w-full max-w-sm mx-auto rounded-[3rem] shadow-2xl border-8 border-brand-brown"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-brown text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white">
                <Flame size={24} fill="currentColor" />
              </div>
              <span className="text-2xl font-display font-black text-brand-red tracking-tighter italic">FLAMEGRILL</span>
            </div>
            <p className="text-white/50 max-w-xs mb-8">
              Serving the boldest, flame-grilled flavors since 1996. Quality you can taste, speed you can trust.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer">
                <Smartphone size={20} />
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors cursor-pointer">
                <CreditCard size={20} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Menu</h4>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Burgers</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Chicken</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Sides</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Drinks</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Franchising</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Newsroom</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Support</h4>
            <ul className="space-y-4 text-white/50 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold uppercase tracking-widest text-white/30">
          <p>© 2024 FLAMEGRILL INTERNATIONAL INC. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8">
            <span>Accessibility</span>
            <span>Cookies</span>
            <span>Legal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <QuickOrderBar />
        <DealsSection />
        <MenuPreview />
        <BurgerBuilder />
        <AppPromotion />
        
        {/* Trust Section */}
        <section className="py-16 bg-brand-cream border-y border-brand-brown/5">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Flame className="text-brand-red" />, title: "Flame Grilled", desc: "Real Fire, Real Taste" },
              { icon: <Clock className="text-brand-yellow" />, title: "Fast Delivery", desc: "Under 25 Minutes" },
              { icon: <CheckCircle2 className="text-green-500" />, title: "Fresh Ingredients", desc: "Sourced Locally" },
              { icon: <CreditCard className="text-blue-500" />, title: "Secure Payment", desc: "100% Protected" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="text-sm mb-1">{item.title}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-brown/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Sticky Mobile Order Button */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <button className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-3 shadow-2xl">
          <ShoppingBag size={24} />
          Order Now
        </button>
      </div>
    </div>
  );
}
