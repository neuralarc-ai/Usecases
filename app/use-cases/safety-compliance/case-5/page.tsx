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
        challenges: [
          "Safety analytics involves limited visibility with manual reporting",
          "Delayed insights and poor decision-making leading to slow improvement",
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
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Real-Time Dashboards",
          popularTools: "Manual reporting",
          helium: true
        },
        {
          capability: "Predictive Analytics",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Actionable Insights",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Reporting Automation",
          popularTools: "Zapier, Make, n8n",
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
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Gathers safety data from all sources"
          },
          {
            title: "Real-Time Dashboard",
            description: "Displays current safety metrics"
          },
          {
            title: "Incident Trend Analysis",
            description: "Identifies patterns and trends"
          },
          {
            title: "Predictive Analytics",
            description: "Forecasts safety risks"
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
            title: "Automated Reporting",
            description: "Generates compliance and safety reports"
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

