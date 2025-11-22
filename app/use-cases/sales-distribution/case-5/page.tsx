"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiMoneyDollarCircleLine, RiTimeLine, RiBarChartLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Market Analysis & Competitive Intelligence"
      backHref="/use-cases/sales-distribution"
      backLabel="Back to Sales & Distribution"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Insurance carriers lack real-time competitive intelligence with quarterly market analysis (outdated)",
          "Limited competitive pricing visibility, reactive product development, and missed market opportunities",
          "$10M+ in lost revenue from inability to respond to market changes quickly",
          "Market intelligence gaps include competitor pricing, product features, market trends, customer preferences, and regulatory changes"
        ]
      }}
      toolsUsed={[
        {
          category: "Market Research",
          tools: ["Gartner", "Forrester", "IDC"]
        },
        {
          category: "Competitive Intelligence",
          tools: ["Crayon", "Klue", "Kompyte"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Real-Time Competitive Monitoring",
          popularTools: "Gartner, Forrester, IDC",
          helium: true
        },
        {
          capability: "Market Analysis",
          popularTools: "Crayon, Klue, Kompyte",
          helium: true
        },
        {
          capability: "Pricing Intelligence",
          popularTools: "Quarterly analysis only",
          helium: true
        },
        {
          capability: "Product Development Insights",
          popularTools: "Reactive approach",
          helium: true
        },
        {
          capability: "Strategic Planning",
          popularTools: "Limited in most tools",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides real-time market intelligence. The system includes competitive monitoring with pricing tracking, product analysis, market positioning, and share trends. It provides market analysis with demand forecasting, trend identification, opportunity assessment, and threat detection. The system includes pricing intelligence with rate comparisons, win/loss analysis, price elasticity, and optimization recommendations. It enables product development with gap identification, feature analysis, customer needs, and innovation opportunities. The system supports strategic planning with market scenarios, growth strategies, competitive responses, and investment priorities."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "Real-time",
          label: "Competitive intelligence"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$10M",
          label: "Annual revenue increase"
        },
        {
          icon: RiTimeLine,
          value: "Faster",
          label: "Product development"
        },
        {
          icon: RiBarChartLine,
          value: "Proactive",
          label: "Strategy"
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

