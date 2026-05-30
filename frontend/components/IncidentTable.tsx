"use client";

export default function IncidentTable({
  incidents,
}: any) {
  return (
    <div className="bg-[#0B1117] border border-slate-800 rounded-xl p-6 overflow-auto">

      <h2 className="text-xl font-semibold text-cyan-400 mb-4">
        Incident Table
      </h2>

      <table className="w-full text-sm">

        <thead>
          <tr className="border-b border-slate-700">

            <th className="text-left p-2">Company</th>
            <th className="text-left p-2">Sector</th>
            <th className="text-left p-2">Severity</th>
            <th className="text-left p-2">Type</th>
            <th className="text-left p-2">Country</th>
            <th className="text-left p-2">Date</th>

          </tr>
        </thead>

        <tbody>

          {incidents.map((incident: any) => (

            <tr
              key={incident.id}
              className="border-b border-slate-800 hover:bg-slate-900"
            >
              <td className="p-2">{incident.company}</td>
              <td className="p-2">{incident.sector}</td>
              <td className="p-2">{incident.severity}</td>
              <td className="p-2">{incident.incident_type}</td>
              <td className="p-2">{incident.country}</td>
              <td className="p-2">{incident.date}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}