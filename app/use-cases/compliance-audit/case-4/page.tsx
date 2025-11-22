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
        challenges: [
          "Insurance carriers handle sensitive personal information subject to HIPAA, GLBA, state privacy laws, GDPR, and CCPA",
          "Manual compliance includes limited data visibility, reactive breach response, and incomplete access logs",
          "Compliance gaps and $5M+ potential fines from privacy violations",
          "Inability to track and protect sensitive data across multiple systems and jurisdictions"
        ]
      }}
      toolsUsed={[
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        },
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Data Discovery & Classification",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Access Control & Monitoring",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Real-Time Breach Detection",
          popularTools: "Reactive response only",
          helium: true
        },
        {
          capability: "Consent Management",
          popularTools: "Limited in most tools",
          helium: true
        },
        {
          capability: "Automated Compliance Reporting",
          popularTools: "Manual documentation",
          helium: true
        }
      ]}
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

