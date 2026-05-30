"use client";

import ReactECharts from "echarts-for-react";

export default function SeverityChart({ data }: any) {
  const option = {
    backgroundColor: "transparent",

    tooltip: {
      trigger: "item",
    },

    series: [
      {
        type: "pie",
        radius: "70%",
        data: Object.entries(data).map(([name, value]) => ({
          name,
          value,
        })),
      },
    ],
  };

  return (
    <div className="bg-[#0B1117] rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4 text-cyan-400">
        Severity Distribution
      </h2>

      <ReactECharts option={option} style={{ height: 350 }} />
    </div>
  );
}