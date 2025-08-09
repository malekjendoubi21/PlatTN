import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white px-4 sm:px-6 lg:px-8 py-4 lg:py-5 shadow-2xl backdrop-blur-sm relative z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-full">
                        <span className="text-xl sm:text-2xl">🇹🇳</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                        PlatTN
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    <Link to="/" className="relative px-3 lg:px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 group">
                        <span className="font-medium text-sm lg:text-base">Accueil</span>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                    </Link>
                    <Link to="/categories" className="relative px-3 lg:px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 group">
                        <span className="font-medium text-sm lg:text-base">Catégories</span>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                    </Link>
                    <Link to="/cart" className="relative px-4 lg:px-6 py-2 lg:py-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 font-medium backdrop-blur-sm border border-white/30">
                        <span className="flex items-center space-x-2 text-sm lg:text-base">
                            <span>🛒</span>
                            <span>Panier</span>
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-6 flex flex-col justify-center items-center">
                        <span className={`block w-5 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                        <span className={`block w-5 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-5 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 border-t border-white/20 transform transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="px-4 py-6 space-y-4">
                    <Link 
                        to="/" 
                        className="block py-3 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        🏠 Accueil
                    </Link>
                    <Link 
                        to="/categories" 
                        className="block py-3 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        📂 Catégories
                    </Link>
                    <Link 
                        to="/cart" 
                        className="block py-3 px-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 font-medium backdrop-blur-sm border border-white/30"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        🛒 Panier
                    </Link>
                </div>
            </div>
        </nav>
    );
}
