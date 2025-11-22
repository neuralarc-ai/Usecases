"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine, RiFocus3Line } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Capacity Planning & Utilization Optimization"
      backHref="/use-cases/resource-planning"
      backLabel="Back to Resource Planning"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Resource planning involves manual capacity tracking with limited visibility",
          "Suboptimal utilization (65%) and missed revenue ($5M+ annually)",
          "Burnout from overallocation and bench time waste",
          "Planning challenges include no real-time visibility, manual processes, poor forecasting, and inconsistent allocation"
        ]
      }}
      toolsUsed={[
        {
          category: "Task & Project Management",
          tools: ["Asana", "Linear", "Monday.com"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        },
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Real-Time Capacity Tracking",
          popularTools: "Manual tracking",
          helium: true
        },
        {
          capability: "Demand Forecasting",
          popularTools: "Asana, Linear, Monday.com",
          helium: true
        },
        {
          capability: "Optimal Allocation",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Utilization Analytics",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "End-to-End Optimization",
          popularTools: "Manual processes",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes resource planning with real-time capacity tracking including current utilization, future availability, skill inventory, and location considerations. The system provides demand forecasting with pipeline analysis, historical patterns, seasonal trends, and growth projections. It includes optimal allocation with skill matching, availability optimization, travel minimization, and development opportunities. The system enables utilization analytics with individual utilization, team utilization, skill utilization, and trend analysis, plus scenario planning with what-if analysis, capacity scenarios, hiring needs, and investment priorities."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "85%",
          label: "Target utilization"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5M",
          label: "Annual revenue increase"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Reduced",
          label: "Burnout from better balance"
        },
        {
          icon: RiFocus3Line,
          value: "Data-driven",
          label: "Hiring decisions"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Demand Forecasting",
            description: "Predicts resource needs"
          },
          {
            title: "Capacity Assessment",
            description: "Evaluates available capacity"
          },
          {
            title: "Gap Analysis",
            description: "Identifies shortfalls or excess"
          },
          {
            title: "Optimal Allocation",
            description: "Matches resources to projects"
          },
          {
            title: "Utilization Tracking",
            description: "Monitors actual utilization"
          },
          {
            title: "Adjustment",
            description: "Reallocates as needed"
          },
          {
            title: "Analytics",
            description: "Analyzes patterns and trends"
          },
          {
            title: "Planning",
            description: "Informs hiring and development"
          }
        ]
      }}
    />
  );
}

