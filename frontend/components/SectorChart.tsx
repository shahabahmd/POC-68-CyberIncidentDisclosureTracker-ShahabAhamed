"use client";

import ReactECharts from "echarts-for-react";

export default function SectorChart({ data }: any) {
  if (!data) return null;
  const sectors = Object.keys(data);
  const values = Object.values(data);

  const option = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: 'rgba(11, 17, 23, 0.9)',
      borderColor: 'rgba(56, 189, 248, 0.3)',
      textStyle: {
        color: '#fff'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: "category",
      data: sectors,
      axisLabel: {
        color: '#94a3b8',
        fontSize: 11,
      },
      axisLine: {
        lineStyle: {
          color: '#1e293b'
        }
      }
    },
    yAxis: {
      type: "value",
      splitLine: {
        lineStyle: {
          color: '#1e293b',
          type: 'dashed'
        }
      },
      axisLabel: {
        color: '#94a3b8',
        fontSize: 11,
      }
    },
    series: [
      {
        data: values,
        type: "bar",
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#38bdf8' // color at 0%
            }, {
                offset: 1, color: '#0369a1' // color at 100%
            }],
            global: false // default is false
          },
          borderRadius: [4, 4, 0, 0]
        },
        emphasis: {
          itemStyle: {
            color: '#7dd3fc'
          }
        }
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
            Sector Exposure
          </h2>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[#0B1117] border border-slate-700 text-[9px] font-bold tracking-widest text-slate-400">DISTRIBUTION</span>
      </div>

      <div className="relative group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.1)] transition-all duration-500">
        <ReactECharts option={option} style={{ height: 320 }} />
      </div>
    </div>
  );
}