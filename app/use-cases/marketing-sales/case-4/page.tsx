"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Marketing Attribution & ROI Optimization"
      backHref="/use-cases/marketing-sales"
      backLabel="Back to Marketing & Sales"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Marketing attribution uses last-click model missing 80% of customer journey touchpoints",
          "Unable to determine true channel effectiveness and optimal budget allocation",
          "$5M+ in wasted marketing spend and poor ROI visibility",
          "Attribution challenges include oversimplified models, limited data integration, no cross-channel view, and delayed insights"
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
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Multi-Touch Attribution",
          popularTools: "Last-click model",
          helium: true
        },
        {
          capability: "Cross-Channel Analysis",
          popularTools: "Siloed channel data",
          helium: true
        },
        {
          capability: "Budget Optimization",
          popularTools: "Segment, mParticle, Tealium",
          helium: true
        },
        {
          capability: "Real-Time Insights",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "End-to-End Optimization",
          popularTools: "Zapier, Make, n8n",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides multi-touch attribution with all touchpoint tracking, contribution analysis, channel effectiveness, and time decay modeling. The system includes cross-channel analysis with unified customer view, channel interactions, synergy effects, and optimal mix. It provides budget optimization with ROI by channel, reallocation recommendations, scenario modeling, and performance forecasting. The system enables real-time insights with campaign performance, channel effectiveness, conversion paths, and optimization opportunities, plus predictive analytics with future performance, budget impact, channel trends, and competitive effects."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "Multi-touch",
          label: "Attribution vs last-click"
        },
        {
          icon: RiBarChartLine,
          value: "45%",
          label: "Improvement in marketing ROI"
        },
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Insights vs monthly reports"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5M",
          label: "Annual efficiency gain"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Touchpoint Tracking",
            description: "Captures all customer interactions"
          },
          {
            title: "Journey Mapping",
            description: "Constructs complete paths to conversion"
          },
          {
            title: "Attribution Modeling",
            description: "Assigns credit to touchpoints"
          },
          {
            title: "Channel Analysis",
            description: "Evaluates channel effectiveness"
          },
          {
            title: "Budget Optimization",
            description: "Recommends allocation"
          },
          {
            title: "Scenario Modeling",
            description: "Models various strategies"
          },
          {
            title: "Implementation",
            description: "Adjusts budget and tactics"
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

