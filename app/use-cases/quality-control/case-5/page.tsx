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
        challenges: [
          "Quality analytics involves limited visibility with manual reporting",
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
          category: "RPA & Process Automation",
          tools: ["UiPath", "Automation Anywhere", "Blue Prism"]
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
          capability: "Continuous Improvement",
          popularTools: "UiPath, Automation Anywhere",
          helium: true
        },
        {
          capability: "End-to-End Analytics",
          popularTools: "Blue Prism",
          helium: true
        }
      ]}
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

