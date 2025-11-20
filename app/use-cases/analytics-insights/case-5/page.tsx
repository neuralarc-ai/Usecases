"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiTimeLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Competitive Intelligence & Market Analysis"
      backHref="/use-cases/analytics-insights"
      backLabel="Back to Analytics & Insights"
      businessChallenge={{
        title: "Business Challenge",
        description: "Market intelligence is manual and time-consuming, delayed by weeks, limited to pricing, missing market trends, and $5M+ in lost opportunities. Intelligence gaps include competitor pricing, product assortment, promotional strategies, market trends, and customer preferences."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides real-time intelligence with competitive monitoring including pricing tracking, assortment analysis, promotion monitoring, and market share trends. The system provides market analysis with demand trends, category growth, emerging opportunities, and threat detection. It includes pricing intelligence with price positioning, elasticity analysis, optimization recommendations, and competitive response. The system enables assortment intelligence with gap identification, trend analysis, new product opportunities, and discontinuation recommendations, plus strategic planning with market scenarios, growth strategies, competitive responses, and investment priorities."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "Real-time",
          label: "Competitive intelligence"
        },
        {
          icon: RiTimeLine,
          value: "Faster",
          label: "Response to market changes"
        },
        {
          icon: RiFocus3Line,
          value: "Proactive",
          label: "Strategy vs reactive"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Gathers competitive and market data"
          },
          {
            title: "Analysis",
            description: "Processes and analyzes information"
          },
          {
            title: "Insight Generation",
            description: "Identifies opportunities and threats"
          },
          {
            title: "Alert Generation",
            description: "Notifies of significant changes"
          },
          {
            title: "Recommendation Development",
            description: "Suggests strategic actions"
          },
          {
            title: "Scenario Modeling",
            description: "Models various strategies"
          },
          {
            title: "Executive Reporting",
            description: "Presents insights to leadership"
          },
          {
            title: "Action Tracking",
            description: "Monitors strategic initiatives"
          }
        ]
      }}
    />
  );
}

