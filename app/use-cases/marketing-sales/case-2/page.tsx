"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Dynamic Pricing & Promotion Optimization"
      backHref="/use-cases/marketing-sales"
      backLabel="Back to Marketing & Sales"
      businessChallenge={{
        title: "Business Challenge",
        description: "Static pricing updated weekly, missing 90% of optimization opportunities, manual promotion planning leading to 30% margin erosion, 25% stockouts during promotions, $15M+ in lost margin annually, and poor competitive positioning. Pricing challenges include infrequent updates, limited data analysis, no real-time adjustment, poor promotion planning, and competitive disadvantage."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes pricing dynamically with real-time dynamic pricing including demand-based pricing, competitive monitoring, inventory consideration, margin protection, and customer segmentation. The system provides promotion optimization with discount optimization, product selection, timing optimization, channel allocation, and margin protection. It includes personalized pricing with customer-specific offers, loyalty discounts, cart abandonment recovery, and win-back pricing. The system enables competitive monitoring with real-time price tracking, market positioning, price matching rules, and competitive response, plus margin protection with minimum margin rules, profitability analysis, discount limits, and approval workflows."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "25%",
          label: "Improvement in gross margin"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "40%",
          label: "Increase in promotion effectiveness"
        },
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Pricing vs weekly updates"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$18M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Market Data Collection",
            description: "Gathers demand, competition, inventory data"
          },
          {
            title: "Demand Analysis",
            description: "Forecasts demand at various price points"
          },
          {
            title: "Competitive Monitoring",
            description: "Tracks competitor pricing"
          },
          {
            title: "Price Optimization",
            description: "Calculates optimal price"
          },
          {
            title: "Margin Validation",
            description: "Ensures profitability"
          },
          {
            title: "Automated Price Update",
            description: "Updates across all channels"
          },
          {
            title: "Performance Tracking",
            description: "Monitors sales and margin"
          },
          {
            title: "Continuous Optimization",
            description: "Refines pricing strategy"
          }
        ]
      }}
    />
  );
}

