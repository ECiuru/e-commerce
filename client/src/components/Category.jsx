import { Link } from "react-router";

export default function Category({ data })
{
    return (<li className="bg-pink-50 shadow-md rounded-xl p-4 transition-transform hover:scale-105">
        <Link to={`/category/${data.documentId}`} className="block no-underline text-gray-800 hover:text-gray-600 text-center">
            { data.name }
        </Link>
    </li>);
}