"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiHeartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Loyalty Program Optimization & Personalization"
      backHref="/use-cases/customer-experience"
      backLabel="Back to Customer Experience"
      businessChallenge={{
        title: "Business Challenge",
        description: "Generic loyalty rewards show 15% redemption rate, 25% program engagement, manual segmentation missing 80% of personalization opportunities, $8M in unredeemed points (liability), and limited program differentiation. Loyalty challenges include one-size-fits-all rewards, poor timing, generic communications, limited gamification, and low engagement."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium personalizes loyalty programs with reward personalization including individual preferences, purchase history, redemption patterns, and value optimization. The system provides optimal timing with predictive analytics, life events, purchase cycles, and engagement patterns. It includes dynamic valuation with point value optimization, offer personalization, tier benefits, and exclusive rewards. The system enables gamification with challenges and missions, achievement badges, leaderboards, and social sharing, plus omnichannel integration with earn everywhere, redeem anywhere, consistent experience, and real-time updates."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "200%",
          label: "Increase in redemption rate"
        },
        {
          icon: RiBarChartLine,
          value: "180%",
          label: "Increase in program engagement"
        },
        {
          icon: RiHeartLine,
          value: "35%",
          label: "Improvement in customer retention"
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

