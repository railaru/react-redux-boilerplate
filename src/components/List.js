import React from 'react';

import { useSelector } from 'react-redux';

export default function List() {
  const items = useSelector(state => state.itemList);

  return (
    <>
      {items && (
        <ul>
          {items.map(item => (
            <li key={item.id} className="mt-4">
              <div
                className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex"
                role="alert"
              >
                <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                  New!
                </span>
                <span className="font-semibold mr-2 text-left flex-auto">
                  {item.name}
                </span>
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
