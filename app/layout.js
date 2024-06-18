import "./globals.css";
import Search from "./components/Search";
import { getPokemonTypes } from "./utils";

import Breadcrumbs from "./components/Breadcrumbs";

export const metadata = {
  title: "Pokedex by Hasan",
  description: "A simple Pokedex app built with Next.js and Tailwind CSS",
};

export default async function RootLayout({ children }) {

  const pokemonTypes = await getPokemonTypes();
  // console.log('pokemonTypes', pokemonTypes);

  return (
    <html lang="en">

      <body >
        <nav
          className="flex flex-col items-center justify-between p-4"
        >
          <h1 className="text-4xl font-bold">Welcome to the Pokemon App</h1>
          <p className="text-lg">Use the search bar to find your favorite Pokemon</p>
          <p className="text-lg">Use the dropdown to filter by type</p>
          <Search
            pokemonTypes={pokemonTypes}
          />

    <Breadcrumbs />
        </nav>

        {children}

      </body>
    </html>
  );
}
