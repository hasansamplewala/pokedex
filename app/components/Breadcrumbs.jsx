'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

function Breadcrumbs() {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)

  // console.log('pathNames', pathNames);
  return (

    <ol className="flex items-center whitespace-nowrap py-3">
      <li className="inline-flex items-center">
        <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/">
          Home
        </a>
        <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </li>
      {pathNames.map((path, index) => (
        <li key={index} className="inline-flex items-center">
          <Link 
          className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" 
          href={`/${pathNames.slice(0, index + 1).join('/')}`}
          >
            {path}
          {
          pathNames.length - 1 === index ? null :
          <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>}
          </Link>
        </li>
      ))}

    </ol>
  )
}

export default Breadcrumbs