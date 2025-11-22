"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Resource Analytics & Performance Tracking"
      backHref="/use-cases/resource-planning"
      backLabel="Back to Resource Planning"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Resource analytics involves limited visibility with manual reporting",
          "Delayed insights and poor decision-making leading to suboptimal performance",
          "Analytics challenges include no real-time data and manual processes",
          "Limited metrics, poor visualization, and delayed actions"
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
          category: "Task & Project Management",
          tools: ["Asana", "Linear", "Monday.com"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Real-Time Dashboards",
          popularTools: "Manual reporting",
          helium: true
        },
        {
          capability: "Performance Tracking",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Predictive Analytics",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Actionable Insights",
          popularTools: "Asana, Linear, Monday.com",
          helium: true
        },
        {
          capability: "End-to-End Analytics",
          popularTools: "Manual processes",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides comprehensive resource analytics with real-time dashboards including utilization rates, capacity metrics, skill distribution, and performance indicators. The system provides performance tracking with individual performance, team performance, project outcomes, and trend analysis. It includes predictive analytics with demand forecasting, capacity planning, risk assessment, and optimization opportunities. The system enables actionable insights with specific recommendations, priority ranking, implementation guidance, and impact estimation, plus continuous improvement with trend monitoring, pattern identification, best practice capture, and strategy refinement."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "Real-time",
          label: "Analytics and insights"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Data-driven",
          label: "Decisions"
        },
        {
          icon: RiFocus3Line,
          value: "Better",
          label: "Resource optimization"
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
            title: "Data Aggregation",
            description: "Collects resource data from all sources"
          },
          {
            title: "Real-Time Dashboard",
            description: "Displays current utilization and metrics"
          },
          {
            title: "Performance Analytics",
            description: "Analyzes individual and team performance"
          },
          {
            title: "Trend Analysis",
            description: "Identifies patterns and trends"
          },
          {
            title: "Predictive Analytics",
            description: "Forecasts demand and capacity needs"
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
            title: "Continuous Monitoring",
            description: "Tracks optimization progress"
          }
        ]
      }}
    />
  );
}

