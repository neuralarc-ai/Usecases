"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Automated RFP Analysis & Response"
      backHref="/use-cases/proposal-development"
      backLabel="Back to Proposal Development"
      businessChallenge={{
        title: "Business Challenge",
        description: "RFP response takes 80-120 hours per proposal, manual requirement extraction, limited reuse, inconsistent quality, and 20-30% win rate. RFP challenges include time-consuming analysis, manual content creation, limited collaboration, tight deadlines, and high costs."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium accelerates RFP response with AI-powered RFP analysis including requirement extraction, question identification, compliance checking, and evaluation criteria analysis. The system provides automated response generation with content library matching, AI-powered drafting, template population, and customization. It includes collaboration tools with team coordination, section assignment, real-time editing, and review workflows. The system enables quality assurance with completeness checking, compliance validation, consistency review, and error detection, plus win/loss analysis with success factor identification, improvement recommendations, competitive intelligence, and strategy optimization."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "60%",
          label: "Reduction in response time"
        },
        {
          icon: RiBarChartLine,
          value: "40%",
          label: "Improvement in win rate"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Higher",
          label: "Quality responses"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2.5M",
          label: "Annual value per 10 proposals"
        }
      ]}
    />
  );
}

