import React from 'react';

/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    email: 'jane.cooper@example.com',
  },
  {
    name: 'Cody Fisher',
    title: 'Product Directives Officer',
    email: 'cody.fisher@example.com',
  },
  // More people...
];

const headings = ['Name', 'Title', 'Email'];

const thBaseClass =
  'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider';

export default function Table(props: {}) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full px-4 sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {headings.map((h, i) => (
                    <th
                      key={h}
                      scope="col"
                      className={
                        getCellVisibilityClasses(i) + ` ` + thBaseClass
                      }
                    >
                      {h}
                    </th>
                  ))}
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">View/Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, personIdx) => (
                  <tr
                    key={person.email}
                    className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {person.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                      {person.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                      {person.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View/Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function getCellVisibilityClasses(index: number): string {
  return cellVisibilityClassMap[index] || '';
}

const cellVisibilityClassMap: Record<number, string> = {
  0: '',
  1: 'hidden sm:table-cell',
  2: 'hidden md:table-cell',
  3: 'hidden lg:table-cell',
};
