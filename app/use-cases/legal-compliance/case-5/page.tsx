"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine, RiAlertLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Policy Compliance Monitoring & Enforcement"
      backHref="/use-cases/legal-compliance"
      backLabel="Back to Legal & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        description: "Internal policy violations go undetected for months, with manual monitoring covering only 10% of transactions. This results in $150K+ per major violation in investigation costs, regulatory fines when violations involve regulations, reputational damage, employee misconduct, operational losses, and customer harm. Banking policies cover transaction limits, approval requirements, segregation of duties, conflict of interest, gift and entertainment, outside business activities, personal trading, information barriers, and 50+ more policies."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium monitors all transactions in real-time against policies. The system defines monitoring rules for all policies (transaction limits by role, approval requirements, segregation of duties matrices, prohibited activities, disclosure requirements), tracks all transactions in real-time (financial transactions, system access, customer interactions, trading activities, expense submissions), identifies unusual patterns and anomalies, flags policy breaches immediately, notifies compliance team instantly, automates investigation process with evidence collection, and monitors corrective actions."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "99%",
          label: "Transaction coverage"
        },
        {
          icon: RiAlertLine,
          value: "Real-time",
          label: "Violation detection"
        },
        {
          icon: RiTimeLine,
          value: "80%",
          label: "Reduction in investigation time"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1.2M",
          label: "Annual savings"
        }
      ]}
    />
  );
}

