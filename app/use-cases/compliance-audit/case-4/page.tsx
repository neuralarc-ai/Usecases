"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiShieldLine, RiMoneyDollarCircleLine, RiErrorWarningLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Data Privacy & Security Compliance"
      backHref="/use-cases/compliance-audit"
      backLabel="Back to Compliance & Audit"
      businessChallenge={{
        title: "Business Challenge",
        description: "Insurance carriers handle sensitive personal information subject to HIPAA (health insurance), GLBA (financial information), state privacy laws, GDPR (European customers), and CCPA (California). Manual compliance includes limited data visibility, reactive breach response, incomplete access logs, compliance gaps, and $5M+ potential fines."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates privacy compliance. The system provides data discovery with PII identification, data classification, location mapping, and access tracking. It includes access control with role-based permissions, data masking, encryption, and audit logging. The system enables consent management with consent capture, preference tracking, opt-out processing, and documentation. It includes breach detection with unusual access patterns, data exfiltration, unauthorized access, and real-time alerts. The system generates compliance reporting with privacy assessments, breach notifications, regulatory reports, and audit documentation."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "PII visibility"
        },
        {
          icon: RiShieldLine,
          value: "Real-time",
          label: "Breach detection"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5M",
          label: "Fine avoidance"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Automated",
          label: "Compliance"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Discovery",
            description: "Identifies all PII"
          },
          {
            title: "Classification",
            description: "Categorizes by sensitivity"
          },
          {
            title: "Access Control",
            description: "Implements permissions"
          },
          {
            title: "Monitoring",
            description: "Tracks all access"
          },
          {
            title: "Anomaly Detection",
            description: "Identifies unusual patterns"
          },
          {
            title: "Alert Generation",
            description: "Notifies security team"
          },
          {
            title: "Investigation",
            description: "Analyzes potential breaches"
          },
          {
            title: "Compliance Reporting",
            description: "Documents activities"
          }
        ]
      }}
    />
  );
}

