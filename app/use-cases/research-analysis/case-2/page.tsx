"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Competitive Intelligence & Analysis"
      backHref="/use-cases/research-analysis"
      backLabel="Back to Research & Analysis"
      businessChallenge={{
        title: "Business Challenge",
        description: "Competitive analysis for clients requires 30-40 hours per competitor, manual data gathering, limited real-time updates, inconsistent frameworks, and high costs. Competitive intelligence needs include strategy analysis, financial performance, market positioning, product/service analysis, and SWOT assessment."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates competitive intelligence with automated monitoring including company websites, financial filings, news and press releases, social media, and job postings. The system provides analysis framework with strategy assessment, financial analysis, market positioning, capability evaluation, and threat assessment. It includes insight generation with strength identification, weakness detection, opportunity assessment, and threat analysis. The system enables visualization with competitive matrices, positioning maps, trend charts, and comparison tables, plus continuous updates with real-time monitoring, change alerts, trend tracking, and report refreshing."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "80%",
          label: "Reduction in analysis time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Real-time",
          label: "Updates vs point-in-time"
        },
        {
          icon: RiBarChartLine,
          value: "More",
          label: "Comprehensive analysis"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$100K",
          label: "Cost savings per project"
        }
      ]}
    />
  );
}

