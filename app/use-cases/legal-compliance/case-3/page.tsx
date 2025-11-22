"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Real-Time Regulatory Risk Monitoring"
      backHref="/use-cases/legal-compliance"
      backLabel="Back to Legal & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Compliance teams manually monitor 200+ regulatory requirements across multiple jurisdictions (federal, state, international)",
          "Reactive approach leads to violations discovered during audits (not proactively) and $2M+ annual fines and penalties",
          "Regulatory scrutiny and consent orders, reputational damage, and limited visibility into compliance status",
          "Quarterly compliance reviews are too infrequent to catch issues early"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Web Research & Analysis",
          tools: ["Perplexity", "ChatGPT", "Claude"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Real-Time Compliance Monitoring",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Automated Control Testing",
          popularTools: "Perplexity, ChatGPT, Claude",
          helium: true
        },
        {
          capability: "Risk Prediction",
          popularTools: "Reactive monitoring only",
          helium: true
        },
        {
          capability: "Continuous Validation",
          popularTools: "Quarterly reviews",
          helium: true
        },
        {
          capability: "Audit-Ready Documentation",
          popularTools: "Manual preparation",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides continuous, real-time compliance monitoring. The system establishes monitoring for all 200+ requirements with control objectives, testing procedures, and evidence requirements, tracks compliance status 24/7 across transactions, system access logs, policy adherence, training completion, and documentation, validates controls automatically through sampling and testing, calculates compliance risk across business units and product lines, identifies potential issues before they occur using trend analysis and pattern recognition, and generates audit-ready documentation."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "95%",
          label: "Reduction in compliance violations"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Real-time",
          label: "Compliance visibility"
        },
        {
          icon: RiTimeLine,
          value: "70%",
          label: "Reduction in audit preparation time"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2.5M",
          label: "Annual savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Control Framework Setup",
            description: "Defines monitoring requirements for all regulations"
          },
          {
            title: "Continuous Data Collection",
            description: "Gathers compliance data from all systems"
          },
          {
            title: "Automated Testing",
            description: "Validates controls according to schedule"
          },
          {
            title: "Risk Calculation",
            description: "Scores compliance risk by area"
          },
          {
            title: "Violation Prediction",
            description: "Identifies potential issues using ML"
          },
          {
            title: "Alert Generation",
            description: "Notifies compliance team of risks"
          },
          {
            title: "Remediation Tracking",
            description: "Monitors corrective actions"
          },
          {
            title: "Audit Reporting",
            description: "Generates documentation for auditors"
          }
        ]
      }}
    />
  );
}

