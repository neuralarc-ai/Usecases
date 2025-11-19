"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Safety Analytics & Reporting"
      backHref="/use-cases/safety-compliance"
      backLabel="Back to Safety & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        description: "Safety analytics involves limited visibility, manual reporting, delayed insights, poor decision-making, and slow improvement. Analytics challenges include no real-time data, manual processes, limited metrics, poor visualization, and delayed actions."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides comprehensive safety analytics with real-time dashboards including incident rates, safety performance, compliance status, and risk indicators. The system provides predictive analytics with incident forecasting, risk prediction, trend analysis, and improvement opportunities. It includes actionable insights with specific recommendations, priority ranking, implementation guidance, and impact estimation. The system enables reporting automation with compliance reports, safety dashboards, trend analysis, and exception reporting, plus continuous improvement with trend monitoring, pattern identification, best practice capture, and strategy refinement."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "Real-time",
          label: "Safety analytics"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Data-driven",
          label: "Decisions"
        },
        {
          icon: RiFocus3Line,
          value: "Continuous",
          label: "Improvement"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$3M",
          label: "Annual value"
        }
      ]}
    />
  );
}

