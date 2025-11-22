"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Automated Reconciliation & Close Process"
      backHref="/use-cases/finance-operations"
      backLabel="Back to Finance Operations"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Month-end close takes 10 business days, with reconciliation consuming 60% of that time (6 days)",
          "Manual processes across 50+ accounts lead to 2-3 days of rework for errors and discrepancies",
          "Delayed financial reporting impacts investor relations, limited real-time visibility into financial position",
          "High stress on finance team (overtime, burnout), compliance risks (SOX, regulatory reporting), and inability to close books faster than competitors. Banking reconciliation complexity includes general ledger accounts (1000+), subledger reconciliations (loans, deposits, investments), intercompany transactions, regulatory reports, capital calculations, and liquidity ratios"
        ]
      }}
      toolsUsed={[
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        },
        {
          category: "RPA & Process Automation",
          tools: ["UiPath", "Automation Anywhere", "Blue Prism"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Automated Reconciliation",
          popularTools: "UiPath, Automation Anywhere, Blue Prism",
          helium: true
        },
        {
          capability: "Multi-System Integration",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "AI-Powered Variance Detection",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Real-Time Visibility",
          popularTools: "Month-end reporting",
          helium: true
        },
        {
          capability: "Automated Journal Entries",
          popularTools: "Manual entry",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates the entire close process. The system pulls data from all systems automatically (core banking, loan system, deposit system, investment system, trading platform, subledgers, external sources), reconciles accounts without manual intervention (transaction matching, balance verification, intercompany elimination, suspense account clearing), uses AI to explain discrepancies (root cause identification, pattern recognition, historical comparison, automated resolution suggestions), creates adjusting entries automatically (accruals and deferrals, reclassifications, corrections, eliminations), routes for appropriate approvals (materiality-based routing, segregation of duties, audit trail, electronic signatures), ensures all steps completed (checklist management, dependency tracking, completion verification, sign-off collection), and generates financial statements automatically (balance sheet, income statement, cash flow statement, regulatory reports)."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "70%",
          label: "Reduction in close time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "95%",
          label: "Automation of reconciliation tasks"
        },
        {
          icon: RiBarChartLine,
          value: "99%",
          label: "Accuracy in account matching"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$420K",
          label: "Annual cost savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Extraction",
            description: "Pulls data from all systems automatically"
          },
          {
            title: "Automated Matching",
            description: "Reconciles accounts using AI"
          },
          {
            title: "Variance Identification",
            description: "Finds discrepancies"
          },
          {
            title: "AI Investigation",
            description: "Explains variances and suggests resolutions"
          },
          {
            title: "Journal Entry Generation",
            description: "Creates adjusting entries"
          },
          {
            title: "Approval Workflow",
            description: "Routes for appropriate approvals"
          },
          {
            title: "Close Validation",
            description: "Verifies all steps completed"
          },
          {
            title: "Reporting",
            description: "Generates financial statements"
          }
        ]
      }}
    />
  );
}

