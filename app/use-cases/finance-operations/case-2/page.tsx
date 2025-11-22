"use client";

import CaseDetail from "@/components/case-detail";
import { RiShieldLine, RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="AI-Driven Fraud Detection & Prevention"
      backHref="/use-cases/finance-operations"
      backLabel="Back to Finance Operations"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Traditional rule-based fraud detection catches only 60% of fraudulent transactions with false positive rates of 30%",
          "$5M+ annual fraud losses from wire fraud, check fraud, card fraud, and ACH fraud",
          "Customer friction from false positives (30% of legitimate transactions flagged) and 45-day average detection lag",
          "Limited ability to detect new fraud patterns, high investigation costs ($200K+ annually), and reputational damage from fraud incidents"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Market Research",
          tools: ["Gartner", "Forrester", "IDC"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Real-Time Fraud Detection",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "AI-Powered Pattern Recognition",
          popularTools: "Rule-based systems",
          helium: true
        },
        {
          capability: "False Positive Reduction",
          popularTools: "Tableau, Power BI",
          helium: true
        },
        {
          capability: "Continuous Learning",
          popularTools: "Static rule sets",
          helium: true
        },
        {
          capability: "Network Analysis",
          popularTools: "Limited tools",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium uses advanced machine learning for real-time fraud detection. The system analyzes 200+ transaction features (amount, time, location, customer behavior, device, IP, velocity, relationships, historical patterns), scores every transaction instantly with fraud probability, detects anomalies in customer transaction patterns and account usage behavior, identifies fraud rings through network analysis, continuously learns from confirmed fraud cases and false positives, automatically blocks fraudulent transactions, and streamlines fraud investigation with automated evidence collection."
      }}
      metrics={[
        {
          icon: RiShieldLine,
          value: "95%",
          label: "Fraud detection rate"
        },
        {
          icon: RiBarChartLine,
          value: "85%",
          label: "Reduction in false positives"
        },
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Blocking vs 45-day lag"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$4.2M",
          label: "Annual fraud loss prevention"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Transaction Initiation",
            description: "Customer initiates transaction"
          },
          {
            title: "Real-Time Feature Extraction",
            description: "Analyzes 200+ features instantly"
          },
          {
            title: "ML Model Scoring",
            description: "Calculates fraud probability"
          },
          {
            title: "Risk Assessment",
            description: "Determines action (approve/review/block)"
          },
          {
            title: "Automated Decision",
            description: "Executes decision in milliseconds"
          },
          {
            title: "Alert Generation",
            description: "Notifies fraud team if review needed"
          },
          {
            title: "Investigation Workflow",
            description: "Guides investigation process"
          },
          {
            title: "Model Retraining",
            description: "Learns from outcomes to improve accuracy"
          }
        ]
      }}
    />
  );
}

