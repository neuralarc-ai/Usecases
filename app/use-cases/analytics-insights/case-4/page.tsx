"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Store Performance Analytics & Benchmarking"
      backHref="/use-cases/analytics-insights"
      backLabel="Back to Analytics & Insights"
      businessChallenge={{
        title: "Business Challenge",
        description: "Store performance varies widely, with top 20% producing 50% of profit, bottom 30% underperforming, limited performance visibility, generic improvement plans, and $10M+ in lost productivity. Store challenges include inconsistent metrics, limited benchmarking, poor root cause analysis, generic solutions, and delayed insights."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes store performance with performance analytics including sales per square foot, conversion rates, average transaction value, labor productivity, and profitability. The system provides benchmarking with peer comparison, best practice identification, performance gaps, and improvement potential. It includes root cause analysis with performance drivers, issue identification, opportunity assessment, and action recommendations. The system enables predictive analytics with performance forecasting, risk identification, opportunity detection, and investment prioritization, plus action tracking with improvement initiatives, implementation monitoring, effectiveness measurement, and best practice sharing."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "30%",
          label: "Improvement in average store performance"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "50%",
          label: "Reduction in performance variance"
        },
        {
          icon: RiFocus3Line,
          value: "Better",
          label: "Resource allocation"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$10M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Gathers store performance data"
          },
          {
            title: "Metric Calculation",
            description: "Computes all KPIs"
          },
          {
            title: "Benchmarking",
            description: "Compares to peers"
          },
          {
            title: "Gap Analysis",
            description: "Identifies performance gaps"
          },
          {
            title: "Root Cause Analysis",
            description: "Determines drivers"
          },
          {
            title: "Recommendation Generation",
            description: "Suggests improvements"
          },
          {
            title: "Action Planning",
            description: "Develops implementation plans"
          },
          {
            title: "Performance Tracking",
            description: "Monitors results"
          }
        ]
      }}
    />
  );
}

