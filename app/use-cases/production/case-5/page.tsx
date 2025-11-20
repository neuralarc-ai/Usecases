"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Energy Efficiency & Cost Optimization"
      backHref="/use-cases/production"
      backLabel="Back to Production"
      businessChallenge={{
        title: "Business Challenge",
        description: "Manufacturing energy costs $15M+ annually, 20-30% waste, limited optimization, manual monitoring, and poor visibility. Energy challenges include high consumption, inefficient processes, limited control, no optimization, and rising costs."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes energy use with real-time monitoring including energy consumption, equipment efficiency, process optimization, and waste identification. The system provides AI-powered optimization with consumption prediction, efficiency recommendations, load balancing, and peak demand management. It includes automated control with equipment scheduling, process optimization, temperature control, and lighting management. The system enables cost management with rate optimization, demand charge reduction, renewable integration, and cost allocation, plus sustainability tracking with carbon footprint, renewable percentage, efficiency trends, and ESG reporting."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "25%",
          label: "Reduction in energy costs"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$3.75M",
          label: "Annual savings"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "30%",
          label: "Reduction in carbon footprint"
        },
        {
          icon: RiFocus3Line,
          value: "Improved",
          label: "ESG metrics"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Energy Monitoring",
            description: "Tracks all energy consumption"
          },
          {
            title: "Pattern Analysis",
            description: "Identifies usage patterns"
          },
          {
            title: "Optimization Analysis",
            description: "Finds efficiency opportunities"
          },
          {
            title: "Automated Control",
            description: "Adjusts equipment and processes"
          },
          {
            title: "Cost Optimization",
            description: "Manages demand and rates"
          },
          {
            title: "Performance Tracking",
            description: "Monitors savings"
          },
          {
            title: "Sustainability Reporting",
            description: "Tracks environmental impact"
          },
          {
            title: "Continuous Improvement",
            description: "Optimizes ongoing"
          }
        ]
      }}
    />
  );
}

