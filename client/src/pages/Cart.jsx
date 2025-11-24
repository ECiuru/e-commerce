import { useCartCtx } from "../contexts/CartContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../ui/Button";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Cart()
{
    const { cart, changeQuantity, deleteFromCart } = useCartCtx();

    const [cartProducts, setCartProducts] = useState(null);

    useEffect(() => {
        const cartIds = cart.map((item) => item.id) || null;

        if (cartIds.length > 0)
        {
            const query = cartIds.map(id => `filters[documentId][$in][]=${id}`).join("&");

            let products = null;

            axios.get(`http://localhost:1337/api/products?${query}&populate=images`)
                .then((res) => {
                    products = res.data.data;

                    if (products.length > 0)
                    {
                        setCartProducts(products.map((cartItem) => {
                            const productFromCart = cart.find((product) => product.id === cartItem.documentId);

                            return {
                                ...cartItem,
                                quantity: productFromCart.quantity
                            };
                        }));
                    }
                });
        }
        else
        {
            setCartProducts([]);
        }
    }, [cart]);

    return (
        <>
        <Header />
            
            <section className="max-w-6xl mx-auto py-10 px-6 bg-pink-50 min-h-screen">
                 <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Coșul tău</h2>
                 <p className="text-center text-gray-700 mb-6">Produse în coș: {cart.length}</p>

    <div className="space-y-6">
        {cartProducts && cartProducts.map((product) => (
            <div key={product.documentId} className="bg-white shadow-md rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 transition-transform hover:scale-105">
                <div className="flex items-center gap-4">
                    <img src={`http://localhost:1337${product.images[0].formats.thumbnail.url}`} alt={product.name} className="w-24 h-24 object-contain rounded" />
                    <p className="text-lg font-semibold text-gray-800">{product.name}</p>
                    <p className="text-lg font-semibold text-gray-800"> - { product.price} mdl</p>
                </div>

                <div className="flex items-center gap-2">
                    <Button icon={<FaMinus />}  onClick={() => changeQuantity(product.documentId, "decrement")} className="bg-pink-200 rounded hover:bg-pink-300 text-gray-800" />
                    <span className="px-3 py-1 bg-pink-100 rounded text-gray-700 font-semibold">{product.quantity}</span>
                    <Button icon={<FaPlus />} onClick={() => changeQuantity(product.documentId, "increment")} className="bg-pink-200 rounded hover:bg-pink-300 text-gray-800" />
                </div>

                <Button icon={<MdDelete />} text={"Șterge"} onClick={() => deleteFromCart(product.documentId)} className="bg-red-500 rounded py-1 px-2 hover:bg-red-600 text-white" />
            </div>
        ))}
    </div>
</section>

<Footer />
        </>


    )
}