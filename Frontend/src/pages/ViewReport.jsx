import { useLocation } from "react-router-dom";

function ViewReport() {
  const { state } = useLocation();
  const { run } = state || {};  // <-- expect run, not data
  console.log(run);

  if (!run) return <div>No run data</div>;

  return (
   <div className="min-h-screen flex items-center justify-center p-6 bg-gray-900">
  <div className="shadow-lg bg-gray-800 rounded-2xl p-6 w-full max-w-xl space-y-4">
    <h1 className="text-2xl font-semibold text-gray-100 border-b border-gray-700 pb-3">
      Report Details
    </h1>

    <div className="space-y-2 text-gray-200">
      <p>
        <span className="font-medium text-gray-400">Stack Trace:</span> <p className="text-red-500">{run.stack_trace}</p>
      </p>
      <p>
        <span className="font-medium text-gray-400">Passed:</span> {run.passed}
      </p>
      <p>
        <span className="font-medium text-gray-400">Failed:</span> {run.failed}
      </p>
      <p>
        <span className="font-medium text-gray-400">Percentage:</span>{" "}
        <span className="font-mono text-green-400 font-semibold">
          {((run.passed / run.total) * 100).toFixed(2)}%
        </span>
      </p>
      <p>
        <span className="font-medium text-gray-400">Timestamp:</span>{" "}
        {new Date(run.timestamp).toLocaleString()}
      </p>
    </div>
  </div>
</div>

  );
}

export default ViewReport;
