"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Spare Parts Management & Inventory"
      backHref="/use-cases/maintenance"
      backLabel="Back to Maintenance"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Spare parts management involves excess inventory ($8M+) and stockouts causing delays",
          "Limited visibility and manual tracking leading to high costs",
          "Inventory challenges include overstocking and stockouts",
          "Limited visibility, manual processes, and high carrying costs"
        ]
      }}
      toolsUsed={[
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        },
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
          capability: "Demand Forecasting",
          popularTools: "Manual tracking",
          helium: true
        },
        {
          capability: "Inventory Optimization",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "Automated Replenishment",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Real-Time Visibility",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "End-to-End Management",
          popularTools: "Manual processes",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes spare parts inventory with demand forecasting including usage pattern analysis, failure prediction, lead time consideration, and safety stock calculation. The system provides inventory optimization with optimal stock levels, ABC analysis, turnover optimization, and cost minimization. It includes automated replenishment with reorder point calculation, order quantity optimization, supplier coordination, and delivery scheduling. The system enables real-time visibility with inventory tracking, location management, consumption monitoring, and availability forecasting, plus cost optimization with inventory cost reduction, carrying cost minimization, and total cost optimization."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "35%",
          label: "Reduction in inventory"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "95%",
          label: "Parts availability"
        },
        {
          icon: RiTimeLine,
          value: "Reduced",
          label: "Stockouts and delays"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$3M",
          label: "Annual savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Usage Pattern Analysis",
            description: "Analyzes historical parts consumption"
          },
          {
            title: "Failure Prediction",
            description: "Forecasts parts needs based on equipment health"
          },
          {
            title: "Demand Forecasting",
            description: "Predicts future parts requirements"
          },
          {
            title: "Optimal Stock Calculation",
            description: "Determines ideal inventory levels"
          },
          {
            title: "Automated Replenishment",
            description: "Generates purchase orders automatically"
          },
          {
            title: "Supplier Coordination",
            description: "Coordinates delivery schedules"
          },
          {
            title: "Real-Time Tracking",
            description: "Monitors inventory levels and locations"
          },
          {
            title: "Continuous Optimization",
            description: "Refines inventory based on performance"
          }
        ]
      }}
    />
  );
}

