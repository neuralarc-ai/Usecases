"use client";

import CaseDetail from "@/components/case-detail";
import { RiShieldLine, RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Intelligent Fraud Detection & Prevention"
      backHref="/use-cases/claims-processing"
      backLabel="Back to Claims Processing"
      businessChallenge={{
        title: "Business Challenge",
        description: "Insurance fraud costs the industry $80B+ annually, with traditional detection catching only 55% of fraudulent claims. False positive rates of 40% create customer friction and dissatisfaction, wasted investigation resources, delayed legitimate claims, reputational damage, and $8M+ annual fraud losses per carrier. Fraud types include staged accidents, inflated damages, false injuries, phantom providers, premium fraud, application fraud, and internal fraud."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium uses advanced ML for fraud detection. The system performs multi-factor analysis analyzing 300+ claim features including claim details and patterns, claimant history and behavior, provider relationships, geographic patterns, timing and circumstances, social network analysis, and external data sources. It provides network analysis for fraud ring identification, connected claims, shared attributes, coordinated activities, and money flow patterns. The system includes behavioral analytics for claimant behavior patterns, provider billing patterns, attorney involvement, witness relationships, and communication analysis. It provides real-time scoring with fraud probability (0-100), risk level (low/medium/high), contributing factors, and confidence score. The system automates investigation with evidence collection, timeline construction, relationship mapping, and red flag identification, plus case management with investigation workflow, investigator assignment, evidence tracking, and resolution documentation."
      }}
      metrics={[
        {
          icon: RiShieldLine,
          value: "90%",
          label: "Fraud detection rate"
        },
        {
          icon: RiBarChartLine,
          value: "75%",
          label: "Reduction in false positives"
        },
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Detection vs 60-day lag"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$6.5M",
          label: "Annual fraud loss prevention"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Claim Submission",
            description: "Claim enters system"
          },
          {
            title: "Real-Time Feature Extraction",
            description: "Analyzes 300+ features"
          },
          {
            title: "ML Fraud Scoring",
            description: "Calculates fraud probability"
          },
          {
            title: "Network Analysis",
            description: "Identifies connections to known fraud"
          },
          {
            title: "Risk Assessment",
            description: "Determines investigation priority"
          },
          {
            title: "Alert Generation",
            description: "Notifies SIU (Special Investigation Unit)"
          },
          {
            title: "Investigation Assignment",
            description: "Routes to appropriate investigator"
          },
          {
            title: "Resolution Tracking",
            description: "Monitors investigation and outcome"
          }
        ]
      }}
    />
  );
}

