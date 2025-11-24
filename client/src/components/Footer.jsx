import { Link } from "react-router"

export default function Footer ()
{
    return(
        <footer className="bg-gray-900 text-white mt-10 py-10 px-6">
            <div className="mmax-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-2">wwww.cosmetica.md</h2>
                    <p className="text-sm text-gray-400" >Parfumerie de elită </p>
                </div>
            </div>

            <div>
                 <ul className="space-y-2 text-sm text-gray-400 text-right px-20">
                 <li><Link to="/"className="hover:text-white transition-colors">Acasă</Link></li>
                 <li><Link to="/categorii" className="hover:text-white transition-colors">Categorii</Link></li>
                 <li><Link to="/contacts" className="hover:text-white transition-colors">Contacte</Link></li>
                </ul>    
            </div>
            
            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400">
                <p className="text-sm text-gray-300">© 2025 wwww.cosmetica.md - Toate drepturile sunt rezervate </p>
            </div>
        </footer>
    )
}