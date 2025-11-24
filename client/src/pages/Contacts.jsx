

export default function Contacts()
{
    return(
        <section className="max-w-6xl mx-auto py-10 px-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">Contactează-ne</h1>
            <p className="text-center text-gray-700 mb-10">
                Ai întrebări sau sugestii? Completează formularul de mai jos și te vom contacta cât mai curând.
            </p>

            <div className="bg-white shadow-md rounded-xl p-8 max-w-3xl mx-auto">
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Nume</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Introdu numele tău"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Introdu emailul tău"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Mesaj</label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Scrie mesajul tău"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-colors"
                    >
                        Trimite
                    </button>
                </form>
            </div>
        </section>
    )
}