"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine, RiErrorWarningLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Market Conduct Compliance & Monitoring"
      backHref="/use-cases/compliance-audit"
      backLabel="Back to Compliance & Audit"
      businessChallenge={{
        title: "Business Challenge",
        description: "Market conduct examinations result in $3M+ annual fines, remediation costs, reputational damage, regulatory scrutiny, and business restrictions. Common violations include unfair claims practices, improper sales practices, inadequate disclosures, discriminatory pricing, and privacy violations."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium monitors market conduct continuously. The system provides transaction monitoring for sales practices, claims handling, pricing decisions, customer communications, and complaint handling. It includes pattern detection for unusual practices, discriminatory patterns, unfair treatment, and regulatory violations. The system performs complaint analysis with complaint categorization, trend identification, root cause analysis, and resolution tracking. It includes training and coaching with issue identification, training recommendations, performance tracking, and improvement monitoring. The system generates regulatory reporting with market conduct reports, complaint statistics, corrective actions, and examination support."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "95%",
          label: "Reduction in market conduct violations"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$3M",
          label: "Annual fine avoidance"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Proactive",
          label: "Compliance"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Improved",
          label: "Customer treatment"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Transaction Capture",
            description: "Records all customer interactions"
          },
          {
            title: "Pattern Analysis",
            description: "Identifies potential violations"
          },
          {
            title: "Complaint Monitoring",
            description: "Tracks and analyzes complaints"
          },
          {
            title: "Issue Detection",
            description: "Flags potential violations"
          },
          {
            title: "Alert Generation",
            description: "Notifies compliance team"
          },
          {
            title: "Investigation",
            description: "Analyzes issues"
          },
          {
            title: "Remediation",
            description: "Implements corrections"
          },
          {
            title: "Reporting",
            description: "Documents for regulators"
          }
        ]
      }}
    />
  );
}

