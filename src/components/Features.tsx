import { ShieldCheckIcon, UserIcon } from '@heroicons/react/24/solid'; // Tailwind Heroicons
const Features = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-500 mb-10">Pourquoi utiliser Anonymous Mail ?</h2>

        <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-12">
          
          {/* Feature 1 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <ShieldCheckIcon className="h-16 w-16 text-purple-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-4">Sécurité maximale</h3>
            <p className="text-gray-400">
              Protégez vos données avec une sécurité de pointe. Votre anonymat est garanti à chaque étape.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            {/* <Icons className="h-16 w-16 text-purple-500 mb-4 mx-auto" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 h-16 w-16 text-purple-500 mb-4 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>

            <h3 className="text-xl font-semibold text-white mb-4">Rapidité inégalée</h3>
            <p className="text-gray-400">
              Envoyez et recevez vos mails instantanément. Notre technologie garantit une rapidité optimale.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <UserIcon className="h-16 w-16 text-purple-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-4">Facilité d’utilisation</h3>
            <p className="text-gray-400">
              Utilisez Anonymous Mail facilement, sans complication. Une interface simple et intuitive.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features