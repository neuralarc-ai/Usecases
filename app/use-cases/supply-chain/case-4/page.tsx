"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiShieldLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Quality Control & Defect Detection"
      backHref="/use-cases/supply-chain"
      backLabel="Back to Supply Chain"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Quality issues result in 5% return rate with $12M annual return costs",
          "Customer dissatisfaction and brand damage from limited defect detection",
          "Quality challenges include manual inspection (sampling only) and delayed detection",
          "Inconsistent standards, poor root cause analysis, and reactive approach"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        },
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Computer Vision Inspection",
          popularTools: "Manual sampling",
          helium: true
        },
        {
          capability: "Predictive Quality",
          popularTools: "Reactive detection",
          helium: true
        },
        {
          capability: "Root Cause Analysis",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Supplier Quality Management",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "End-to-End Quality Control",
          popularTools: "Zapier, Make, n8n",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates quality control with computer vision inspection including automated defect detection, 100% inspection coverage, real-time analysis, and consistent standards. The system provides predictive quality with defect prediction, supplier risk scoring, process monitoring, and early warning. It includes root cause analysis with pattern identification, supplier correlation, process issues, and corrective actions. The system enables supplier quality management with performance tracking, quality scoring, issue resolution, and improvement plans, plus continuous improvement with trend analysis, best practice identification, process optimization, and quality culture."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "60%",
          label: "Reduction in return rate"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "Inspection coverage"
        },
        {
          icon: RiShieldLine,
          value: "Improved",
          label: "Brand reputation"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$7M",
          label: "Annual savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Product Inspection",
            description: "Automated visual inspection"
          },
          {
            title: "Defect Detection",
            description: "Identifies quality issues"
          },
          {
            title: "Classification",
            description: "Categorizes defect types"
          },
          {
            title: "Root Cause Analysis",
            description: "Determines cause"
          },
          {
            title: "Alert Generation",
            description: "Notifies quality team"
          },
          {
            title: "Supplier Notification",
            description: "Informs supplier of issues"
          },
          {
            title: "Corrective Action",
            description: "Implements fixes"
          },
          {
            title: "Effectiveness Validation",
            description: "Verifies improvement"
          }
        ]
      }}
    />
  );
}

