"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="AI-Powered Risk Assessment & Scoring"
      backHref="/use-cases/underwriting"
      backLabel="Back to Underwriting"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Manual underwriting takes 3-5 days per application, analyzing only 20-30 data points",
          "40% of applications declined or priced incorrectly, leading to loss of good customers to competitors",
          "Adverse selection (accepting bad risks) and $15M+ in underwriting losses annually",
          "Limited use of alternative data and inconsistent underwriting decisions. Traditional underwriting data includes application information, credit reports, motor vehicle records, claims history, and property inspections"
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
          capability: "Comprehensive Data Integration",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Real-Time Risk Scoring",
          popularTools: "Gartner, Forrester, IDC",
          helium: true
        },
        {
          capability: "Alternative Data Analysis",
          popularTools: "Limited data sources",
          helium: true
        },
        {
          capability: "Automated Underwriting",
          popularTools: "Manual processes",
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
        description: "Helium analyzes 500+ data points for accurate risk assessment. The system provides comprehensive data integration including traditional underwriting data, IoT devices (telematics, smart home), satellite imagery (property condition), public records (liens, violations), social media signals, weather and climate data, crime statistics, and economic indicators. It provides real-time risk scoring with ML models analyzing all data points, risk score (0-1000), contributing factors, confidence intervals, and pricing recommendations. The system enables automated underwriting with standard risks auto-approved, borderline cases flagged for review, high risks declined with explanation, and straight-through processing. It includes explainable AI with clear reasoning for decisions, regulatory compliance (adverse action), underwriter guidance, and customer communication. The system continuously learns from model updates from outcomes, loss ratio optimization, pricing refinement, and risk selection improvement."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "80%",
          label: "Reduction in underwriting time"
        },
        {
          icon: RiBarChartLine,
          value: "35%",
          label: "Improvement in risk selection accuracy"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "50%",
          label: "Increase in straight-through processing"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5.5M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Application Submission",
            description: "Customer applies for insurance"
          },
          {
            title: "Data Aggregation",
            description: "Collects data from 500+ sources"
          },
          {
            title: "AI Risk Analysis",
            description: "Analyzes all data points"
          },
          {
            title: "Alternative Data Integration",
            description: "Incorporates IoT, satellite, public records"
          },
          {
            title: "Risk Score Calculation",
            description: "Computes comprehensive risk score"
          },
          {
            title: "Pricing Optimization",
            description: "Determines optimal premium"
          },
          {
            title: "Automated Decision",
            description: "Approves, reviews, or declines"
          },
          {
            title: "Underwriter Review",
            description: "Human review if needed"
          }
        ]
      }}
    />
  );
}

