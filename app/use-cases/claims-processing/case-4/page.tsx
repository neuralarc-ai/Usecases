"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiHeartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Accelerated Claims Settlement"
      backHref="/use-cases/claims-processing"
      backLabel="Back to Claims Processing"
      businessChallenge={{
        title: "Business Challenge",
        description: "Average claim settlement takes 21 days, with 40% requiring multiple adjuster reviews, manual payment processing adding 3-5 days, customer satisfaction scores of 65%, 15% of customers switching carriers due to slow claims, and lost revenue from customer attrition ($5M+ annually). Settlement delays caused by manual damage assessment, multiple approval layers, payment processing bottlenecks, communication gaps, and documentation requirements."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium accelerates claims settlement. The system provides automated settlement calculation with policy coverage verification, deductible application, depreciation calculation, tax considerations, and payment amount determination. It enables straight-through processing with low-complexity claims auto-approved, pre-defined settlement rules, automated payment processing, and instant customer notification. The system includes settlement negotiation with AI-powered recommendations, comparable claim analysis, settlement range calculation, and negotiation strategy. It provides integrated payment processing with multiple payment methods, direct deposit, check printing, digital wallets, and vendor payments. The system also includes real-time communication with settlement offer notification, acceptance confirmation, payment status updates, and satisfaction surveys."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "65%",
          label: "Reduction in settlement time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "85%",
          label: "Straight-through processing"
        },
        {
          icon: RiHeartLine,
          value: "45%",
          label: "Improvement in customer satisfaction"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$3.2M",
          label: "Annual operational savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Claim Assessment",
            description: "Damage and liability determined"
          },
          {
            title: "Settlement Calculation",
            description: "AI calculates settlement amount"
          },
          {
            title: "Policy Coverage Verification",
            description: "Confirms coverage and limits"
          },
          {
            title: "Automated Approval",
            description: "Low-complexity claims auto-approved"
          },
          {
            title: "Payment Processing",
            description: "Initiates payment via preferred method"
          },
          {
            title: "Customer Notification",
            description: "Sends settlement confirmation"
          },
          {
            title: "Satisfaction Survey",
            description: "Collects feedback"
          },
          {
            title: "Case Closure",
            description: "Closes claim with documentation"
          }
        ]
      }}
    />
  );
}

