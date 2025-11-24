import { Link } from "react-router";
import { FiShoppingCart, FiHome} from "react-icons/fi"
import Contacts from "../pages/Contacts";

export default function Header()

{
    return (
        <header className="blue-200 shadow-md py-4 px-6">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Link to="/" className="text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors flex items-center gap-1"><FiHome className="w-5 h-5" /> Acasă</Link>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">Cosmetică.md - Parfumerie de elită</h1>
                <h1>Salut</h1>
                
           
                <div className="flex items-center gap-6">
                <Link to="/Contacts" className="text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors">Contacte</Link>
                <Link to="/cart" className="text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors"><FiShoppingCart className="w-5 h-5" /></Link>
                </div>
                 
            </div>
        </header>
    );
}