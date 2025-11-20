"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Quality Analytics & Continuous Improvement"
      backHref="/use-cases/quality-control"
      backLabel="Back to Quality Control"
      businessChallenge={{
        title: "Business Challenge",
        description: "Quality analytics involves limited visibility, manual reporting, delayed insights, poor decision-making, and slow improvement. Analytics challenges include no real-time data, manual processes, limited metrics, poor visualization, and delayed actions."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides comprehensive quality analytics with real-time dashboards including defect rates, quality trends, process performance, and compliance status. The system provides predictive analytics with quality forecasting, risk assessment, trend prediction, and improvement opportunities. It includes actionable insights with specific recommendations, priority ranking, implementation guidance, and impact estimation. The system enables continuous improvement with trend monitoring, pattern identification, best practice capture, and strategy refinement, plus benchmarking with industry standards, historical performance, and peer comparison."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "Real-time",
          label: "Quality analytics"
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
          value: "$8M",
          label: "Annual value"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Gathers quality data from all sources"
          },
          {
            title: "Real-Time Dashboard",
            description: "Displays current quality metrics"
          },
          {
            title: "Trend Analysis",
            description: "Identifies patterns and trends"
          },
          {
            title: "Predictive Analytics",
            description: "Forecasts quality risks and opportunities"
          },
          {
            title: "Insight Generation",
            description: "Extracts actionable recommendations"
          },
          {
            title: "Priority Ranking",
            description: "Ranks improvements by impact"
          },
          {
            title: "Implementation Guidance",
            description: "Provides specific action plans"
          },
          {
            title: "Continuous Monitoring",
            description: "Tracks improvement progress"
          }
        ]
      }}
    />
  );
}

