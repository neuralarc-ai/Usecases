"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine, RiErrorWarningLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Automated Regulatory Monitoring & Reporting"
      backHref="/use-cases/compliance-audit"
      backLabel="Back to Compliance & Audit"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Insurance compliance teams monitor 150+ regulatory requirements across 50 states plus federal regulations",
          "Manual monitoring takes 300+ hours monthly, misses 20% of regulatory changes, and creates compliance gaps",
          "Delays policy updates, causes audit findings, and results in $2M+ annual fines",
          "Regulatory complexity includes state insurance departments, NAIC model regulations, federal requirements (ACA, ERISA), privacy regulations (HIPAA, state laws), and market conduct rules"
        ]
      }}
      toolsUsed={[
        {
          category: "Web Research & Analysis",
          tools: ["Perplexity", "ChatGPT", "Claude"]
        },
        {
          category: "Document Generation",
          tools: ["Jasper", "Copy.ai", "Writesonic"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Automated Regulatory Monitoring",
          popularTools: "Perplexity, ChatGPT, Claude",
          helium: true
        },
        {
          capability: "Change Detection",
          popularTools: "Jasper, Copy.ai, Writesonic",
          helium: true
        },
        {
          capability: "Impact Assessment",
          popularTools: "Manual analysis",
          helium: true
        },
        {
          capability: "Real-Time Compliance Status",
          popularTools: "Limited visibility",
          helium: true
        },
        {
          capability: "Automated Reporting",
          popularTools: "Manual report generation",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates regulatory compliance. The system provides regulatory intelligence monitoring all regulatory sources, identifying relevant changes, assessing impact, and tracking effective dates. It includes compliance monitoring with real-time compliance status, gap identification, risk scoring, and trend analysis. The system enables automated reporting for regulatory filings, market conduct reports, financial statements, and compliance certifications. It includes policy update management with impact assessment, update recommendations, implementation tracking, and effectiveness validation. The system provides audit trail with complete documentation, evidence collection, audit readiness, and regulatory examination support."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in monitoring time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "Capture of regulatory changes"
        },
        {
          icon: RiErrorWarningLine,
          value: "Zero",
          label: "Missed compliance deadlines"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2.8M",
          label: "Annual savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Regulatory Monitoring",
            description: "Tracks all regulatory sources"
          },
          {
            title: "Change Detection",
            description: "Identifies new requirements"
          },
          {
            title: "Impact Assessment",
            description: "Evaluates effect on operations"
          },
          {
            title: "Compliance Gap Analysis",
            description: "Identifies gaps"
          },
          {
            title: "Alert Generation",
            description: "Notifies compliance team"
          },
          {
            title: "Policy Update Workflow",
            description: "Manages implementation"
          },
          {
            title: "Automated Reporting",
            description: "Generates required reports"
          },
          {
            title: "Audit Trail",
            description: "Documents all compliance activities"
          }
        ]
      }}
    />
  );
}

