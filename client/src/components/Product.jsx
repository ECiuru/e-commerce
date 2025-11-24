import { Link } from "react-router";

export default function Product({ data })
{
    return (
        <div className="bg-white shadow-md rounded-xl overflow-hidden w-full transition-all duration-300 hover:shadow-xl">
    <Link to={`/product/${data.documentId}`} className="block no-underline text-black">
        <img
            src={`http://localhost:1337${data.images[0].formats.thumbnail.url}`}
            alt={data.name}
            className="w-full h-48 object-contain mt-3"
        />
        <div className="p-4">
            <p className="text-lg font-semibold mb-2">{data.name}</p>
            <p className="text-md font-bold text-gray-700">{data.price} MDL</p>
        </div>
    </Link>
</div>
    )
}