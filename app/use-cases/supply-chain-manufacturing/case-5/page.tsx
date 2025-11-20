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
        description: "Supply chain risks include supplier failures, material shortages, logistics disruptions, quality issues, and $5M+ annual impact. Risk challenges include limited visibility, reactive management, poor prediction, delayed response, and high costs."
      }}
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

