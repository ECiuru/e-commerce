import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";



export default function Category()
{
    const { id } = useParams();

    const [category, setCategory] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:1337/api/categories/${id}?populate[products][populate]=images`)
            .then((res) => setCategory(res.data.data));

    }, []);

    if (category)
    {
        return (
            <>
            <Header />
            <section className="max-w-6xl mx-auto py-10 px-6">
                <h1 className="text-3xl font-bold mb-6 text-center">{category.name}</h1>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {
                        category.products.map((data) => <Product data={data} key={data.documentId} />)
                    }
                </ul>
            </section>
<Footer />

        </>);
    }
    else
    {
        return (<>
        < Header />
                   <p className="text-center mt-10 grey-600">Not found</p>
       <Footer />
        </>
    
        );
    }
}