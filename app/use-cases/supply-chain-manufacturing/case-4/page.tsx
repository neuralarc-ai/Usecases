"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Demand Forecasting & Planning"
      backHref="/use-cases/supply-chain-manufacturing"
      backLabel="Back to Supply Chain"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Demand forecasting involves manual planning with 40% forecast accuracy",
          "Limited data analysis and reactive planning leading to $10M+ in inventory and production costs",
          "Forecasting challenges include manual processes and limited data",
          "Poor accuracy, delayed insights, and suboptimal planning"
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
          capability: "Advanced Forecasting",
          popularTools: "Manual planning (40% accuracy)",
          helium: true
        },
        {
          capability: "Real-Time Demand Sensing",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Production Planning",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Inventory Planning",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "End-to-End Forecasting",
          popularTools: "Manual processes",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium improves demand forecasting with advanced forecasting including ML models analyzing 500+ factors, historical pattern analysis, seasonal trend identification, and external data integration. The system provides real-time demand sensing with point-of-sale data, market signals, trend analysis, and demand adjustment. It includes production planning with demand-driven scheduling, capacity optimization, material planning, and resource allocation. The system enables inventory planning with optimal stock levels, safety stock calculation, reorder planning, and cost optimization, plus continuous improvement with forecast accuracy tracking, model refinement, and optimization."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "90%",
          label: "Forecast accuracy"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Reduced",
          label: "Stockouts"
        },
        {
          icon: RiTimeLine,
          value: "Proactive",
          label: "Planning vs reactive"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$6M",
          label: "Annual value"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Gathers historical and external data"
          },
          {
            title: "ML Model Analysis",
            description: "Analyzes 500+ factors for forecasting"
          },
          {
            title: "Demand Forecasting",
            description: "Generates accurate demand predictions"
          },
          {
            title: "Real-Time Demand Sensing",
            description: "Adjusts forecasts with current signals"
          },
          {
            title: "Production Planning",
            description: "Creates demand-driven production schedules"
          },
          {
            title: "Inventory Planning",
            description: "Determines optimal stock levels"
          },
          {
            title: "Continuous Refinement",
            description: "Improves forecast accuracy over time"
          },
          {
            title: "Performance Tracking",
            description: "Monitors forecast accuracy and planning effectiveness"
          }
        ]
      }}
    />
  );
}

