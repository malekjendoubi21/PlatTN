export default function Cart() {
    const cartItems = [
        { id: 1, name: "Couscous Royal", price: 15, qty: 1, image: "/images/couscous.jpg" },
        { id: 2, name: "Baklawa", price: 12, qty: 2, image: "/images/baklawa.jpg" },
    ];
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = 5;
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-amber-50">
            {/* Header */}
            <div className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                        Votre Panier
                    </h1>
                    <p className="text-lg lg:text-xl text-orange-100">
                        Vérifiez vos délicieuses sélections avant de finaliser votre commande
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
                    {/* Cart Items */}
                    <div className="xl:col-span-2">
                        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-4 lg:p-8">
                            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 lg:mb-8 flex items-center">
                                <span className="text-2xl lg:text-3xl mr-3">🛒</span>
                                Articles sélectionnés ({cartItems.length})
                            </h2>
                            
                            <div className="space-y-4 lg:space-y-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 p-4 lg:p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl lg:rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                                        {/* Item Image */}
                                        <div className="w-full sm:w-20 lg:w-24 h-20 lg:h-24 rounded-xl lg:rounded-2xl overflow-hidden flex-shrink-0">
                                            <img 
                                                src={item.image} 
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Item Details */}
                                        <div className="flex-1 w-full sm:w-auto">
                                            <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                                            <p className="text-gray-600 text-sm lg:text-base mb-2">Plat traditionnel tunisien authentique</p>
                                            <div className="flex items-center">
                                                <span className="text-amber-600 text-xs lg:text-sm">★★★★★</span>
                                                <span className="text-gray-500 text-xs lg:text-sm ml-2">(4.8)</span>
                                            </div>
                                        </div>

                                        {/* Quantity and Price - Mobile Layout */}
                                        <div className="flex justify-between items-center w-full sm:w-auto sm:flex-col sm:items-end gap-4">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center bg-white rounded-full p-1 shadow-md">
                                                <button className="w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200">
                                                    <span className="text-lg lg:text-xl font-bold text-gray-600">-</span>
                                                </button>
                                                <span className="px-3 lg:px-4 py-1 lg:py-2 font-bold text-sm lg:text-lg">{item.qty}</span>
                                                <button className="w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-colors duration-200">
                                                    <span className="text-lg lg:text-xl font-bold">+</span>
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <div className="text-right">
                                                <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                                    {item.price * item.qty} €
                                                </div>
                                                <div className="text-xs lg:text-sm text-gray-500">
                                                    {item.price}€ / unité
                                                </div>
                                            </div>

                                            {/* Remove Button */}
                                            <button className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-all duration-200 sm:mt-2">
                                                <span className="text-lg lg:text-xl">🗑️</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Continue Shopping */}
                            <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200">
                                <button className="text-orange-600 hover:text-orange-700 font-semibold flex items-center space-x-2 hover:bg-orange-50 px-4 py-2 rounded-full transition-all duration-200 text-sm lg:text-base">
                                    <span>←</span>
                                    <span>Continuer mes achats</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="xl:col-span-1">
                        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 sticky top-8">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 lg:mb-8 flex items-center">
                                <span className="text-2xl lg:text-3xl mr-3">📋</span>
                                Résumé de commande
                            </h3>

                            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                                <div className="flex justify-between text-base lg:text-lg">
                                    <span className="text-gray-600">Sous-total</span>
                                    <span className="font-semibold">{subtotal} €</span>
                                </div>
                                <div className="flex justify-between text-base lg:text-lg">
                                    <span className="text-gray-600">Livraison</span>
                                    <span className="font-semibold">{shipping} €</span>
                                </div>
                                <div className="border-t border-gray-200 pt-3 lg:pt-4">
                                    <div className="flex justify-between text-xl lg:text-2xl font-bold">
                                        <span className="text-gray-800">Total</span>
                                        <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                            {total} €
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Promo Code */}
                            <div className="mb-6 lg:mb-8">
                                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-orange-200">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Code promo
                                    </label>
                                    <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
                                        <input
                                            type="text"
                                            placeholder="Entrez votre code"
                                            className="flex-1 px-3 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm lg:text-base"
                                        />
                                        <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 text-sm lg:text-base">
                                            Appliquer
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 lg:py-4 px-4 lg:px-6 rounded-xl lg:rounded-2xl font-bold text-base lg:text-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl mb-3 lg:mb-4">
                                <span className="flex items-center justify-center space-x-2">
                                    <span>🎉</span>
                                    <span>Finaliser la commande</span>
                                </span>
                            </button>

                            {/* Security Info */}
                            <div className="text-center text-xs lg:text-sm text-gray-500">
                                <div className="flex items-center justify-center space-x-2 mb-2">
                                    <span>🔒</span>
                                    <span>Paiement 100% sécurisé</span>
                                </div>
                                <p>Vos données sont protégées par SSL</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Suggested Products */}
                <div className="mt-12 lg:mt-16">
                    <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 lg:mb-8 text-center">
                            Vous pourriez aussi aimer
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                            {[
                                { name: "Tajine agneau", price: 18, image: "/images/pack1.jpg" },
                                { name: "Chorba", price: 8, image: "/images/pack2.jpg" },
                                { name: "Mloukheya", price: 14, image: "/images/pack3.jpg" }
                            ].map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center hover:shadow-lg transition-all duration-300 border border-orange-100">
                                    <div className="w-16 lg:w-20 h-16 lg:h-20 bg-orange-200 rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center text-xl lg:text-2xl">
                                        🍽️
                                    </div>
                                    <h4 className="font-bold text-base lg:text-lg text-gray-800 mb-2">{item.name}</h4>
                                    <p className="text-orange-600 font-bold text-lg lg:text-xl mb-3 lg:mb-4">{item.price} €</p>
                                    <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 lg:px-6 py-2 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 text-sm lg:text-base">
                                        Ajouter
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
