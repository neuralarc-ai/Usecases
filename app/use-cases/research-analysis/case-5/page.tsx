"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Benchmarking & Best Practice Identification"
      backHref="/use-cases/research-analysis"
      backLabel="Back to Research & Analysis"
      businessChallenge={{
        title: "Business Challenge",
        description: "Benchmarking for clients involves 40-60 hours per engagement, manual data collection, limited peer group identification, inconsistent methodologies, and high costs. Benchmarking needs include performance metrics, process efficiency, cost structures, best practices, and gap analysis."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates benchmarking with automated data collection including public data sources, industry databases, survey data, financial filings, and research reports. The system provides peer group identification with similar company matching, industry classification, size and scope consideration, and geographic relevance. It includes metric calculation with performance metrics, efficiency ratios, cost benchmarks, and quality indicators. The system enables gap analysis with performance comparison, best practice identification, improvement opportunities, and priority ranking, plus recommendation development with specific actions, implementation roadmap, ROI estimation, and risk assessment."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "75%",
          label: "Reduction in benchmarking time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "More",
          label: "Comprehensive analysis"
        },
        {
          icon: RiBarChartLine,
          value: "Better",
          label: "Recommendations"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$90K",
          label: "Cost savings per project"
        }
      ]}
    />
  );
}

