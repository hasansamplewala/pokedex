'use client';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "../utils";

function Search({ pokemonTypes }) {

  const router = useRouter();
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());

  function handleTypeChange(e) {
    // Update the 'typeFilter' parameter based on the selected value
    const selectedType = e.target.value;
    if (selectedType) {
      newParams.set('typeFilter', selectedType);
    } else {
      newParams.delete('typeFilter');
    }
    // Push the updated URL with new parameters without submitting the form
    router.push('/' + createUrl(newParams.get('typeFilter') || '' 
    , ''));
  }

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchValue = formData.get('pokemonSearch');
    if (searchValue) {
      newParams.set('pokemonSearch', searchValue);
    } else {
      newParams.delete('pokemonSearch');
    }
    router.push('/' + createUrl('', newParams.get('pokemonSearch')));
  }

  return (

      <form
      onSubmit={onSubmit}
      className=" py-3 flex flex-col gap-2 justify-center relative w-full md:max-w-[420px]"
      >
        <select
        onChange={handleTypeChange}
        defaultValue={newParams?.get('typeFilter') || ''}
        name="typeFilter"
          className="p-2 rounded border">
          <option value="">Select a Pokemon Type</option>
          {!pokemonTypes ? <option>No Pokemon Types Found...</option>
            :
            pokemonTypes.map((type, index) => (
              <option
                key={index}
                value={type.name}>

                {type.name}

              </option>
            ))

          }

        </select>
        {/* Search by Name */}
        <div
          className="relative w-full"

        >
        <input
          key={newParams?.get('pokemonSearch')}
          type="text"
          name="pokemonSearch"
          placeholder="Search for pokemon by name..."
          autoComplete="off"
          defaultValue={newParams?.get('pokemonSearch') || ''}
          className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black"
        />
        <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
          <MagnifyingGlassIcon className="h-4" />
        </div>
        </div>
      </form>

  )
}

export default Search