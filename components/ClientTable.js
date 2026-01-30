import Link from "next/link";

export default function ClientTable({ clients }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header Section */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-900">Clients</h2>
        <p className="text-sm text-gray-600 mt-1">
          {clients.length} {clients.length === 1 ? 'client' : 'clients'} total
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Condition
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Goal
              </th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clients.map(c => (
              <tr 
                key={c.id} 
                className="hover:bg-gray-50 transition-colors duration-150 group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {c.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="ml-4">
                      <Link 
                        href={`/client/${c.id}`}
                        className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors duration-150"
                      >
                        {c.name}
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {c.condition}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {c.goals}
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <Link
                    href={`/client/${c.id}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-150 group-hover:text-gray-900"
                  >
                    View Details →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {clients.length === 0 && (
        <div className="px-6 py-12 text-center">
          <p className="text-gray-500 text-sm">No clients found</p>
        </div>
      )}
    </div>
  );
}