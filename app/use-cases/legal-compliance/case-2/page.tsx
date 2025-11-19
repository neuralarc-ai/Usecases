"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Intelligent Contract Review & Risk Assessment"
      backHref="/use-cases/legal-compliance"
      backLabel="Back to Legal & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        description: "Contract review in banking takes 4-6 hours per document, with legal teams handling 500+ contracts monthly (vendor agreements, customer contracts, employment agreements, NDAs, partnership agreements). Manual review process misses 25% of non-standard clauses, creates financial exposure ($2M+ annually from unfavorable terms), delays business deals (average 2-3 week turnaround), provides inconsistent risk assessment across attorneys, has limited obligation tracking (missed deadlines, renewals), and costs $600K+ annually."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium accelerates contract review with AI-powered analysis. The system extracts all clauses and terms automatically from any format, identifies key provisions (liability, termination, payment terms, IP, confidentiality, dispute resolution, renewals, warranties), assesses deviation from standard terms, suggests modifications to reduce risk, monitors payment deadlines, renewal dates, deliverable requirements, and reporting obligations, and enables intelligent search across contract repository."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "80%",
          label: "Reduction in initial review time"
        },
        {
          icon: RiBarChartLine,
          value: "95%",
          label: "Accuracy in risk identification"
        },
        {
          icon: RiTimeLine,
          value: "50%",
          label: "Faster contract negotiation cycles"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$600K",
          label: "Annual savings"
        }
      ]}
    />
  );
}

