import { useState, useEffect } from "react";
import axios from "axios";
import Category from "../components/Category";
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home()
{
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:1337/api/categories")
            .then((res) => setCategories(res.data.data));

        axios.get("http://localhost:1337/api/products?populate=images")
            .then((res) => setProducts(res.data.data));
    }, []);

    return (<div className="bg-gray-100 min-h-screen">
        <Header />
        <section className="max-w-6xl mx-auto py-10 px-6">
             <h2 className="ttext-2xl font-semibold mb-4 text-gray-800 text-center">Catalog</h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    categories && categories.map((data) => <Category data={data} key={data.documentId} className="transition-transform hover:scale-105"/>)
                }
            </ul>
        </section>

        <section className="max-w-7xl mx-auto py-10 px-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Produse</h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {products && products.map((data) => (
                    <div key={data.documentId} className="flex justify-center">
                        <Product data={data} key={data.documentId} />
                    </div>
                ))}
            </ul>
        </section>

        <Footer />
    </div>);
}