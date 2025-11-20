"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiBarChartLine, RiHeartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Workload Balancing & Burnout Prevention"
      backHref="/use-cases/resource-planning"
      backLabel="Back to Resource Planning"
      businessChallenge={{
        title: "Business Challenge",
        description: "Workload management involves overallocation causing burnout, underutilization wasting capacity, limited visibility, poor balance, and high turnover. Workload challenges include manual tracking, no optimization, burnout risk, capacity waste, and retention issues."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium balances workloads intelligently with real-time workload tracking including current assignments, utilization rates, capacity limits, and burnout indicators. The system provides workload optimization with balanced distribution, capacity consideration, skill matching, and development opportunities. It includes burnout prevention with workload limits, early warning indicators, proactive adjustments, and wellness monitoring. The system enables performance analytics with utilization tracking, balance measurement, outcome analysis, and improvement recommendations, plus continuous adjustment with real-time rebalancing, proactive management, and optimal distribution."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "Reduced",
          label: "Burnout"
        },
        {
          icon: RiBarChartLine,
          value: "Better",
          label: "Workload balance"
        },
        {
          icon: RiHeartLine,
          value: "Improved",
          label: "Employee satisfaction"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1M",
          label: "Annual value"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Real-Time Workload Tracking",
            description: "Monitors current assignments and utilization"
          },
          {
            title: "Burnout Indicator Detection",
            description: "Identifies risk factors for burnout"
          },
          {
            title: "Workload Analysis",
            description: "Analyzes distribution across resources"
          },
          {
            title: "Balance Optimization",
            description: "Optimizes workload distribution"
          },
          {
            title: "Early Warning",
            description: "Alerts on overallocation risks"
          },
          {
            title: "Proactive Adjustment",
            description: "Reallocates work to prevent burnout"
          },
          {
            title: "Wellness Monitoring",
            description: "Tracks employee satisfaction and wellness"
          },
          {
            title: "Continuous Improvement",
            description: "Refines balancing algorithms"
          }
        ]
      }}
    />
  );
}

