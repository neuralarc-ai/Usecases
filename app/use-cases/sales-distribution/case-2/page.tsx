"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine, RiTimeLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Intelligent Cross-Sell & Upsell Recommendations"
      backHref="/use-cases/sales-distribution"
      backLabel="Back to Sales & Distribution"
      businessChallenge={{
        title: "Business Challenge",
        description: "Cross-sell penetration averages 1.3 products per customer (industry potential: 2.5+), resulting in $20M+ in missed revenue annually, limited customer wallet share, competitive vulnerability, generic recommendations, and poor timing. Cross-sell challenges include limited customer insights, no predictive analytics, manual identification, generic offers, and poor execution."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium identifies and executes cross-sell opportunities. The system provides opportunity identification with coverage gap analysis, life event detection, behavioral signals, propensity modeling, and timing optimization. It includes personalized recommendations with product matching, bundle optimization, pricing personalization, and offer customization. The system enables optimal timing with life event triggers, renewal timing, claim resolution, policy changes, and seasonal factors. It supports multi-channel execution through agent prompts, customer portal, email campaigns, mobile app, and call center scripts. The system tracks performance with conversion rates, revenue impact, customer satisfaction, and agent effectiveness."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "150%",
          label: "Increase in cross-sell rate"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$20M",
          label: "Annual revenue increase"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "45%",
          label: "Improvement in customer retention"
        },
        {
          icon: RiTimeLine,
          value: "Optimal",
          label: "Timing"
        }
      ]}
    />
  );
}

