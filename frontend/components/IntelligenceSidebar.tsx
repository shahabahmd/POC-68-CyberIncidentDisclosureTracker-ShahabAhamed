"use client";

export default function IntelligenceSidebar({
  metrics,
  analytics,
}: any) {
  const topSector =
    analytics?.sector_breakdown
      ? Object.entries(analytics.sector_breakdown).sort(
          (a: any, b: any) => Number(b[1]) - Number(a[1])
        )[0]?.[0]
      : "N/A";

  const topSeverity =
    analytics?.severity_breakdown
      ? Object.entries(analytics.severity_breakdown).sort(
          (a: any, b: any) => Number(b[1]) - Number(a[1])
        )[0]?.[0]
      : "N/A";

  const isHighRisk = metrics?.high_severity > 20;

  const riskLevel = isHighRisk
    ? "Elevated Monitoring Required"
    : "Normal Monitoring";

  return (
    <div className="h-full glass-card border border-gray-800 rounded-xl p-6">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Intelligence Brief
      </h2>

      {/* KPI Metrics */}
      <div className="space-y-4 mb-8">

        <div>
          <p className="text-gray-400 text-sm">
            Total Incidents
          </p>
          <p className="text-3xl font-bold">
            {metrics?.total_incidents}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            High Severity
          </p>
          <p className="text-3xl font-bold text-red-400">
            {metrics?.high_severity}
          </p>
        </div>

      </div>

      {/* Why This Matters */}
      <div className="mb-8">
        <h3 className="text-cyan-400 font-semibold mb-2">
          Why This Matters
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed">
          Public cyber disclosures reveal systemic weaknesses across
          critical digital infrastructure. Tracking incidents helps
          operators, regulators, and investors understand risk trends.
        </p>
      </div>

      {/* Who Controls The Rail */}
      <div className="mb-8">
        <h3 className="text-cyan-400 font-semibold mb-2">
          Who Controls The Rail
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed">
          SEC EDGAR filings, GDELT event streams, and disclosure
          regulations determine how cyber incidents become visible
          to the public.
        </p>
      </div>

      {/* Intelligence Signals */}
      <div className="mb-8">

        <h3 className="text-cyan-400 font-semibold mb-3">
          Intelligence Signals
        </h3>

        <div className="space-y-4">

          <div className="bg-[#030712] border border-slate-800 rounded-lg p-3">
            <p className="text-slate-400 text-xs uppercase">
              Most Targeted Sector
            </p>

            <p className="text-white font-semibold mt-1">
              {topSector}
            </p>
          </div>

          <div className="bg-[#030712] border border-slate-800 rounded-lg p-3">
            <p className="text-slate-400 text-xs uppercase">
              Dominant Severity
            </p>

            <p className="text-white font-semibold mt-1">
              {topSeverity}
            </p>
          </div>

          <div className="bg-[#030712] border border-slate-800 rounded-lg p-3">
            <p className="text-slate-400 text-xs uppercase">
              Companies Tracked
            </p>

            <p className="text-white font-semibold mt-1">
              {metrics?.companies}
            </p>
          </div>

          {/* Dynamic Risk Assessment */}
          <div
            className={`rounded-lg p-3 border ${
              isHighRisk
                ? "bg-red-500/10 border-red-500/20"
                : "bg-green-500/10 border-green-500/20"
            }`}
          >
            <p
              className={`text-xs uppercase ${
                isHighRisk
                  ? "text-red-400"
                  : "text-green-400"
              }`}
            >
              Risk Assessment
            </p>

            <p className="text-white font-semibold mt-1">
              {riskLevel}
            </p>

            <p className="text-slate-400 text-xs mt-2">
              {isHighRisk
                ? "Multiple high-severity disclosures indicate increased cyber exposure."
                : "Current disclosure patterns indicate stable monitoring conditions."}
            </p>
          </div>

        </div>

      </div>

      {/* Download Button */}
      <a
        href="http://127.0.0.1:8000/api/download"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-cyan-500/20 border border-cyan-500/30 hover:bg-cyan-500/30 text-cyan-400 font-semibold py-3 rounded-lg transition"
      >
        Download Sample Data
      </a>

    </div>
  );
}