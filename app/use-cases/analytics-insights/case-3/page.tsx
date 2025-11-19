"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Product Performance Analytics & Optimization"
      backHref="/use-cases/analytics-insights"
      backLabel="Back to Analytics & Insights"
      businessChallenge={{
        title: "Business Challenge",
        description: "Product performance analysis is monthly reviews (too infrequent), limited to sales metrics, missing profitability insights, poor markdown optimization, and $8M+ in lost margin. Product challenges include slow-moving inventory, suboptimal pricing, poor assortment, missed trends, and inefficient markdowns."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes product performance with performance analytics including sales velocity, margin analysis, inventory turnover, customer ratings, and return rates. The system provides profitability analysis with true product profitability, cost allocation, margin optimization, and pricing recommendations. It includes markdown optimization with optimal timing, discount levels, clearance strategy, and margin protection. The system enables assortment optimization with product mix analysis, category performance, new product introduction, and discontinuation recommendations, plus trend detection with emerging trends, declining products, seasonal patterns, and competitive threats."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Product insights vs monthly reviews"
        },
        {
          icon: RiBarChartLine,
          value: "25%",
          label: "Improvement in gross margin"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "40%",
          label: "Reduction in slow-moving inventory"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$8M",
          label: "Annual margin improvement"
        }
      ]}
    />
  );
}

