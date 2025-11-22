"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Dynamic Credit Risk Scoring & Assessment"
      backHref="/use-cases/finance-operations"
      backLabel="Back to Finance Operations"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Static credit models update quarterly, missing 30% of early warning signals",
          "Manual underwriting takes 5-7 days with only 65% approval rate (35% of good customers declined)",
          "Incomplete risk assessment with limited data sources leads to loss of good customers to competitors",
          "Higher default rates (8-12% vs industry best of 3-5%), limited use of alternative data, inconsistent underwriting decisions, and regulatory compliance challenges"
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
          capability: "Real-Time Risk Scoring",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Alternative Data Integration",
          popularTools: "Gartner, Forrester, IDC",
          helium: true
        },
        {
          capability: "Automated Decision Making",
          popularTools: "Manual processes",
          helium: true
        },
        {
          capability: "Continuous Monitoring",
          popularTools: "Tableau, Power BI",
          helium: true
        },
        {
          capability: "Explainable AI",
          popularTools: "Black box models",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides real-time, comprehensive credit risk assessment. The system uses 500+ data points including traditional credit data, bank account behavior, payment history patterns, cash flow analysis, social media signals, employment stability, education and skills, geographic factors, economic indicators, and alternative data (utility payments, rent payments, mobile phone payments, subscription services, gig economy income). It continuously monitors and updates scores as new information arrives, automatically approves low-risk applications instantly, provides explainable AI with clear reasoning for decisions, and tracks borrower risk throughout loan lifecycle."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "40%",
          label: "Increase in approval rates"
        },
        {
          icon: RiTimeLine,
          value: "85%",
          label: "Reduction in underwriting time"
        },
        {
          icon: RiBarChartLine,
          value: "25%",
          label: "Reduction in default rates"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$3.5M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Application Submission",
            description: "Customer applies for credit"
          },
          {
            title: "Data Aggregation",
            description: "Collects traditional and alternative data"
          },
          {
            title: "AI Risk Scoring",
            description: "Calculates comprehensive risk score (0-1000)"
          },
          {
            title: "Alternative Data Analysis",
            description: "Incorporates non-traditional signals"
          },
          {
            title: "Automated Decision",
            description: "Approves, reviews, or declines based on score"
          },
          {
            title: "Manual Review",
            description: "Human review for borderline cases"
          },
          {
            title: "Continuous Monitoring",
            description: "Tracks ongoing risk throughout loan term"
          },
          {
            title: "Score Updates",
            description: "Refreshes as new data arrives"
          }
        ]
      }}
    />
  );
}

