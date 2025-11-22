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
        challenges: [
          "Business intelligence relies on daily/weekly reports (outdated) with manual report generation taking 20+ hours weekly",
          "Limited drill-down capability and inconsistent metrics with poor data quality",
          "BI challenges include delayed insights, limited accessibility, and poor visualization",
          "No predictive analytics and high IT dependency creating bottlenecks"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        },
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Real-Time Dashboards",
          popularTools: "Daily/weekly reports",
          helium: true
        },
        {
          capability: "Self-Service Analytics",
          popularTools: "IT-dependent reports",
          helium: true
        },
        {
          capability: "Automated Reporting",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Predictive Analytics",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "End-to-End Automation",
          popularTools: "Zapier, Make, n8n",
          helium: true
        }
      ]}
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
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Integration",
            description: "Consolidates from all sources"
          },
          {
            title: "Data Quality Validation",
            description: "Ensures accuracy"
          },
          {
            title: "Metric Calculation",
            description: "Computes KPIs"
          },
          {
            title: "Dashboard Update",
            description: "Refreshes visualizations"
          },
          {
            title: "Alert Generation",
            description: "Notifies of significant changes"
          },
          {
            title: "Report Generation",
            description: "Creates scheduled reports"
          },
          {
            title: "User Access",
            description: "Provides self-service access"
          },
          {
            title: "Performance Tracking",
            description: "Monitors usage and value"
          }
        ]
      }}
    />
  );
}

