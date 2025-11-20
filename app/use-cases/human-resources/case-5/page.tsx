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
        description: "Regulatory training in banking requires 40+ hours per employee annually across 15+ compliance areas (Anti-Money Laundering, Know Your Customer, Data Privacy, Securities Regulations, Fair Lending, Consumer Protection, Cybersecurity, Insider Trading, Market Conduct, and more). Manual tracking creates incomplete training records, missed renewal deadlines, audit findings and fines ($500K-$2M per violation), inconsistent training quality, high administrative burden (5+ hours per employee annually), and compliance gaps exposing the institution to risk."
      }}
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

