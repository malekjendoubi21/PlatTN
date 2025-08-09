import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Categories() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("name");

    const categories = [
        { id: "all", name: "Tous les plats", icon: "🍽️" },
        { id: "plats-chauds", name: "Plats chauds", icon: "🍲" },
        { id: "entrees", name: "Entrées", icon: "🥗" },
        { id: "desserts", name: "Desserts", icon: "🧁" },
        { id: "boissons", name: "Boissons", icon: "🥤" }
    ];

    const allProducts = [
        // Plats chauds
        { id: 1, name: "Couscous Royal", price: 15, image: "/images/couscous.jpg", category: "plats-chauds", rating: 4.9, description: "Couscous traditionnel avec agneau et légumes frais" },
        { id: 2, name: "Lablabi", price: 7, image: "/images/lablabi.jpg", category: "plats-chauds", rating: 4.7, description: "Soupe traditionnelle aux pois chiches" },
        { id: 3, name: "Ojja merguez", price: 10, image: "/images/ojja.jpg", category: "plats-chauds", rating: 4.8, description: "Plat épicé aux merguez et œufs" },
        { id: 4, name: "Tajine agneau", price: 18, image: "/images/pack1.jpg", category: "plats-chauds", rating: 4.9, description: "Tajine d'agneau aux légumes et épices" },
        { id: 5, name: "Chorba", price: 8, image: "/images/pack2.jpg", category: "plats-chauds", rating: 4.6, description: "Soupe traditionnelle tunisienne" },
        { id: 6, name: "Mloukheya", price: 14, image: "/images/pack3.jpg", category: "plats-chauds", rating: 4.7, description: "Ragoût de corète avec viande" },
        
        // Entrées
        { id: 7, name: "Brik à l'œuf", price: 5, image: "/images/brik.jpg", category: "entrees", rating: 4.8, description: "Brik croustillant farci à l'œuf et thon" },
        { id: 8, name: "Salade mechouia", price: 6, image: "/images/pack1.jpg", category: "entrees", rating: 4.5, description: "Salade grillée aux légumes" },
        { id: 9, name: "Kefteji", price: 7, image: "/images/pack2.jpg", category: "entrees", rating: 4.6, description: "Ratatouille tunisienne" },
        { id: 10, name: "Houmous maison", price: 5, image: "/images/pack3.jpg", category: "entrees", rating: 4.7, description: "Houmous traditionnel fait maison" },
        
        // Desserts
        { id: 11, name: "Makroud", price: 8, image: "/images/makroud.jpg", category: "desserts", rating: 4.9, description: "Pâtisserie aux dattes et semoule" },
        { id: 12, name: "Baklawa", price: 12, image: "/images/baklawa.jpg", category: "desserts", rating: 4.8, description: "Pâtisserie feuilletée au miel" },
        { id: 13, name: "Zrir", price: 9, image: "/images/pack1.jpg", category: "desserts", rating: 4.6, description: "Dessert aux graines de sésame" },
        { id: 14, name: "Halawet el jibn", price: 10, image: "/images/pack2.jpg", category: "desserts", rating: 4.7, description: "Rouleaux de fromage sucrés" },
        
        // Boissons
        { id: 15, name: "Thé à la menthe", price: 3, image: "/images/pack3.jpg", category: "boissons", rating: 4.8, description: "Thé traditionnel à la menthe fraîche" },
        { id: 16, name: "Citronnade", price: 4, image: "/images/pack1.jpg", category: "boissons", rating: 4.5, description: "Citronnade fraîche maison" },
        { id: 17, name: "Jus de grenade", price: 5, image: "/images/pack2.jpg", category: "boissons", rating: 4.7, description: "Jus de grenade 100% naturel" }
    ];

    // Filtrage des produits
    const filteredProducts = allProducts
        .filter(product => selectedCategory === "all" || product.category === selectedCategory)
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            switch (sortBy) {
                case "price-asc":
                    return a.price - b.price;
                case "price-desc":
                    return b.price - a.price;
                case "rating":
                    return b.rating - a.rating;
                default:
                    return a.name.localeCompare(b.name);
            }
        });

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-amber-50">
            {/* Hero Section */}
            <div className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                        Nos Délicieux Plats
                    </h1>
                    <p className="text-lg lg:text-xl text-orange-100 max-w-3xl mx-auto">
                        Découvrez notre collection complète de plats tunisiens authentiques, organisés par catégories pour faciliter votre choix.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                {/* Filtres et recherche */}
                <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-4 lg:p-8 mb-8 lg:mb-12">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center">
                        {/* Barre de recherche */}
                        <div className="w-full lg:flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Rechercher un plat..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 lg:py-4 rounded-xl lg:rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-all duration-300 text-sm lg:text-base"
                                />
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg lg:text-xl">
                                    🔍
                                </div>
                            </div>
                        </div>

                        {/* Tri */}
                        <div className="w-full lg:w-auto">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full lg:w-auto px-4 py-3 lg:py-4 rounded-xl lg:rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none bg-white transition-all duration-300 text-sm lg:text-base"
                            >
                                <option value="name">Trier par nom</option>
                                <option value="price-asc">Prix croissant</option>
                                <option value="price-desc">Prix décroissant</option>
                                <option value="rating">Mieux notés</option>
                            </select>
                        </div>
                    </div>

                    {/* Catégories */}
                    <div className="mt-6 lg:mt-8">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-4">Catégories</h3>
                        <div className="flex flex-wrap gap-2 lg:gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold transition-all duration-300 text-sm lg:text-base ${
                                        selectedCategory === category.id
                                            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    <span className="flex items-center space-x-2">
                                        <span>{category.icon}</span>
                                        <span>{category.name}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Résultats */}
                <div className="mb-6 lg:mb-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
                            {filteredProducts.length} plat{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
                        </h2>
                        {selectedCategory !== "all" && (
                            <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-medium text-sm lg:text-base">
                                {categories.find(cat => cat.id === selectedCategory)?.name}
                            </span>
                        )}
                    </div>
                </div>

                {/* Grille de produits */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                                onAdd={() => alert(`${product.name} ajouté au panier avec succès! 🎉`)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 lg:py-20">
                        <div className="text-6xl lg:text-8xl mb-6">😔</div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                            Aucun plat trouvé
                        </h3>
                        <p className="text-gray-600 mb-8 text-sm lg:text-base">
                            Essayez de modifier vos critères de recherche ou explorez d'autres catégories.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory("all");
                                setSearchTerm("");
                                setSortBy("name");
                            }}
                            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 text-sm lg:text-base"
                        >
                            Réinitialiser les filtres
                        </button>
                    </div>
                )}

                {/* Section promotionnelle */}
                {filteredProducts.length > 0 && (
                    <div className="mt-16 lg:mt-20">
                        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl lg:rounded-3xl p-6 lg:p-12 text-center text-white relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-0 left-0 w-32 lg:w-40 h-32 lg:h-40 bg-white rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 right-0 w-24 lg:w-32 h-24 lg:h-32 bg-yellow-300 rounded-full blur-3xl"></div>
                            </div>
                            <div className="relative">
                                <h3 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">
                                    Envie de goûter à tout ?
                                </h3>
                                <p className="text-lg lg:text-xl text-orange-100 mb-6 lg:mb-8 max-w-2xl mx-auto">
                                    Découvrez nos packs découverte pour savourer une sélection variée de nos meilleurs plats !
                                </p>
                                <button className="bg-white text-orange-600 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold text-sm lg:text-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
                                    Voir les packs
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
