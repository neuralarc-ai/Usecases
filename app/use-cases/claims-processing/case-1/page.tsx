"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiFocus3Line, RiShieldLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Automated Claims Triage & Routing"
      backHref="/use-cases/claims-processing"
      backLabel="Back to Claims Processing"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Claims adjusters spend 45 minutes per claim on initial assessment and routing, consuming 37,500 hours annually and $1.8M in labor costs",
          "Manual triage misses 30% of fraud indicators and routes 25% of claims incorrectly",
          "Delays in claim resolution and customer dissatisfaction from inefficient processes",
          "Claims complexity includes multiple claim types (auto, property, liability, workers comp), varying severity levels, different adjuster specializations, geographic considerations, and fraud risk assessment"
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
          capability: "AI-Powered Classification",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "Intelligent Routing",
          popularTools: "UiPath, Automation Anywhere, Blue Prism",
          helium: true
        },
        {
          capability: "Fraud Detection",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Automated Triage",
          popularTools: "Manual processes",
          helium: true
        },
        {
          capability: "Real-Time Priority Scoring",
          popularTools: "Limited in most tools",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates claims triage and intelligent routing. The system uses AI-powered classification to identify claim type, assess severity, score complexity, detect fraud indicators, and assign priority. It provides intelligent routing with adjuster expertise matching, workload balancing, geographic assignment, specialization alignment, and capacity consideration. The system performs fraud screening with 30+ fraud indicators, pattern recognition, network analysis, historical comparison, and risk scoring. It also includes priority scoring based on severity, customer impact, regulatory requirements, time sensitivity, and financial exposure, plus automated customer communication with acknowledgment, adjuster assignment notification, expected timeline, and next steps guidance."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in triage time"
        },
        {
          icon: RiFocus3Line,
          value: "95%",
          label: "Routing accuracy"
        },
        {
          icon: RiShieldLine,
          value: "85%",
          label: "Fraud indicator detection rate"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2.8M",
          label: "Annual savings per 10K claims"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Claim Submission",
            description: "Customer submits claim via app, web, phone, or agent"
          },
          {
            title: "AI Classification",
            description: "Identifies claim type, severity, and complexity"
          },
          {
            title: "Fraud Screening",
            description: "Analyzes for fraud indicators"
          },
          {
            title: "Severity Assessment",
            description: "Determines urgency and priority"
          },
          {
            title: "Adjuster Matching",
            description: "Selects best adjuster based on expertise and capacity"
          },
          {
            title: "Automated Routing",
            description: "Assigns claim to adjuster"
          },
          {
            title: "Customer Notification",
            description: "Sends acknowledgment and timeline"
          },
          {
            title: "Progress Tracking",
            description: "Monitors claim through resolution"
          }
        ]
      }}
    />
  );
}

