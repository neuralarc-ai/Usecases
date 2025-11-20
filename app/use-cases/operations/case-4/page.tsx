"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiFocus3Line, RiMoneyDollarCircleLine, RiTimeLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Resource Allocation & Capacity Planning"
      backHref="/use-cases/operations"
      backLabel="Back to Operations"
      businessChallenge={{
        title: "Business Challenge",
        description: "Banking operations struggle with resource allocation across branch staffing (tellers, bankers, managers), call center capacity, back-office processing, project teams, and seasonal variations. Manual planning leads to 20-30% over/under staffing, $5M+ in unnecessary labor costs, poor customer service during peaks, idle resources during valleys, limited ability to forecast demand, and reactive vs proactive staffing."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes resource allocation with AI. The system forecasts demand (transaction volume prediction, customer traffic forecasting, seasonal pattern analysis, event impact modeling), plans capacity (staffing requirements, skill mix optimization, shift scheduling, overtime management), enables real-time adjustment (intraday reallocation, break scheduling, task prioritization, workload balancing), tracks performance (productivity metrics, quality scores, customer satisfaction, utilization rates), and provides scenario planning (what-if analysis, growth scenarios, cost modeling, ROI calculation)."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "30%",
          label: "Improvement in resource utilization"
        },
        {
          icon: RiFocus3Line,
          value: "95%",
          label: "Forecast accuracy"
        },
        {
          icon: RiTimeLine,
          value: "40%",
          label: "Reduction in customer wait times"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5M",
          label: "Annual labor cost savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Historical Analysis",
            description: "Analyzes past demand patterns"
          },
          {
            title: "Demand Forecasting",
            description: "Predicts future requirements"
          },
          {
            title: "Capacity Calculation",
            description: "Determines staffing needs"
          },
          {
            title: "Schedule Optimization",
            description: "Creates optimal schedules"
          },
          {
            title: "Real-Time Monitoring",
            description: "Tracks actual vs forecast"
          },
          {
            title: "Dynamic Adjustment",
            description: "Reallocates resources as needed"
          },
          {
            title: "Performance Tracking",
            description: "Measures outcomes"
          },
          {
            title: "Continuous Improvement",
            description: "Refines forecasts"
          }
        ]
      }}
    />
  );
}

