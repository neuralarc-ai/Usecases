"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Best Practice Capture & Sharing"
      backHref="/use-cases/knowledge-management"
      backLabel="Back to Knowledge Management"
      businessChallenge={{
        title: "Business Challenge",
        description: "Best practices are trapped in individual minds, poorly documented, difficult to find, inconsistently applied, and lost when employees leave. Best practice challenges include limited capture, poor organization, difficult search, low reuse, and knowledge loss."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium captures and shares best practices with automated capture including project learnings, success patterns, innovation identification, and expert knowledge. The system provides intelligent organization with categorization, tagging, relationship mapping, and searchability. It includes recommendation engine with context-aware suggestions, similar situation matching, expert identification, and relevant content. The system enables collaboration tools with discussion forums, expert Q&A, peer review, and rating and feedback, plus analytics with usage tracking, value measurement, gap identification, and improvement opportunities."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "3x",
          label: "Increase in best practice reuse"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Reduced",
          label: "Knowledge loss"
        },
        {
          icon: RiTimeLine,
          value: "Faster",
          label: "Problem solving"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2M",
          label: "Annual value"
        }
      ]}
    />
  );
}

