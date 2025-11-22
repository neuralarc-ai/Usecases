"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Warehouse Automation & Optimization"
      backHref="/use-cases/inventory-management"
      backLabel="Back to Inventory Management"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Warehouse operations run at 65% efficiency with picking errors of 8% and 40% longer pick times than optimal",
          "Manual space allocation leads to 30% wasted capacity and poor space utilization",
          "High labor costs ($8M+ annually) and poor inventory accuracy (90%)",
          "Warehouse challenges include suboptimal layout, inefficient picking routes, manual processes, and limited visibility"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "RPA & Process Automation",
          tools: ["UiPath", "Automation Anywhere", "Blue Prism"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Layout Optimization",
          popularTools: "Manual planning",
          helium: true
        },
        {
          capability: "Route Optimization",
          popularTools: "Basic WMS systems",
          helium: true
        },
        {
          capability: "Real-Time Tracking",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Space Allocation",
          popularTools: "Manual allocation",
          helium: true
        },
        {
          capability: "End-to-End Optimization",
          popularTools: "UiPath, Automation Anywhere",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes warehouse operations with layout optimization using AI-powered space allocation, high-velocity item placement, seasonal adjustments, and capacity maximization. The system provides route optimization with shortest path calculation, batch picking optimization, zone picking coordination, and wave planning. It includes real-time tracking for inventory location, order status, worker productivity, and equipment utilization. The system enables predictive space allocation with demand-based placement, seasonal repositioning, promotional planning, and new product integration, plus robotics integration with automated picking, conveyor systems, sorting automation, and packing optimization."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "45%",
          label: "Improvement in warehouse efficiency"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "90%",
          label: "Reduction in picking errors"
        },
        {
          icon: RiFocus3Line,
          value: "35%",
          label: "Increase in storage capacity utilization"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5.5M",
          label: "Annual operational savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Order Receipt",
            description: "Order enters warehouse system"
          },
          {
            title: "Route Optimization",
            description: "Calculates optimal picking path"
          },
          {
            title: "Pick List Generation",
            description: "Creates prioritized pick list"
          },
          {
            title: "Real-Time Tracking",
            description: "Monitors picking progress"
          },
          {
            title: "Quality Verification",
            description: "Validates picked items"
          },
          {
            title: "Packing Optimization",
            description: "Determines optimal packaging"
          },
          {
            title: "Shipping Coordination",
            description: "Schedules carrier pickup"
          },
          {
            title: "Performance Analytics",
            description: "Tracks efficiency metrics"
          }
        ]
      }}
    />
  );
}

