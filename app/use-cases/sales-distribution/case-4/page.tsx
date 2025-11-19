"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine, RiHeartLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Commission Automation & Reconciliation"
      backHref="/use-cases/sales-distribution"
      backLabel="Back to Sales & Distribution"
      businessChallenge={{
        title: "Business Challenge",
        description: "Commission processing for 500+ agents takes 5-7 days monthly, with 10-15% error rate, agent disputes and dissatisfaction, manual calculations and reconciliation, delayed payments, and high administrative costs ($300K+ annually). Commission complexity includes multiple commission structures, override calculations, bonus and incentive programs, chargebacks and adjustments, and multi-level hierarchies."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates commission processing. The system enables automated calculation with policy-level commissions, override calculations, bonus and incentives, chargebacks, and adjustments. It provides real-time processing with instant commission calculation, running totals, forecast projections, and what-if scenarios. The system includes reconciliation with automated matching, variance identification, error detection, and correction workflow. It includes an agent portal with real-time commission visibility, statement access, dispute submission, and performance tracking. The system enables payment processing with automated payment generation, multiple payment methods, tax reporting, and audit trail."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "95%",
          label: "Reduction in processing time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "99%",
          label: "Accuracy"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$300K",
          label: "Annual cost savings"
        },
        {
          icon: RiHeartLine,
          value: "Improved",
          label: "Agent satisfaction"
        }
      ]}
    />
  );
}

