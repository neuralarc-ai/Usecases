"use client";

import CaseDetail from "@/components/case-detail";
import { RiFocus3Line, RiTimeLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Customer Behavior Analytics & Insights"
      backHref="/use-cases/analytics-insights"
      backLabel="Back to Analytics & Insights"
      businessChallenge={{
        title: "Business Challenge",
        description: "Customer behavior analysis is limited to basic metrics (visits, purchases), delayed by days/weeks, missing 80% of behavioral signals, poor predictive capability, and $15M+ in missed opportunities. Analytics gaps include limited data integration, no real-time analysis, poor segmentation, generic insights, and delayed action."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides deep customer insights with behavioral tracking including all touchpoint capture, clickstream analysis, engagement metrics, and conversion funnels. The system provides predictive analytics with purchase prediction, churn risk, lifetime value, and next-best-action. It includes segmentation with behavioral clustering, value-based segments, engagement levels, and lifecycle stages. The system enables journey analysis with path to purchase, drop-off points, channel effectiveness, and optimization opportunities, plus real-time insights with live dashboards, automated alerts, trend detection, and anomaly identification."
      }}
      metrics={[
        {
          icon: RiFocus3Line,
          value: "360°",
          label: "Customer view"
        },
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Insights vs delayed analysis"
        },
        {
          icon: RiBarChartLine,
          value: "Improved",
          label: "Personalization"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$15M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Captures all customer interactions"
          },
          {
            title: "Behavior Analysis",
            description: "Analyzes patterns and preferences"
          },
          {
            title: "Segmentation",
            description: "Groups customers by behavior"
          },
          {
            title: "Predictive Modeling",
            description: "Forecasts future behavior"
          },
          {
            title: "Insight Generation",
            description: "Identifies opportunities"
          },
          {
            title: "Action Recommendations",
            description: "Suggests specific actions"
          },
          {
            title: "Execution",
            description: "Implements recommendations"
          },
          {
            title: "Performance Tracking",
            description: "Measures impact"
          }
        ]
      }}
    />
  );
}

