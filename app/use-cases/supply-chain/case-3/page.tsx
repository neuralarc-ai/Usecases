"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiFocus3Line, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Logistics Network Optimization"
      backHref="/use-cases/supply-chain"
      backLabel="Back to Supply Chain"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Logistics network involves 50+ distribution centers and 200+ stores with complex routing",
          "$25M+ annual logistics costs from suboptimal network design",
          "Network challenges include manual planning and limited optimization",
          "Poor visibility, high costs, and inflexibility creating operational inefficiencies"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        },
        {
          category: "RPA & Process Automation",
          tools: ["UiPath", "Automation Anywhere", "Blue Prism"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Network Optimization",
          popularTools: "Manual planning",
          helium: true
        },
        {
          capability: "Demand-Driven Planning",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Transportation Optimization",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "Scenario Modeling",
          popularTools: "UiPath, Automation Anywhere",
          helium: true
        },
        {
          capability: "End-to-End Optimization",
          popularTools: "Blue Prism",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes logistics network with network optimization including DC location optimization, capacity planning, flow optimization, and cost minimization. The system provides demand-driven planning with demand forecasting, inventory positioning, replenishment planning, and seasonal adjustment. It includes transportation optimization with mode selection, carrier optimization, route planning, and load optimization. The system enables scenario modeling with what-if analysis, growth planning, risk assessment, and cost modeling, plus performance tracking with cost per unit, service levels, utilization rates, and efficiency metrics."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "20%",
          label: "Reduction in logistics costs"
        },
        {
          icon: RiFocus3Line,
          value: "Optimized",
          label: "Network design"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Improved",
          label: "Service levels"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5M",
          label: "Annual savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Network Analysis",
            description: "Analyzes current network"
          },
          {
            title: "Demand Modeling",
            description: "Forecasts demand by location"
          },
          {
            title: "Optimization",
            description: "Determines optimal network design"
          },
          {
            title: "Scenario Testing",
            description: "Models various configurations"
          },
          {
            title: "Recommendation Generation",
            description: "Suggests improvements"
          },
          {
            title: "Implementation Planning",
            description: "Develops rollout plan"
          },
          {
            title: "Execution Tracking",
            description: "Monitors implementation"
          },
          {
            title: "Performance Measurement",
            description: "Validates improvements"
          }
        ]
      }}
    />
  );
}

