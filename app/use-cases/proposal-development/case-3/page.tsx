"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Pricing Optimization & Win Probability"
      backHref="/use-cases/proposal-development"
      backLabel="Back to Proposal Development"
      businessChallenge={{
        title: "Business Challenge",
        description: "Proposal pricing involves manual cost estimation, limited competitive intelligence, inconsistent pricing strategies, 30% of proposals overpriced, and 20% underpriced. Pricing challenges include no data-driven approach, limited market intelligence, inconsistent margins, poor win rate prediction, and suboptimal pricing."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes proposal pricing with cost estimation including resource requirements, labor costs, expense projections, and risk contingency. The system provides competitive intelligence with market rate analysis, competitor pricing, win/loss data, and price positioning. It includes win probability prediction with ML models analyzing 100+ factors, price sensitivity analysis, competitive assessment, and client relationship strength. The system enables pricing optimization with optimal price calculation, margin optimization, discount strategy, and value-based pricing, plus scenario analysis with multiple pricing scenarios, win probability by price, margin impact, and risk assessment."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "25%",
          label: "Improvement in win rate"
        },
        {
          icon: RiBarChartLine,
          value: "15%",
          label: "Improvement in average margin"
        },
        {
          icon: RiFocus3Line,
          value: "Data-driven",
          label: "Pricing vs gut feel"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$3M",
          label: "Annual revenue increase"
        }
      ]}
    />
  );
}

