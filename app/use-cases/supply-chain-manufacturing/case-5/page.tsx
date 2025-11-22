"use client";

import CaseDetail from "@/components/case-detail";
import { RiShieldLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Supply Chain Risk Management"
      backHref="/use-cases/supply-chain-manufacturing"
      backLabel="Back to Supply Chain"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Supply chain risks include supplier failures and material shortages",
          "Logistics disruptions and quality issues leading to $5M+ annual impact",
          "Risk challenges include limited visibility and reactive management",
          "Poor prediction, delayed response, and high costs"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Risk Identification",
          popularTools: "Reactive management",
          helium: true
        },
        {
          capability: "Predictive Analytics",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Risk Mitigation",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "Monitoring and Alerts",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "End-to-End Risk Management",
          popularTools: "Manual processes",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium manages supply chain risks proactively with risk identification including supplier risk assessment, material risk analysis, logistics risk evaluation, and quality risk monitoring. The system provides predictive analytics with risk prediction, impact assessment, probability calculation, and timeline estimation. It includes risk mitigation with alternative sourcing, inventory buffers, logistics alternatives, and quality controls. The system enables monitoring and alerts with real-time risk tracking, early warning systems, alert generation, and escalation workflows, plus continuous improvement with risk trend analysis, mitigation effectiveness, and strategy refinement."
      }}
      metrics={[
        {
          icon: RiShieldLine,
          value: "Proactive",
          label: "Risk mitigation"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Reduced",
          label: "Supply disruptions"
        },
        {
          icon: RiFocus3Line,
          value: "Better",
          label: "Resilience"
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
            title: "Risk Identification",
            description: "Assesses supplier, material, and logistics risks"
          },
          {
            title: "Predictive Analytics",
            description: "Predicts risk probability and impact"
          },
          {
            title: "Risk Scoring",
            description: "Ranks risks by severity and likelihood"
          },
          {
            title: "Early Warning",
            description: "Alerts on emerging risks"
          },
          {
            title: "Mitigation Planning",
            description: "Develops alternative sourcing and strategies"
          },
          {
            title: "Risk Monitoring",
            description: "Tracks risks in real-time"
          },
          {
            title: "Response Execution",
            description: "Implements mitigation actions"
          },
          {
            title: "Continuous Improvement",
            description: "Refines risk management strategies"
          }
        ]
      }}
    />
  );
}

