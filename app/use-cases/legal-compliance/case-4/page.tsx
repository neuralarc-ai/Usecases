"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine, RiBarChartLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Automated Audit Trail & Documentation Management"
      backHref="/use-cases/legal-compliance"
      backLabel="Back to Legal & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        description: "Audit preparation requires 500+ hours of manual documentation gathering across 20+ systems (core banking, loan origination, CRM, document management, email, trading platforms, risk management, compliance, HR, and more). Incomplete audit trails result in qualified audit opinions, regulatory scrutiny and follow-up exams, extended audit timelines (3-4 months), high audit costs ($800K+ annually), compliance risks, and management distraction."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automatically captures and organizes all audit documentation. The system records all system activities automatically (user actions, transactions, system changes, data modifications, access attempts, approvals), collects supporting documentation (policies, meeting minutes, approval memos, risk assessments, training records, correspondence), categorizes and tags documents intelligently, connects activities to supporting evidence, assembles audit packages automatically by regulatory requirement or business process, provides real-time audit readiness metrics, and creates audit reports on demand."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in audit preparation time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "Audit trail completeness"
        },
        {
          icon: RiBarChartLine,
          value: "Zero",
          label: "Qualified audit opinions"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$450K",
          label: "Annual savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Activity Logging",
            description: "Captures all system activities automatically"
          },
          {
            title: "Document Capture",
            description: "Collects supporting evidence in real-time"
          },
          {
            title: "AI Classification",
            description: "Categorizes and tags documents"
          },
          {
            title: "Audit Trail Linking",
            description: "Connects activities to evidence"
          },
          {
            title: "Evidence Packaging",
            description: "Assembles audit packages by requirement"
          },
          {
            title: "Readiness Scoring",
            description: "Calculates audit readiness percentage"
          },
          {
            title: "Report Generation",
            description: "Creates audit documentation on demand"
          },
          {
            title: "Auditor Portal",
            description: "Provides secure access for external auditors"
          }
        ]
      }}
    />
  );
}

