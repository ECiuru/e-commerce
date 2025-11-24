import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios"; 
import Button from "../ui/Button";
import { FaShoppingCart } from "react-icons/fa";
import { useCartCtx } from "../contexts/CartContext";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Product()
{
    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:1337/api/products/${id}?populate=images`)
            .then((res) => setProduct(res.data.data));
    }, []);

    const { addToCart } = useCartCtx();

    if (product)
    {
        return (
        <>
            <Header />

            <section className="max-w-5xl mx-auto py-10 px-6 bg-gray-50 min-h-screen">
                <div className="flex flex-col lg:flex-row gap-10">
                    {
                        product.images.map((img, idx) => (
                            <img key={idx} src={`http://localhost:1337${img.formats.thumbnail.url}`} alt={product.name} className="flex flex-col lg:flex-row gap-10" 
                            />
                        ))
                    }
                </div>

                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-2xl font-bold text-gray-900 py-5">{product.name}</h1>
                    <p className="text-xl font-semibold text-pink-500">{product.price} MDL</p>
                    <Button icon={<FaShoppingCart />} text={"Adaugă în coș"} onClick={() => addToCart(product.documentId)} className="bg-pink-500 hover:bg-pink-600 text-white px-1 py-2 rounded-lg inline-flex items-center gap-2 font-medium transition-colors" 
                    />
                </div>
            </section>

            <Footer />
        </>
        );
    }
    else
    {
        return (
            <p className="text-center text-gray-500 py-10 text-lg">Not found</p>
        );
    }
}
