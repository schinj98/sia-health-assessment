export default function CoachNotes({ onChange }) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Coach Notes</h2>
          <p className="text-sm text-gray-600">
            Add your professional observations and recommendations
          </p>
        </div>
  
        <textarea
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your notes here..."
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-150"
        />
      </div>
    );
  }