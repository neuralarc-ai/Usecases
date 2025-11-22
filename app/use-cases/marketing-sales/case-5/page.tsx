"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Customer Acquisition Cost Optimization"
      backHref="/use-cases/marketing-sales"
      backLabel="Back to Marketing & Sales"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Customer acquisition costs (CAC) average $150 with 40% variation across channels",
          "Limited optimization and poor targeting leading to high waste",
          "$8M+ in inefficient spend and delayed insights",
          "CAC challenges include no channel optimization, poor targeting, generic messaging, and limited testing"
        ]
      }}
      toolsUsed={[
        {
          category: "Customer Data Platform",
          tools: ["Segment", "mParticle", "Tealium"]
        },
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Social Media Management",
          tools: ["Hootsuite", "Buffer", "Sprout Social"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Channel Optimization",
          popularTools: "No optimization",
          helium: true
        },
        {
          capability: "Targeting Optimization",
          popularTools: "Poor targeting",
          helium: true
        },
        {
          capability: "Creative Optimization",
          popularTools: "Segment, mParticle, Tealium",
          helium: true
        },
        {
          capability: "Bid Management",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "End-to-End Optimization",
          popularTools: "Hootsuite, Buffer, Sprout Social",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes acquisition with channel optimization including CAC by channel, LTV:CAC ratios, efficiency scoring, and budget allocation. The system provides targeting optimization with lookalike modeling, propensity scoring, audience refinement, and waste reduction. It includes creative optimization with A/B testing, performance prediction, message optimization, and visual optimization. The system enables bid management with automated bidding, budget pacing, performance optimization, and ROI maximization, plus lifetime value prediction with customer value forecasting, acquisition investment optimization, segment prioritization, and retention integration."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "35%",
          label: "Reduction in CAC"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "5:1",
          label: "LTV:CAC ratio improvement"
        },
        {
          icon: RiFocus3Line,
          value: "Improved",
          label: "Targeting and waste reduction"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$8M",
          label: "Annual efficiency gain"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Channel Analysis",
            description: "Evaluates all acquisition channels"
          },
          {
            title: "CAC Calculation",
            description: "Computes cost per channel"
          },
          {
            title: "LTV Prediction",
            description: "Forecasts customer lifetime value"
          },
          {
            title: "Optimization",
            description: "Determines optimal allocation"
          },
          {
            title: "Targeting Refinement",
            description: "Improves audience targeting"
          },
          {
            title: "Creative Testing",
            description: "Tests messaging and visuals"
          },
          {
            title: "Bid Optimization",
            description: "Adjusts bids for ROI"
          },
          {
            title: "Performance Tracking",
            description: "Monitors results"
          }
        ]
      }}
    />
  );
}

