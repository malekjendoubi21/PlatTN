export default function ProductCard({ image, name, price, onAdd, rating = 4.8, description }) {
    return (
        <div className="group relative bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 w-full">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-t-2xl lg:rounded-t-3xl h-48 sm:h-52 lg:h-56">
                <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Price Badge */}
                <div className="absolute top-3 lg:top-4 right-3 lg:right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full font-bold text-sm lg:text-lg shadow-lg">
                    {price} €
                </div>

                {/* Favorite Icon */}
                <div className="absolute top-3 lg:top-4 left-3 lg:left-4 bg-white/90 p-1.5 lg:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:bg-white">
                    <span className="text-red-500 text-lg lg:text-xl">♥</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2 lg:mb-3 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                    {name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3 lg:mb-4">
                    <div className="flex text-amber-400 text-xs lg:text-sm">
                        ★★★★★
                    </div>
                    <span className="text-gray-500 text-xs lg:text-sm ml-2">({rating})</span>
                </div>

                {/* Description */}
                {description && (
                    <p className="text-gray-600 text-xs lg:text-sm mb-4 lg:mb-6 leading-relaxed line-clamp-2">
                        {description}
                    </p>
                )}

                {/* Action Button */}
                <button
                    onClick={onAdd}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2.5 lg:py-3 px-4 lg:px-6 rounded-full lg:rounded-2xl font-semibold hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base"
                >
                    <span className="flex items-center justify-center space-x-2">
                        <span>🛒</span>
                        <span className="hidden sm:inline">Ajouter au panier</span>
                        <span className="sm:hidden">Ajouter</span>
                    </span>
                </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 lg:-top-10 -right-8 lg:-right-10 w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-3 lg:-bottom-5 -left-3 lg:-left-5 w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br from-red-400/20 to-pink-500/20 rounded-full blur-lg"></div>
        </div>
    );
}
