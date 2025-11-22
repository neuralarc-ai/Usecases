"use client";

import CaseDetail from "@/components/case-detail";
import { RiMoneyDollarCircleLine, RiBarChartLine, RiCheckboxCircleLine, RiTimeLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Regulatory Capital Optimization"
      backHref="/use-cases/risk-management"
      backLabel="Back to Risk Management"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Banks hold $50M-$500M+ in regulatory capital, with conservative assumptions adding 20-30% buffer",
          "Quarterly calculations (outdated quickly), limited optimization, and suboptimal capital allocation",
          "Opportunity cost of excess capital and manual capital management takes 2-3 weeks quarterly",
          "Uses simplified models, has limited scenario analysis, is reactive to regulatory changes, and misses optimization opportunities"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Market Research",
          tools: ["Gartner", "Forrester", "IDC"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Real-Time Capital Calculation",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Capital Optimization",
          popularTools: "Gartner, Forrester, IDC",
          helium: true
        },
        {
          capability: "Dynamic Capital Management",
          popularTools: "Quarterly calculations",
          helium: true
        },
        {
          capability: "Scenario Analysis",
          popularTools: "Limited scenarios",
          helium: true
        },
        {
          capability: "Proactive Capital Planning",
          popularTools: "Reactive approach",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes regulatory capital dynamically. The system calculates capital requirements (Basel III/IV requirements, stress capital buffer, leverage ratio, liquidity ratios, real-time updates), includes an optimization engine (portfolio optimization, capital allocation, risk-weighted asset reduction, return on equity maximization), enables scenario analysis (stress testing, what-if modeling, regulatory changes, business growth), and generates regulatory reporting (automated report generation, validation and controls, submission management, audit trail)."
      }}
      metrics={[
        {
          icon: RiMoneyDollarCircleLine,
          value: "$45M",
          label: "Capital release"
        },
        {
          icon: RiBarChartLine,
          value: "Real-time",
          label: "Capital visibility"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Proactive",
          label: "Capital management"
        },
        {
          icon: RiBarChartLine,
          value: "Improved",
          label: "ROE"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Aggregation",
            description: "Collects exposure and risk data"
          },
          {
            title: "Capital Calculation",
            description: "Computes regulatory requirements"
          },
          {
            title: "Optimization Analysis",
            description: "Identifies capital efficiency opportunities"
          },
          {
            title: "Scenario Modeling",
            description: "Models various strategies"
          },
          {
            title: "Recommendation Generation",
            description: "Suggests optimal capital structure"
          },
          {
            title: "Implementation Tracking",
            description: "Monitors capital actions"
          },
          {
            title: "Regulatory Reporting",
            description: "Generates required reports"
          },
          {
            title: "Continuous Monitoring",
            description: "Tracks capital ratios"
          }
        ]
      }}
    />
  );
}

