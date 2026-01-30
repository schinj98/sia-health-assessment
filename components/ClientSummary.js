export default function ClientSummary({ client }) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold text-gray-900">{client.name}</h1>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
            Client ID: {client.id}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Condition</p>
            <p className="text-base text-gray-900">{client.condition}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Goals</p>
            <p className="text-base text-gray-900">{client.goals}</p>
          </div>
        </div>
      </div>
    );
  }