"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Root Cause Analysis & Corrective Actions"
      backHref="/use-cases/quality-control"
      backLabel="Back to Quality Control"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Root cause analysis takes 20-30 hours per issue with limited analysis depth",
          "Inconsistent methodology and delayed corrective actions leading to recurring problems",
          "Analysis challenges include time-consuming investigation and limited tools",
          "Poor methodology, delayed actions, and ineffective solutions"
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
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        }
      ]}
      comparisonTable={[
        {
          capability: "AI-Powered Investigation",
          popularTools: "Time-consuming investigation (20-30 hours)",
          helium: true
        },
        {
          capability: "Comprehensive Analysis",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Corrective Action Recommendations",
          popularTools: "Perplexity, ChatGPT, Claude",
          helium: true
        },
        {
          capability: "Action Tracking",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "End-to-End Analysis",
          popularTools: "Manual processes",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium accelerates root cause analysis with AI-powered investigation including data aggregation, pattern analysis, factor correlation, and cause identification. The system provides comprehensive analysis with multi-factor analysis, timeline reconstruction, relationship mapping, and impact assessment. It includes corrective action recommendations with specific actions, implementation plans, effectiveness prediction, and validation methods. The system enables action tracking with implementation monitoring, effectiveness measurement, validation, and continuous improvement, plus knowledge capture with case documentation, best practice capture, and prevention strategies."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Faster root cause identification"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Effective",
          label: "Corrective actions"
        },
        {
          icon: RiFocus3Line,
          value: "Reduced",
          label: "Recurring problems"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5M",
          label: "Annual value"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Issue Identification",
            description: "Quality issue detected"
          },
          {
            title: "Data Aggregation",
            description: "Collects all relevant data and context"
          },
          {
            title: "AI-Powered Analysis",
            description: "Analyzes patterns and correlates factors"
          },
          {
            title: "Root Cause Identification",
            description: "Determines primary and contributing causes"
          },
          {
            title: "Timeline Reconstruction",
            description: "Builds sequence of events"
          },
          {
            title: "Corrective Action Recommendation",
            description: "Suggests specific solutions"
          },
          {
            title: "Implementation Tracking",
            description: "Monitors action execution"
          },
          {
            title: "Validation & Knowledge Capture",
            description: "Verifies effectiveness and documents learnings"
          }
        ]
      }}
    />
  );
}

