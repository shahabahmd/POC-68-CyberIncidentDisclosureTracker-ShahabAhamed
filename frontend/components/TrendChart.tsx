"use client";

import ReactECharts from "echarts-for-react";

export default function TrendChart({ data }: any) {
  const months = Object.keys(data).sort();
  const values = months.map((m) => data[m]);

  const option = {
    backgroundColor: "transparent",

    xAxis: {
      type: "category",
      data: months,
    },

    yAxis: {
      type: "value",
    },

    series: [
      {
        data: values,
        type: "line",
        smooth: true,
      },
    ],
  };

  return (
    <div className="bg-[#0B1117] rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4 text-cyan-400">
        Incident Timeline
      </h2>

      <ReactECharts option={option} style={{ height: 350 }} />
    </div>
  );
}