"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCalendarLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Customer Retention & Satisfaction Analytics"
      backHref="/use-cases/customer-service"
      backLabel="Back to Customer Service"
      businessChallenge={{
        title: "Business Challenge",
        description: "Insurance carriers lose 15-20% of customers annually, with replacement costs of $200-$400 per customer, limited understanding of churn drivers, reactive retention efforts, $8M+ annual revenue loss, and poor satisfaction visibility. Churn drivers include price increases, claims experience, service quality, competitive offers, and life changes."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium predicts and prevents customer churn. The system provides churn prediction with ML models analyzing 100+ factors, 6-month advance warning, risk scoring, and driver identification. It includes satisfaction monitoring with real-time sentiment analysis, interaction quality scoring, issue detection, and trend tracking. The system enables retention campaigns with personalized offers, proactive outreach, win-back strategies, and loyalty rewards. It performs root cause analysis with churn driver identification, segment analysis, competitive intelligence, and improvement opportunities. The system optimizes lifetime value with customer value scoring, retention investment optimization, cross-sell targeting, and loyalty program design."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "40%",
          label: "Reduction in churn rate"
        },
        {
          icon: RiCalendarLine,
          value: "6 months",
          label: "Advance warning"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$8M",
          label: "Annual revenue retention"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "70%",
          label: "Retention campaign success rate"
        }
      ]}
    />
  );
}

