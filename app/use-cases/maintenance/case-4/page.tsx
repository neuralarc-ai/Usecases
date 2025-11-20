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
        description: "Spare parts management involves excess inventory ($8M+), stockouts causing delays, limited visibility, manual tracking, and high costs. Inventory challenges include overstocking, stockouts, limited visibility, manual processes, and high carrying costs."
      }}
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

