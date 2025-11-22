"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiShieldLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Inventory Accuracy & Cycle Counting"
      backHref="/use-cases/supply-chain"
      backLabel="Back to Supply Chain"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Inventory accuracy averages 85% with annual physical counts (disruptive and expensive)",
          "$5M+ in lost sales from inaccurate inventory and stockouts from phantom inventory",
          "Overstock from undercounted items and high carrying costs",
          "Accuracy challenges include manual counting errors, theft and shrinkage, system errors, and limited visibility"
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
          capability: "Perpetual Inventory",
          popularTools: "Annual physical counts",
          helium: true
        },
        {
          capability: "Automated Cycle Counting",
          popularTools: "Manual counting",
          helium: true
        },
        {
          capability: "Discrepancy Detection",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "RFID Integration",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "End-to-End Accuracy",
          popularTools: "UiPath, Automation Anywhere",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium maintains 99% accuracy with perpetual inventory including real-time tracking, transaction validation, automated adjustments, and continuous accuracy. The system provides automated cycle counting with AI-driven count scheduling, high-risk item prioritization, mobile counting apps, and variance investigation. It includes discrepancy detection with real-time variance alerts, pattern analysis, root cause identification, and corrective actions. The system enables RFID integration with automated tracking, real-time location, movement monitoring, and theft detection, plus accuracy analytics with accuracy by location, accuracy by category, trend analysis, and improvement tracking."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "99%",
          label: "Inventory accuracy"
        },
        {
          icon: RiShieldLine,
          value: "Eliminated",
          label: "Annual physical counts"
        },
        {
          icon: RiTimeLine,
          value: "Continuous",
          label: "Accuracy maintenance"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5.5M",
          label: "Annual value"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Continuous Tracking",
            description: "Monitors all inventory movements"
          },
          {
            title: "Variance Detection",
            description: "Identifies discrepancies"
          },
          {
            title: "Cycle Count Scheduling",
            description: "Prioritizes items for counting"
          },
          {
            title: "Mobile Counting",
            description: "Enables efficient counting"
          },
          {
            title: "Variance Investigation",
            description: "Analyzes discrepancies"
          },
          {
            title: "Adjustment Processing",
            description: "Corrects inventory records"
          },
          {
            title: "Root Cause Analysis",
            description: "Determines cause"
          },
          {
            title: "Prevention",
            description: "Implements controls"
          }
        ]
      }}
    />
  );
}

