"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="AI-Powered Lead Scoring & Prioritization"
      backHref="/use-cases/sales-distribution"
      backLabel="Back to Sales & Distribution"
      businessChallenge={{
        title: "Business Challenge",
        description: "Insurance agents handle 500+ leads monthly, with only 5-10% conversion rate, no prioritization (first-come, first-served), 60% of agent time wasted on low-quality leads, $5M+ in lost revenue from missed opportunities, and poor lead follow-up. Lead challenges include inconsistent lead quality, limited lead intelligence, no scoring or prioritization, manual qualification, and delayed follow-up."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium scores and prioritizes leads intelligently. The system provides lead scoring with ML models analyzing 200+ factors, conversion probability, revenue potential, urgency assessment, and channel effectiveness. It includes intelligent prioritization with score-based ranking, agent capacity matching, specialization alignment, and geographic routing. The system enables lead enrichment with third-party data, social media insights, property information, financial indicators, and behavioral signals. It includes automated qualification with needs assessment, budget verification, timeline identification, and decision-maker confirmation. The system provides follow-up automation with automated reminders, nurture campaigns, re-engagement triggers, and optimal timing."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "300%",
          label: "Improvement in conversion rate"
        },
        {
          icon: RiTimeLine,
          value: "60%",
          label: "Reduction in wasted time"
        },
        {
          icon: RiTimeLine,
          value: "Faster",
          label: "Lead response"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$15M",
          label: "Annual revenue increase"
        }
      ]}
    />
  );
}

