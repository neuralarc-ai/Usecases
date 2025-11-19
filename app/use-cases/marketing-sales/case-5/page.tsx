"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Customer Acquisition Cost Optimization"
      backHref="/use-cases/marketing-sales"
      backLabel="Back to Marketing & Sales"
      businessChallenge={{
        title: "Business Challenge",
        description: "Customer acquisition costs (CAC) average $150, with 40% variation across channels, limited optimization, poor targeting, high waste, and $8M+ in inefficient spend. CAC challenges include no channel optimization, poor targeting, generic messaging, limited testing, and delayed insights."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes acquisition with channel optimization including CAC by channel, LTV:CAC ratios, efficiency scoring, and budget allocation. The system provides targeting optimization with lookalike modeling, propensity scoring, audience refinement, and waste reduction. It includes creative optimization with A/B testing, performance prediction, message optimization, and visual optimization. The system enables bid management with automated bidding, budget pacing, performance optimization, and ROI maximization, plus lifetime value prediction with customer value forecasting, acquisition investment optimization, segment prioritization, and retention integration."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "35%",
          label: "Reduction in CAC"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "5:1",
          label: "LTV:CAC ratio improvement"
        },
        {
          icon: RiFocus3Line,
          value: "Improved",
          label: "Targeting and waste reduction"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$8M",
          label: "Annual efficiency gain"
        }
      ]}
    />
  );
}

