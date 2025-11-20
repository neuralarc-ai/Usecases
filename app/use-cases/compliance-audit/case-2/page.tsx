"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine, RiBarChartLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Audit Trail Automation & Management"
      backHref="/use-cases/compliance-audit"
      backLabel="Back to Compliance & Audit"
      businessChallenge={{
        title: "Business Challenge",
        description: "Audit preparation requires 400+ hours of manual documentation gathering across 15+ systems. Incomplete audit trails result in qualified audit opinions, regulatory scrutiny, extended audit timelines, high audit costs ($600K+ annually), and compliance risks. Audit requirements include policy administration, claims processing, financial transactions, underwriting decisions, customer communications, and system changes."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates audit trail capture. The system enables automated logging of all system activities, user actions, data changes, approvals, and communications. It includes document capture for policies and procedures, meeting minutes, approval memos, risk assessments, and training records. The system provides AI classification with document categorization, tagging and indexing, relationship mapping, and retention management. It enables evidence packaging for audit request response, sampling support, testing documentation, and finding resolution. The system includes an audit portal with secure auditor access, document search, sampling tools, and communication log."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in audit prep time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "Audit trail completeness"
        },
        {
          icon: RiBarChartLine,
          value: "Zero",
          label: "Qualified opinions"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$400K",
          label: "Annual audit cost savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Activity Logging",
            description: "Captures all activities automatically"
          },
          {
            title: "Document Capture",
            description: "Collects supporting documentation"
          },
          {
            title: "AI Classification",
            description: "Categorizes and tags"
          },
          {
            title: "Audit Trail Linking",
            description: "Connects activities to evidence"
          },
          {
            title: "Evidence Packaging",
            description: "Assembles audit packages"
          },
          {
            title: "Readiness Scoring",
            description: "Calculates audit readiness"
          },
          {
            title: "Report Generation",
            description: "Creates audit documentation"
          },
          {
            title: "Auditor Portal",
            description: "Provides secure access"
          }
        ]
      }}
    />
  );
}

