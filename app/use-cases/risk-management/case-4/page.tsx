"use client";

import CaseDetail from "@/components/case-detail";
import { RiMoneyDollarCircleLine, RiBarChartLine, RiCheckboxCircleLine, RiTimeLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Regulatory Capital Optimization"
      backHref="/use-cases/risk-management"
      backLabel="Back to Risk Management"
      businessChallenge={{
        title: "Business Challenge",
        description: "Banks hold $50M-$500M+ in regulatory capital, with conservative assumptions adding 20-30% buffer, quarterly calculations (outdated quickly), limited optimization, suboptimal capital allocation, and opportunity cost of excess capital. Manual capital management takes 2-3 weeks quarterly, uses simplified models, has limited scenario analysis, is reactive to regulatory changes, and misses optimization opportunities."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes regulatory capital dynamically. The system calculates capital requirements (Basel III/IV requirements, stress capital buffer, leverage ratio, liquidity ratios, real-time updates), includes an optimization engine (portfolio optimization, capital allocation, risk-weighted asset reduction, return on equity maximization), enables scenario analysis (stress testing, what-if modeling, regulatory changes, business growth), and generates regulatory reporting (automated report generation, validation and controls, submission management, audit trail)."
      }}
      metrics={[
        {
          icon: RiMoneyDollarCircleLine,
          value: "$45M",
          label: "Capital release"
        },
        {
          icon: RiBarChartLine,
          value: "Real-time",
          label: "Capital visibility"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Proactive",
          label: "Capital management"
        },
        {
          icon: RiBarChartLine,
          value: "Improved",
          label: "ROE"
        }
      ]}
    />
  );
}

