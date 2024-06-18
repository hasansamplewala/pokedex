import Image from "next/image";

export default async function PokemonDetailsCard({ pokemon = {} }) {


  // console.log('pokemon', pokemon);
  if (!Object.keys(pokemon).length) {
    return (
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          height={800}
          width={800}
          className="w-full h-64 object-cover" />

        <div className="absolute top-4 left-4  dark:bg-gray-50 text-gray-50 px-3 py-1 rounded-full text-sm font-medium">
          #{pokemon.id}
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{pokemon.name}</h2>
          <div className="bg-yellow-500 dark:bg-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
            {pokemon.types[0].type.name}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <GaugeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="font-medium">HP: {pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}</span>
          </div>
          <div className="flex items-center gap-2">
            <BoltIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="font-medium">Attack: {pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="font-medium">Defense: {pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat}</span>
          </div>
          <div className="flex items-center gap-2">
            <GaugeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="font-medium">Speed: {pokemon.stats.find(stat => stat.stat.name === 'speed').base_stat}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <CalendarDaysIcon className="w-4 h-4" />
          <span>Discovered in 1996</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <CompassIcon className="w-4 h-4" />
          <span>Native to Kanto region</span>
        </div>
      </div>
    </div>
  )
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function CompassIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}