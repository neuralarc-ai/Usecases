"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Real-Time Sentiment Analysis & Service Recovery"
      backHref="/use-cases/customer-experience"
      backLabel="Back to Customer Experience"
      businessChallenge={{
        title: "Business Challenge",
        description: "Customer dissatisfaction discovered days after occurrence through surveys with 5% response rate, social media monitoring (manual, delayed), service recovery attempts catching only 10% of unhappy customers, $5M+ annual revenue loss from churn, and negative reviews and reputation damage. Dissatisfaction sources include product quality issues, delivery problems, customer service interactions, website/app issues, and pricing concerns."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium detects and resolves issues in real-time with real-time sentiment analysis including chat and email analysis, social media monitoring, review tracking, call transcription analysis, and survey responses. The system provides issue detection with negative sentiment identification, problem categorization, severity scoring, and trend analysis. It includes automated escalation with priority routing, manager notification, executive alerts, and response SLAs. The system enables service recovery workflows with personalized resolution, compensation recommendations, follow-up automation, and satisfaction verification, plus satisfaction prediction with churn risk scoring, lifetime value impact, recovery success probability, and investment optimization."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Sentiment visibility"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "90%",
          label: "Issue detection rate"
        },
        {
          icon: RiBarChartLine,
          value: "75%",
          label: "Service recovery success rate"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$4.5M",
          label: "Annual revenue retention"
        }
      ]}
    />
  );
}

