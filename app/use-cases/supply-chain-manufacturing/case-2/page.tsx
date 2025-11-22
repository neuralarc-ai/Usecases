"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiTimeLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Material Planning & Inventory Optimization"
      backHref="/use-cases/supply-chain-manufacturing"
      backLabel="Back to Supply Chain"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Material planning involves manual planning with 30% excess inventory and 20% stockouts",
          "Limited visibility and $12M+ in inventory costs",
          "Planning challenges include manual processes and poor forecasting",
          "Limited optimization, high costs, and production disruptions"
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
          capability: "Demand-Driven Planning",
          popularTools: "Manual planning",
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
          capability: "End-to-End Optimization",
          popularTools: "Manual processes",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes material planning with demand-driven planning including production demand integration, material requirement calculation, lead time consideration, and safety stock optimization. The system provides inventory optimization with optimal stock levels, ABC analysis, turnover optimization, and cost minimization. It includes automated replenishment with reorder point calculation, order quantity optimization, supplier coordination, and delivery scheduling. The system enables real-time visibility with inventory tracking, material flow monitoring, consumption analysis, and availability forecasting, plus cost optimization with inventory cost reduction, carrying cost minimization, and total cost optimization."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "30%",
          label: "Reduction in inventory costs"
        },
        {
          icon: RiTimeLine,
          value: "95%",
          label: "Material availability"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Reduced",
          label: "Stockouts and excess"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$4M",
          label: "Annual savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Demand Integration",
            description: "Receives production demand requirements"
          },
          {
            title: "Material Requirement Calculation",
            description: "Calculates material needs based on demand"
          },
          {
            title: "Inventory Optimization",
            description: "Determines optimal stock levels"
          },
          {
            title: "Safety Stock Calculation",
            description: "Calculates appropriate buffer inventory"
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
            title: "Real-Time Visibility",
            description: "Tracks inventory and material flow"
          },
          {
            title: "Continuous Optimization",
            description: "Refines planning based on performance"
          }
        ]
      }}
    />
  );
}

