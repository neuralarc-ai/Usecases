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
        description: "Traditional rule-based fraud detection in banking catches only 60% of fraudulent transactions, with false positive rates of 30%. This results in $5M+ annual fraud losses (wire fraud, check fraud, card fraud, ACH fraud), customer friction from false positives (30% of legitimate transactions flagged), 45-day average detection lag (fraud discovered weeks after occurrence), limited ability to detect new fraud patterns, high investigation costs ($200K+ annually), and reputational damage from fraud incidents."
      }}
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
    />
  );
}

