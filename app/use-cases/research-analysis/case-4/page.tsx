"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Industry Trend Analysis & Forecasting"
      backHref="/use-cases/research-analysis"
      backLabel="Back to Research & Analysis"
      businessChallenge={{
        title: "Business Challenge",
        description: "Trend analysis for clients requires 30-50 hours per industry, manual research and synthesis, limited predictive capability, inconsistent frameworks, and high costs. Trend analysis needs include market dynamics, technology trends, regulatory changes, competitive landscape, and future scenarios."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides trend intelligence with automated monitoring including news and publications, research reports, social media, patent filings, and regulatory changes. The system provides trend identification with pattern recognition, signal detection, momentum analysis, and impact assessment. It includes predictive forecasting with trend projection, scenario modeling, impact analysis, and timeline estimation. The system enables synthesis & reporting with insight generation, implication analysis, recommendation development, and visual presentation, plus continuous updates with real-time monitoring, alert generation, report refreshing, and trend tracking."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "75%",
          label: "Reduction in research time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Real-time",
          label: "Trend monitoring"
        },
        {
          icon: RiFocus3Line,
          value: "Better",
          label: "Predictive insights"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$75K",
          label: "Cost savings per project"
        }
      ]}
    />
  );
}

