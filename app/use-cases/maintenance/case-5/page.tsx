"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Maintenance Analytics & Optimization"
      backHref="/use-cases/maintenance"
      backLabel="Back to Maintenance"
      businessChallenge={{
        title: "Business Challenge",
        description: "Maintenance analytics involves limited visibility, manual reporting, delayed insights, poor decision-making, and suboptimal performance. Analytics challenges include no real-time data, manual processes, limited metrics, poor visualization, and delayed actions."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides comprehensive maintenance analytics with real-time dashboards including maintenance performance, equipment health, cost metrics, and efficiency indicators. The system provides predictive analytics with maintenance needs forecasting, cost prediction, risk assessment, and optimization opportunities. It includes actionable insights with specific recommendations, priority ranking, implementation guidance, and impact estimation. The system enables continuous improvement with trend monitoring, pattern identification, best practice capture, and strategy refinement, plus benchmarking with industry standards, historical performance, and peer comparison."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "50%",
          label: "Improvement in efficiency"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Data-driven",
          label: "Decisions"
        },
        {
          icon: RiFocus3Line,
          value: "Continuous",
          label: "Optimization"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$4M",
          label: "Annual savings"
        }
      ]}
    />
  );
}

