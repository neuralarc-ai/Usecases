"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine, RiFocus3Line } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Performance Monitoring & Analytics"
      backHref="/use-cases/operations"
      backLabel="Back to Operations"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Operations leaders lack real-time visibility into process performance, team productivity, quality metrics, customer satisfaction, cost per transaction, and SLA compliance",
          "Manual reporting takes 2-3 days to produce, provides outdated information, and has limited drill-down capability",
          "Inconsistent reporting across departments and requires extensive manual effort",
          "Limited ability to identify issues proactively and optimize operations in real-time"
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
        }
      ]}
      comparisonTable={[
        {
          capability: "Real-Time Dashboards",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Automated Reporting",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Predictive Analytics",
          popularTools: "Historical reporting only",
          helium: true
        },
        {
          capability: "Proactive Alerts",
          popularTools: "Manual monitoring",
          helium: true
        },
        {
          capability: "Cross-Department Visibility",
          popularTools: "Siloed reporting",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides real-time operational intelligence. The system provides real-time dashboards (key performance indicators, trend analysis, drill-down capability, custom views by role), automates reporting (daily/weekly/monthly reports, exception reports, executive summaries, regulatory reports), provides predictive analytics (performance forecasting, issue prediction, capacity planning, risk identification), enables benchmarking (internal comparisons, industry benchmarks, best practice identification, gap analysis), and includes an alert system (SLA breaches, quality issues, unusual patterns, performance degradation)."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "Real-time",
          label: "Operational visibility"
        },
        {
          icon: RiTimeLine,
          value: "85%",
          label: "Reduction in reporting time"
        },
        {
          icon: RiFocus3Line,
          value: "Proactive",
          label: "Issue identification"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2M",
          label: "Annual improvement"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Gathers operational data in real-time"
          },
          {
            title: "Metric Calculation",
            description: "Computes KPIs automatically"
          },
          {
            title: "Trend Analysis",
            description: "Identifies patterns and changes"
          },
          {
            title: "Alert Generation",
            description: "Notifies of issues"
          },
          {
            title: "Dashboard Update",
            description: "Refreshes visualizations"
          },
          {
            title: "Report Generation",
            description: "Creates scheduled reports"
          },
          {
            title: "Predictive Analysis",
            description: "Forecasts future performance"
          },
          {
            title: "Action Tracking",
            description: "Monitors improvement initiatives"
          }
        ]
      }}
    />
  );
}

