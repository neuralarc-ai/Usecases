"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiCalendarLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Automated Regulatory Document Analysis"
      backHref="/use-cases/legal-compliance"
      backLabel="Back to Legal & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        description: "Legal teams in banking institutions review 10,000+ pages of regulatory updates monthly from multiple regulators (SEC, FINRA, OCC, Federal Reserve, State banking regulators, CFPB). Manual review process takes 200+ hours per month (5+ full-time employees), misses 15-20% of critical updates, creates compliance risks and potential violations, delays policy updates by 30-60 days, causes audit findings, and costs $350K+ annually in legal time."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates regulatory document monitoring and analysis. The system automatically collects updates from all regulatory sources, uses AI to classify documents by regulatory topic, urgency level, and business impact, detects changes (new requirements, modifications, repealed rules), assesses effect on current policies and operations, cross-references with existing compliance framework, ranks changes by urgency and business impact, and notifies legal team through multiple channels."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in document review time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "Capture of relevant regulatory changes"
        },
        {
          icon: RiCalendarLine,
          value: "60 days",
          label: "Advance warning for compliance updates"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "$350K",
          label: "Annual cost savings"
        }
      ]}
    />
  );
}

