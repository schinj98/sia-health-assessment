export default function FinalRecommendation({ qualityChecks, aiInsight, coachNote }) {
    const hasData = qualityChecks.length > 0 || aiInsight || coachNote;
  
    if (!hasData) {
      return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Final Recommendation</h2>
          <p className="text-sm text-gray-500 italic">
            Complete quality checks, AI insights, and coach notes to generate final recommendation
          </p>
        </div>
      );
    }
  
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Final Recommendation</h2>
  
        <div className="space-y-6">
          {qualityChecks.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Quality Check Results</h3>
              <div className="space-y-2">
                {qualityChecks.map((check, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        check.status === 'pass' ? 'bg-green-500' : 
                        check.status === 'warning' ? 'bg-yellow-500' : 
                        'bg-red-500'
                      }`} />
                      <span className="text-sm font-medium text-gray-900">{check.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {check.value != null ? String(check.value) : 'N/A'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
  
          {aiInsight && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">AI Analysis</h3>
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-md">
                <p className="text-sm text-gray-700 leading-relaxed">{aiInsight}</p>
              </div>
            </div>
          )}
  
          {coachNote && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Coach Notes</h3>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{coachNote}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }