"use client";

import ReactECharts from "echarts-for-react";

export default function SectorChart({ data }: any) {
  const sectors = Object.keys(data);
  const values = Object.values(data);

  const option = {
    backgroundColor: "transparent",

    xAxis: {
      type: "category",
      data: sectors,
    },

    yAxis: {
      type: "value",
    },

    series: [
      {
        data: values,
        type: "bar",
      },
    ],
  };

  return (
    <div className="bg-[#0B1117] rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4 text-cyan-400">
        Sector Exposure
      </h2>

      <ReactECharts option={option} style={{ height: 350 }} />
    </div>
  );
}