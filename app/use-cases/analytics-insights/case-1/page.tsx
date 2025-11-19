"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Real-Time Business Intelligence & Dashboards"
      backHref="/use-cases/analytics-insights"
      backLabel="Back to Analytics & Insights"
      businessChallenge={{
        title: "Business Challenge",
        description: "Business intelligence relies on daily/weekly reports (outdated), manual report generation (20+ hours weekly), limited drill-down capability, inconsistent metrics, and poor data quality. BI challenges include delayed insights, limited accessibility, poor visualization, no predictive analytics, and high IT dependency."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides real-time BI with real-time dashboards including live data updates, interactive visualizations, drill-down capability, and mobile access. The system provides self-service analytics with drag-and-drop interface, custom report builder, ad-hoc analysis, and data exploration. It includes automated reporting with scheduled reports, alert-based reports, distribution automation, and multiple formats. The system enables predictive analytics with trend forecasting, anomaly detection, what-if scenarios, and recommendation engine, plus data governance with consistent definitions, data quality rules, access control, and audit trail."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Insights vs daily/weekly lag"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "85%",
          label: "Reduction in report generation time"
        },
        {
          icon: RiFocus3Line,
          value: "Self-service",
          label: "Access reduced IT dependency"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2M",
          label: "Annual value"
        }
      ]}
    />
  );
}

