import ProductCard from "../components/ProductCard";
import { useState } from "react";

export default function Home() {
    const [selectedPack, setSelectedPack] = useState(null);
    
    const products = [
        { id: 1, name: "Couscous Royal", price: 15, image: "/images/couscous.jpg", description: "Couscous traditionnel avec agneau et légumes frais", rating: 4.9 },
        { id: 2, name: "Lablabi", price: 7, image: "/images/lablabi.jpg", description: "Soupe traditionnelle aux pois chiches", rating: 4.7 },
        { id: 3, name: "Brik à l'œuf", price: 5, image: "/images/brik.jpg", description: "Brik croustillant farci à l'œuf et thon", rating: 4.8 },
        { id: 4, name: "Ojja merguez", price: 10, image: "/images/ojja.jpg", description: "Plat épicé aux merguez et œufs", rating: 4.8 },
        { id: 5, name: "Makroud", price: 8, image: "/images/makroud.jpg", description: "Pâtisserie aux dattes et semoule", rating: 4.9 },
        { id: 6, name: "Baklawa", price: 12, image: "/images/baklawa.jpg", description: "Pâtisserie feuilletée au miel", rating: 4.8 },
    ];

    const packs = [
        { 
            id: 1, 
            image: "/images/pack1.jpg", 
            name: "Pack Tradition",
            price: 45,
            description: "Un assortiment de nos plats traditionnels les plus appréciés : Couscous Royal, Lablabi et Brik à l'œuf"
        },
        { 
            id: 2, 
            image: "/images/pack2.jpg", 
            name: "Pack Saveurs",
            price: 38,
            description: "Découvrez la richesse culinaire tunisienne avec Ojja merguez, Chorba et Makroud"
        },
        { 
            id: 3, 
            image: "/images/pack3.jpg", 
            name: "Pack Gourmand",
            price: 52,
            description: "Pour les fins gourmets : une sélection premium de nos spécialités avec desserts traditionnels"
        }
    ];

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-amber-50">
            {/* Hero Section */}
            <section className="relative w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-32 sm:w-40 h-32 sm:h-40 bg-yellow-300 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-orange-300 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6 lg:mb-8">
                        <span className="inline-block bg-white/20 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm mb-4 lg:mb-6">
                            🇹🇳 Authentique • Traditionnel • Délicieux
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 lg:mb-8 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent leading-tight">
                        Découvrez le goût<br className="hidden sm:block" />
                        <span className="block sm:inline"> de la Tunisie</span>
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-8 lg:mb-12 px-4">
                        PlatTN vous propose des plats tunisiens authentiques, préparés avec amour et livrés
                        partout dans le monde pour nos compatriotes vivant à l'étranger.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
                        <button className="w-full sm:w-auto bg-white text-orange-600 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold text-base lg:text-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
                            Commander maintenant
                        </button>
                        <button className="w-full sm:w-auto border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold text-base lg:text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                            Découvrir nos plats
                        </button>
                    </div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats Section */}
                <section className="py-12 lg:py-20">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                        {[
                            { number: "50+", label: "Plats authentiques", icon: "🍽️" },
                            { number: "10k+", label: "Clients satisfaits", icon: "😊" },
                            { number: "25+", label: "Pays livrés", icon: "🌍" },
                            { number: "4.9", label: "Note moyenne", icon: "⭐" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="text-2xl lg:text-4xl mb-2 lg:mb-4">{stat.icon}</div>
                                <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-1 lg:mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium text-xs lg:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Images Packs Section */}
                <section className="py-12 lg:py-20">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
                            Nos Packs Populaires
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Découvrez nos sélections spéciales conçues pour vous faire voyager au cœur de la Tunisie
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {packs.map((pack) => (
                            <div key={pack.id} className="group relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                                <img
                                    src={pack.image}
                                    alt={pack.name}
                                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
                                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 text-white">
                                    <button 
                                        onClick={() => setSelectedPack(pack)}
                                        className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 lg:px-6 py-2 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 text-sm lg:text-base"
                                    >
                                        Découvrir
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Products Section */}
                <section className="py-12 lg:py-20">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
                            Nos Spécialités
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Chaque plat raconte une histoire, chaque bouchée vous transporte en Tunisie
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                                onAdd={() => alert(`${product.name} ajouté au panier avec succès! 🎉`)}
                            />
                        ))}
                    </div>
                    <div className="text-center mt-12 lg:mt-16">
                        <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 lg:px-12 py-3 lg:py-4 rounded-full font-bold text-base lg:text-lg hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                            <span className="flex items-center space-x-2">
                                <span>Voir tous nos plats</span>
                                <span>→</span>
                            </span>
                        </button>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="py-12 lg:py-20">
                    <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl lg:rounded-3xl p-6 lg:p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 left-0 w-32 lg:w-40 h-32 lg:h-40 bg-white rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 right-0 w-24 lg:w-32 h-24 lg:h-32 bg-yellow-300 rounded-full blur-3xl"></div>
                        </div>
                        <div className="relative">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                                Restez connecté à vos saveurs préférées
                            </h3>
                            <p className="text-lg lg:text-xl text-orange-100 mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
                                Abonnez-vous à notre newsletter pour recevoir nos nouveautés et offres exclusives
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="flex-1 px-4 lg:px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white text-sm lg:text-base"
                                />
                                <button className="bg-white text-orange-600 px-6 lg:px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-all duration-300 text-sm lg:text-base">
                                    S'abonner
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Modal pour affichage en grand */}
            {selectedPack && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto" onClick={() => setSelectedPack(null)}>
                    <div className="relative bg-white rounded-2xl sm:rounded-3xl max-w-6xl w-full my-4 shadow-2xl min-h-[400px]" onClick={(e) => e.stopPropagation()}>
                        {/* Bouton fermer */}
                        <button 
                            onClick={() => setSelectedPack(null)}
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-black/50 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300 text-sm sm:text-base"
                        >
                            ✕
                        </button>

                        <div className="flex flex-col lg:grid lg:grid-cols-5">
                            {/* Image - Plus petite sur desktop */}
                            <div className="relative h-48 sm:h-56 lg:h-full lg:col-span-2 flex-shrink-0">
                                <img 
                                    src={selectedPack.image} 
                                    alt={selectedPack.name}
                                    className="w-full h-full object-cover rounded-t-2xl sm:rounded-t-3xl lg:rounded-l-2xl lg:rounded-tr-none sm:lg:rounded-l-3xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden rounded-t-2xl sm:rounded-t-3xl"></div>
                            </div>

                            {/* Contenu - Plus d'espace sur desktop */}
                            <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between min-h-[400px] lg:min-h-[450px] lg:col-span-3">
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                                        <span className="text-2xl sm:text-3xl">🍽️</span>
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                                            {selectedPack.name}
                                        </h3>
                                    </div>
                                    
                                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                                        {selectedPack.description}
                                    </p>

                                    {/* Prix */}
                                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-orange-200 mb-4 sm:mb-6">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                            <span className="text-gray-700 font-medium text-sm sm:text-base">Prix du pack :</span>
                                            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                                {selectedPack.price} €
                                            </span>
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-500 mt-1">
                                            Livraison gratuite incluse
                                        </div>
                                    </div>

                                    {/* Avantages */}
                                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                                        <h4 className="font-semibold text-gray-800 flex items-center gap-2 text-sm sm:text-base">
                                            <span>✨</span>
                                            Avantages de ce pack :
                                        </h4>
                                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                                            <li className="flex items-start sm:items-center gap-2">
                                                <span className="text-green-500 flex-shrink-0 mt-0.5 sm:mt-0">✓</span>
                                                <span>Économisez 15% par rapport aux achats individuels</span>
                                            </li>
                                            <li className="flex items-start sm:items-center gap-2">
                                                <span className="text-green-500 flex-shrink-0 mt-0.5 sm:mt-0">✓</span>
                                                <span>Portions généreuses pour 2-3 personnes</span>
                                            </li>
                                            <li className="flex items-start sm:items-center gap-2">
                                                <span className="text-green-500 flex-shrink-0 mt-0.5 sm:mt-0">✓</span>
                                                <span>Emballage spécial pour la conservation</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Boutons d'action */}
                                <div className="space-y-2 sm:space-y-3 pt-4 border-t border-gray-100">
                                    <button 
                                        onClick={() => {
                                            alert(`${selectedPack.name} ajouté au panier avec succès! 🎉`);
                                            setSelectedPack(null);
                                        }}
                                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2.5 sm:py-3 lg:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                                    >
                                        <span className="flex items-center justify-center space-x-2">
                                            <span>🛒</span>
                                            <span className="hidden sm:inline">Ajouter au panier - {selectedPack.price} €</span>
                                            <span className="sm:hidden">Ajouter - {selectedPack.price} €</span>
                                        </span>
                                    </button>
                                    
                                    <button 
                                        onClick={() => {
                                            alert(`Commande de ${selectedPack.name} en cours de traitement! 🚀`);
                                            setSelectedPack(null);
                                        }}
                                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2.5 sm:py-3 lg:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                                    >
                                        <span className="flex items-center justify-center space-x-2">
                                            <span>⚡</span>
                                            <span>Commander maintenant</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
