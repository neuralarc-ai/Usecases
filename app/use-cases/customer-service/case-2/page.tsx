"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine, RiHeartLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Intelligent Policy Inquiry & Self-Service"
      backHref="/use-cases/customer-service"
      backLabel="Back to Customer Service"
      businessChallenge={{
        title: "Business Challenge",
        description: "Policy inquiries require agent assistance, consuming 35% of call center capacity. Customers wait 6-8 minutes for simple information like coverage details, payment status, policy documents, beneficiary information, and renewal dates. This results in $1.5M annual call center costs for policy inquiries, customer frustration, agent time wasted on simple questions, limited self-service options, and poor mobile experience."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium enables comprehensive self-service. The system provides AI-powered information retrieval with natural language queries, instant policy lookup, coverage explanations, document access, and transaction history. It enables automated document generation for insurance ID cards, certificates of insurance, policy declarations, coverage summaries, and proof of insurance. The system includes a self-service portal with intuitive interface, mobile-optimized design, secure access, personalized dashboard, and guided workflows. It provides intelligent guidance with contextual help, step-by-step instructions, video tutorials, and FAQ integration. The system enables proactive information with renewal reminders, coverage recommendations, policy updates, and important notices."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "90%",
          label: "Self-service rate"
        },
        {
          icon: RiTimeLine,
          value: "Instant",
          label: "Information access"
        },
        {
          icon: RiTimeLine,
          value: "50%",
          label: "Reduction in call center volume"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2.8M",
          label: "Annual cost savings"
        }
      ]}
    />
  );
}

