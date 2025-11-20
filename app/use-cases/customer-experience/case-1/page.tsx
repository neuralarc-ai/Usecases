"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiMoneyDollarCircleLine, RiFocus3Line, RiHeartLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Hyper-Personalized Product Recommendations"
      backHref="/use-cases/customer-experience"
      backLabel="Back to Customer Experience"
      businessChallenge={{
        title: "Business Challenge",
        description: "Generic recommendations show 2% click-through rate, 0.5% conversion rate, manual merchandising missing 85% of cross-sell opportunities, $20M+ in lost revenue annually, and poor customer experience. Recommendation challenges include one-size-fits-all approach, limited personalization, no real-time updates, poor mobile experience, and missed opportunities."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium delivers hyper-personalized recommendations through behavioral analysis including browsing history, purchase patterns, search queries, cart abandonment, and wishlist items. The system provides contextual understanding with time of day, device type, location, weather, and events. It includes collaborative filtering with similar customer analysis, product affinities, bundle opportunities, and trending items. The system enables real-time personalization with homepage customization, product page recommendations, cart suggestions, email personalization, and mobile app customization, plus A/B testing automation with algorithm optimization, layout testing, messaging variants, and performance tracking."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "800%",
          label: "Increase in click-through rate"
        },
        {
          icon: RiBarChartLine,
          value: "1000%",
          label: "Increase in conversion"
        },
        {
          icon: RiFocus3Line,
          value: "45%",
          label: "Improvement in average order value"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$25M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Customer Behavior Tracking",
            description: "Monitors all interactions"
          },
          {
            title: "Preference Analysis",
            description: "Identifies interests and patterns"
          },
          {
            title: "Context Understanding",
            description: "Considers current situation"
          },
          {
            title: "Recommendation Generation",
            description: "Creates personalized suggestions"
          },
          {
            title: "Personalization",
            description: "Customizes display for customer"
          },
          {
            title: "A/B Testing",
            description: "Tests different approaches"
          },
          {
            title: "Delivery",
            description: "Shows recommendations across touchpoints"
          },
          {
            title: "Performance Optimization",
            description: "Continuously improves"
          }
        ]
      }}
    />
  );
}

