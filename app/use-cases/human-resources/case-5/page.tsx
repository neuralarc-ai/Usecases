"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine, RiAlertLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Compliance Training Automation & Certification"
      backHref="/use-cases/human-resources"
      backLabel="Back to Human Resources"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Regulatory training requires 40+ hours per employee annually across 15+ compliance areas (AML, KYC, Data Privacy, Securities, Fair Lending, etc.)",
          "Manual tracking creates incomplete training records, missed renewal deadlines, and audit findings with fines ($500K-$2M per violation)",
          "Inconsistent training quality and high administrative burden (5+ hours per employee annually)",
          "Compliance gaps exposing the institution to regulatory risk and potential violations"
        ]
      }}
      toolsUsed={[
        {
          category: "Knowledge Management",
          tools: ["Confluence", "Notion", "SharePoint"]
        },
        {
          category: "Task & Project Management",
          tools: ["Asana", "Linear", "Monday.com"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Automated Training Assignment",
          popularTools: "Confluence, Notion, SharePoint",
          helium: true
        },
        {
          capability: "Adaptive Learning",
          popularTools: "One-size-fits-all training",
          helium: true
        },
        {
          capability: "Certification Tracking",
          popularTools: "Asana, Linear, Monday.com",
          helium: true
        },
        {
          capability: "Compliance Automation",
          popularTools: "Manual tracking",
          helium: true
        },
        {
          capability: "Audit-Ready Documentation",
          popularTools: "Manual report generation",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates the entire compliance training lifecycle. The system identifies required training by role, department, and jurisdiction, automatically assigns relevant training based on job function, system access, geographic location, and certifications held, adjusts content and pace based on knowledge assessment results, learning style preferences, time constraints, and previous training history, tests comprehension with scenario-based questions, case studies, and practical applications, issues, tracks, and renews certifications automatically, monitors expiration dates and triggers renewals 60 days in advance, and generates audit-ready documentation showing 100% compliance."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "Compliance tracking accuracy"
        },
        {
          icon: RiTimeLine,
          value: "50%",
          label: "Reduction in training time"
        },
        {
          icon: RiAlertLine,
          value: "Zero",
          label: "Audit findings for training compliance"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$400K",
          label: "Annual savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Regulatory Requirement Analysis",
            description: "Identifies training needs by role"
          },
          {
            title: "Role-Based Assignment",
            description: "Assigns training to employees automatically"
          },
          {
            title: "Adaptive Training Delivery",
            description: "Personalizes learning path and pace"
          },
          {
            title: "Knowledge Assessment",
            description: "Tests understanding with scenario-based questions"
          },
          {
            title: "Certification Issuance",
            description: "Awards certifications upon successful completion"
          },
          {
            title: "Renewal Tracking",
            description: "Monitors expiration dates and triggers renewals"
          },
          {
            title: "Audit Report Generation",
            description: "Creates compliance documentation on demand"
          }
        ]
      }}
    />
  );
}

