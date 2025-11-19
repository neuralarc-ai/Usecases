"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Resource Analytics & Performance Tracking"
      backHref="/use-cases/resource-planning"
      backLabel="Back to Resource Planning"
      businessChallenge={{
        title: "Business Challenge",
        description: "Resource analytics involves limited visibility, manual reporting, delayed insights, poor decision-making, and suboptimal performance. Analytics challenges include no real-time data, manual processes, limited metrics, poor visualization, and delayed actions."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides comprehensive resource analytics with real-time dashboards including utilization rates, capacity metrics, skill distribution, and performance indicators. The system provides performance tracking with individual performance, team performance, project outcomes, and trend analysis. It includes predictive analytics with demand forecasting, capacity planning, risk assessment, and optimization opportunities. The system enables actionable insights with specific recommendations, priority ranking, implementation guidance, and impact estimation, plus continuous improvement with trend monitoring, pattern identification, best practice capture, and strategy refinement."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "Real-time",
          label: "Analytics and insights"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Data-driven",
          label: "Decisions"
        },
        {
          icon: RiFocus3Line,
          value: "Better",
          label: "Resource optimization"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1M",
          label: "Annual value"
        }
      ]}
    />
  );
}

