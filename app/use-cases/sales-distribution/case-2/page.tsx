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
        challenges: [
          "Cross-sell penetration averages 1.3 products per customer (industry potential: 2.5+), resulting in $20M+ in missed revenue annually",
          "Limited customer wallet share, competitive vulnerability, and generic recommendations",
          "Poor timing and inability to identify optimal cross-sell opportunities",
          "Cross-sell challenges include limited customer insights, no predictive analytics, manual identification, generic offers, and poor execution"
        ]
      }}
      toolsUsed={[
        {
          category: "Customer Data Platform",
          tools: ["Segment", "mParticle", "Tealium"]
        },
        {
          category: "Competitive Intelligence",
          tools: ["Crayon", "Klue", "Kompyte"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Opportunity Identification",
          popularTools: "Segment, mParticle, Tealium",
          helium: true
        },
        {
          capability: "Personalized Recommendations",
          popularTools: "Generic offers",
          helium: true
        },
        {
          capability: "Optimal Timing",
          popularTools: "Poor timing",
          helium: true
        },
        {
          capability: "Multi-Channel Execution",
          popularTools: "Limited channels",
          helium: true
        },
        {
          capability: "Performance Tracking",
          popularTools: "Limited in most tools",
          helium: true
        }
      ]}
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
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Customer Analysis",
            description: "Analyzes current coverage and needs"
          },
          {
            title: "Opportunity Identification",
            description: "Identifies cross-sell opportunities"
          },
          {
            title: "Propensity Scoring",
            description: "Calculates likelihood of purchase"
          },
          {
            title: "Timing Optimization",
            description: "Determines best time to offer"
          },
          {
            title: "Personalized Offer",
            description: "Creates customized recommendation"
          },
          {
            title: "Multi-Channel Delivery",
            description: "Presents via optimal channel"
          },
          {
            title: "Conversion Tracking",
            description: "Monitors acceptance"
          },
          {
            title: "Performance Analysis",
            description: "Measures effectiveness"
          }
        ]
      }}
    />
  );
}

