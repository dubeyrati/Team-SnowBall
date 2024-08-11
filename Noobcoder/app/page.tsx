import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center py-12">
      <h1 className="text-6xl font-extrabold mb-16 text-center text-gray-200">
        Welcome to <span className="text-indigo-600">NoobCoders</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl">
        
        {/* Playground Section */}
        <div className="relative bg-indigo-500 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-br from-blue-300 to-blue-700 rounded-xl"></div>
          <h2 className="relative z-10 text-4xl font-bold mb-6 text-white">Playground</h2>
          <p className="relative z-10 mb-6 text-white text-lg">
            Dive into code experimentation. Write, test, and refine your code in a fun environment!
          </p>
          <Link href="/editor">
            <div className="relative z-10 inline-block bg-white text-indigo-700 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-indigo-50 transition-colors duration-300">
              Go to Editor
            </div>
          </Link>
        </div>

        {/* Coding Arena Section */}
        <div className="relative bg-green-500 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-br from-green-300 to-green-700 rounded-xl"></div>
          <h2 className="relative z-10 text-4xl font-bold mb-6 text-white">Coding Arena</h2>
          <p className="relative z-10 mb-6 text-white text-lg">
            Challenge your coding skills with various problems. Are you up for it?
          </p>
          <Link href="/arena">
            <div className="relative z-10 inline-block bg-white text-green-700 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-green-50 transition-colors duration-300">
              Enter the Arena
            </div>
          </Link>
        </div>

        {/* Battleground Section */}
        <div className="relative bg-red-500 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-br from-red-300 to-red-700 rounded-xl"></div>
          <h2 className="relative z-10 text-4xl font-bold mb-6 text-white">Battleground</h2>
          <p className="relative z-10 mb-6 text-white text-lg">
            Join the competition! Show off your coding skills in live contests.
          </p>
          <Link href="/battleground">
            <div className="relative z-10 inline-block bg-white text-red-700 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-red-50 transition-colors duration-300">
              Join the Battleground
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
