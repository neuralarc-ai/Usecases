"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Automated Market Research & Data Synthesis"
      backHref="/use-cases/research-analysis"
      backLabel="Back to Research & Analysis"
      businessChallenge={{
        title: "Business Challenge",
        description: "Market research for client projects takes 40-60 hours per engagement, with manual data gathering from 20+ sources, limited analysis depth, inconsistent quality, high research costs ($150K+ per project), and delayed insights. Research challenges include time-consuming data collection, information overload, limited synthesis, inconsistent methodology, and high costs."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates research with automated data collection including web scraping, database access, API integration, document processing, and multi-source aggregation. The system provides AI-powered synthesis with key insight extraction, pattern identification, trend analysis, and comparative analysis. It includes intelligent summarization with executive summaries, detailed reports, visual presentations, and custom formats. The system enables source validation with credibility assessment, fact-checking, citation management, and quality control, plus continuous monitoring with market updates, trend tracking, alert generation, and report refreshing."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "85%",
          label: "Reduction in research time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "3x",
          label: "Increase in data sources"
        },
        {
          icon: RiBarChartLine,
          value: "Higher",
          label: "Quality insights"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$120K",
          label: "Cost savings per project"
        }
      ]}
    />
  );
}

