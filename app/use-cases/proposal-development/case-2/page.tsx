"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiTimeLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Proposal Content Library & Reuse"
      backHref="/use-cases/proposal-development"
      backLabel="Back to Proposal Development"
      businessChallenge={{
        title: "Business Challenge",
        description: "Proposal content is scattered across systems, difficult to find, inconsistent quality, limited reuse (20%), and recreated repeatedly. Content challenges include no central repository, poor organization, limited search, version control issues, and quality variations."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium creates intelligent content library with centralized repository including all proposal content, organized by topic, searchable, and version controlled. The system provides AI-powered tagging with automatic categorization, topic identification, industry tagging, and service line classification. It includes intelligent search with natural language queries, semantic understanding, relevance ranking, and similar content finding. The system enables content recommendations with context-aware suggestions, reuse opportunities, update notifications, and quality scoring, plus quality management with content review, approval workflows, freshness tracking, and performance analytics."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "80%",
          label: "Content reuse rate"
        },
        {
          icon: RiTimeLine,
          value: "50%",
          label: "Reduction in content creation time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Higher",
          label: "Quality and consistency"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1M",
          label: "Annual productivity gain"
        }
      ]}
    />
  );
}

