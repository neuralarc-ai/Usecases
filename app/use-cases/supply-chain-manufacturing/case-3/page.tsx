"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiFocus3Line, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Logistics Network Optimization"
      backHref="/use-cases/supply-chain-manufacturing"
      backLabel="Back to Supply Chain"
      businessChallenge={{
        title: "Business Challenge",
        description: "Logistics network involves 30+ facilities, complex routing, $20M+ annual logistics costs, suboptimal network design, and limited visibility. Network challenges include manual planning, limited optimization, poor visibility, high costs, and inflexibility."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes logistics network with network optimization including facility location optimization, capacity planning, flow optimization, and cost minimization. The system provides demand-driven planning with demand forecasting, inventory positioning, replenishment planning, and seasonal adjustment. It includes transportation optimization with mode selection, carrier optimization, route planning, and load optimization. The system enables scenario modeling with what-if analysis, growth planning, risk assessment, and cost modeling, plus performance tracking with cost per unit, service levels, utilization rates, and efficiency metrics."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "25%",
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
            description: "Analyzes current logistics network"
          },
          {
            title: "Demand Forecasting",
            description: "Forecasts demand by location"
          },
          {
            title: "Facility Optimization",
            description: "Determines optimal facility locations"
          },
          {
            title: "Flow Optimization",
            description: "Optimizes material and product flows"
          },
          {
            title: "Transportation Optimization",
            description: "Optimizes routes and modes"
          },
          {
            title: "Scenario Modeling",
            description: "Tests various network configurations"
          },
          {
            title: "Implementation Planning",
            description: "Develops rollout strategy"
          },
          {
            title: "Performance Tracking",
            description: "Monitors network effectiveness"
          }
        ]
      }}
    />
  );
}

