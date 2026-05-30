"use client";

import ReactECharts from "echarts-for-react";

export default function SeverityChart({ data }: any) {
  if (!data) return null;
  const option = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      backgroundColor: 'rgba(11, 17, 23, 0.9)',
      borderColor: 'rgba(56, 189, 248, 0.3)',
      textStyle: {
        color: '#fff'
      }
    },
    legend: {
      orient: 'horizontal',
      bottom: 'bottom',
      textStyle: {
        color: '#94a3b8'
      }
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        center: ['50%', '45%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#030712',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
            color: '#fff'
          }
        },
        labelLine: {
          show: false
        },
        data: Object.entries(data).map(([name, value]) => {
          let itemColor = '#38bdf8'; // default cyan
          if (name.toLowerCase() === 'critical') itemColor = '#ef4444'; // red
          if (name.toLowerCase() === 'high') itemColor = '#f97316'; // orange
          if (name.toLowerCase() === 'medium') itemColor = '#eab308'; // yellow
          if (name.toLowerCase() === 'low') itemColor = '#22c55e'; // green
          
          return {
            name,
            value,
            itemStyle: { color: itemColor }
          };
        }),
      },
    ],
  };

  return (
    <div className="glass-card border border-slate-800/80 rounded-xl p-5 relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent group-hover:via-cyan-400/50 transition-colors"></div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-5 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-white">
            Severity Distribution
          </h2>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[#0B1117] border border-slate-700 text-[9px] font-bold tracking-widest text-slate-400">ANALYTICS</span>
      </div>

      <div className="relative group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.1)] transition-all duration-500">
        <ReactECharts option={option} style={{ height: 320 }} />
      </div>
    </div>
  );
}