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
        description: "Material planning involves manual planning, 30% excess inventory, 20% stockouts, limited visibility, and $12M+ in inventory costs. Planning challenges include manual processes, poor forecasting, limited optimization, high costs, and production disruptions."
      }}
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
    />
  );
}

