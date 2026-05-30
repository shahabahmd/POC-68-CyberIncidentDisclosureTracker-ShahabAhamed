"use client";

import { useEffect, useState } from "react";
import DeveloperSignature from "@/components/DeveloperSignature";
import SeverityChart from "@/components/SeverityChart";
import SectorChart from "@/components/SectorChart";
import TrendChart from "@/components/TrendChart";
import IntelligenceSidebar from "@/components/IntelligenceSidebar";
import IncidentTable from "@/components/IncidentTable";

import {
  getMetrics,
  getAnalytics,
  getIncidents,
} from "@/lib/api";

export default function Home() {
  const [metrics, setMetrics] = useState<any>(null);
  const [analytics, setAnalytics] = useState<any>(null);

  const [incidents, setIncidents] = useState<any[]>([]);

  const [sectorFilter, setSectorFilter] = useState("");
  const [severityFilter, setSeverityFilter] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const metricsData = await getMetrics();
        const analyticsData = await getAnalytics();
        const incidentsData = await getIncidents();

        setMetrics(metricsData);
        setAnalytics(analyticsData);
        setIncidents(incidentsData);
      } catch (error) {
        console.error(
          "Failed to load dashboard data:",
          error
        );
      }
    }

    loadData();
  }, []);

  async function applyFilters(
    sector?: string,
    severity?: string
  ) {
    const data = await getIncidents(
      sector,
      severity
    );

    setIncidents(data);
  }

  useEffect(() => {
    applyFilters(
      sectorFilter,
      severityFilter
    );
  }, [sectorFilter, severityFilter]);

  if (!metrics || !analytics) {
    return (
      <main className="min-h-screen bg-[#030712] text-white flex items-center justify-center">
        <p className="text-cyan-400 text-lg">
          Loading Intelligence Rail...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white p-8">

      {/* Header */}
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
          Governance & Trust Rail
        </p>

        <h1 className="text-6xl font-bold text-cyan-400">
  CyberRail Intelligence
</h1>

<p className="text-slate-400 mt-2">
  Cyber Incident Disclosure Tracker
</p>

        <p className="text-slate-400 mt-3">
          Monitoring publicly disclosed cyber incidents,
          sector exposure, and cyber-risk intelligence patterns.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">

        <div className="glass-card border border-slate-800 rounded-xl p-5">
          <h2 className="text-sm text-slate-400 mb-2">
            Total Incidents
          </h2>

          <p className="text-4xl font-bold text-cyan-400">
            {metrics.total_incidents}
          </p>
        </div>

        <div className="glass-card border border-slate-800 rounded-xl p-5">
          <h2 className="text-sm text-slate-400 mb-2">
            High Severity
          </h2>

          <p className="text-4xl font-bold text-red-400">
            {metrics.high_severity}
          </p>
        </div>

        <div className="glass-card border border-slate-800 rounded-xl p-5">
          <h2 className="text-sm text-slate-400 mb-2">
            Sectors
          </h2>

          <p className="text-4xl font-bold text-cyan-400">
            {metrics.sectors}
          </p>
        </div>

        <div className="glass-card border border-slate-800 rounded-xl p-5">
          <h2 className="text-sm text-slate-400 mb-2">
            Companies
          </h2>

          <p className="text-4xl font-bold text-cyan-400">
            {metrics.companies}
          </p>
        </div>

      </div>

      {/* 70 / 30 Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-10 gap-6">

        {/* Main Stage */}
        <div className="xl:col-span-7">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <SeverityChart
              data={analytics.severity_breakdown}
            />

            <SectorChart
              data={analytics.sector_breakdown}
            />

          </div>

          <div className="mt-6">
            <TrendChart
              data={analytics.monthly_trend}
            />
          </div>

          {/* Filters */}
          <div className="mt-8 glass-card border border-slate-800 rounded-xl p-6">

            <h2 className="text-xl font-semibold text-cyan-400 mb-4">
              Filters
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <select
                value={sectorFilter}
                onChange={(e) =>
                  setSectorFilter(e.target.value)
                }
                className="bg-[#030712] border border-slate-700 rounded-lg p-3"
              >
                <option value="">
                  All Sectors
                </option>

                <option>
                  Technology
                </option>

                <option>
                  Finance
                </option>

                <option>
                  Healthcare
                </option>

                <option>
                  Retail
                </option>

                <option>
                  Energy
                </option>

                <option>
                  Government
                </option>

                <option>
                  Telecommunications
                </option>

              </select>

              <select
                value={severityFilter}
                onChange={(e) =>
                  setSeverityFilter(e.target.value)
                }
                className="bg-[#030712] border border-slate-700 rounded-lg p-3"
              >
                <option value="">
                  All Severities
                </option>

                <option>
                  Low
                </option>

                <option>
                  Medium
                </option>

                <option>
                  High
                </option>

                <option>
                  Critical
                </option>

              </select>

            </div>

          </div>

          {/* Incident Table */}
          <div className="mt-6">
            <IncidentTable
              incidents={incidents}
            />
          </div>

        </div>

        {/* Sidebar */}
        <div className="xl:col-span-3">

          <IntelligenceSidebar
            metrics={metrics}
            analytics={analytics}
          />

        </div>

      </div>

    </main>
  );
}
<DeveloperSignature />