"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine, RiErrorWarningLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Policy Compliance Verification & Testing"
      backHref="/use-cases/compliance-audit"
      backLabel="Back to Compliance & Audit"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Policy compliance testing covers only 15% of policies annually, with manual sampling and review",
          "Limited test coverage, delayed issue identification, and compliance gaps",
          "Regulatory findings from incomplete testing and reactive approach",
          "Testing requirements include rate compliance, form compliance, underwriting guidelines, coverage provisions, and regulatory requirements"
        ]
      }}
      toolsUsed={[
        {
          category: "RPA & Process Automation",
          tools: ["UiPath", "Automation Anywhere", "Blue Prism"]
        },
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Automated Compliance Testing",
          popularTools: "UiPath, Automation Anywhere, Blue Prism",
          helium: true
        },
        {
          capability: "100% Policy Coverage",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Real-Time Issue Detection",
          popularTools: "Manual sampling only",
          helium: true
        },
        {
          capability: "Root Cause Analysis",
          popularTools: "Limited in most tools",
          helium: true
        },
        {
          capability: "Automated Remediation",
          popularTools: "Manual processes",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates compliance testing. The system enables automated testing with 100% policy coverage, rate verification, form compliance, underwriting adherence, and coverage validation. It includes exception detection for non-compliant policies, pricing errors, coverage gaps, and documentation issues. The system performs root cause analysis with issue identification, pattern recognition, system problems, and process gaps. It includes remediation workflow with issue assignment, correction tracking, validation, and documentation. The system generates reporting with compliance metrics, exception reports, trend analysis, and regulatory submissions."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "Policy testing coverage"
        },
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Issue identification"
        },
        {
          icon: RiErrorWarningLine,
          value: "Zero",
          label: "Regulatory findings"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1.5M",
          label: "Annual savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Policy Selection",
            description: "Identifies policies for testing"
          },
          {
            title: "Automated Testing",
            description: "Validates compliance"
          },
          {
            title: "Exception Detection",
            description: "Identifies issues"
          },
          {
            title: "Root Cause Analysis",
            description: "Determines cause"
          },
          {
            title: "Alert Generation",
            description: "Notifies compliance team"
          },
          {
            title: "Remediation Workflow",
            description: "Manages corrections"
          },
          {
            title: "Validation",
            description: "Verifies fixes"
          },
          {
            title: "Reporting",
            description: "Documents results"
          }
        ]
      }}
    />
  );
}

