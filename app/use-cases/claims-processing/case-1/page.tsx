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
        description: "Claims adjusters spend 45 minutes per claim on initial assessment and routing. With 50,000+ claims annually, this consumes 37,500 hours of adjuster time, $1.8M in labor costs, manual triage misses 30% of fraud indicators, 25% of claims routed incorrectly, delays in claim resolution, and customer dissatisfaction. Claims complexity includes multiple claim types (auto, property, liability, workers comp), varying severity levels, different adjuster specializations, geographic considerations, and fraud risk assessment."
      }}
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

