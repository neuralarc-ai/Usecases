"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine, RiTimeLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Portfolio Risk Optimization & Monitoring"
      backHref="/use-cases/underwriting"
      backLabel="Back to Underwriting"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Insurance portfolio management involves 100,000+ policies across multiple products, with concentration risks (geographic, product, industry), catastrophe exposure, reinsurance optimization, and capital requirements",
          "Manual analysis includes quarterly reviews (too infrequent), limited scenario analysis, and reactive risk management",
          "Suboptimal reinsurance and $50M+ in unnecessary capital",
          "Limited ability to optimize portfolio in real-time and respond to changing market conditions"
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
          capability: "Real-Time Portfolio Analytics",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Catastrophe Modeling",
          popularTools: "Gartner, Forrester, IDC",
          helium: true
        },
        {
          capability: "Portfolio Optimization",
          popularTools: "Quarterly reviews only",
          helium: true
        },
        {
          capability: "Reinsurance Optimization",
          popularTools: "Manual analysis",
          helium: true
        },
        {
          capability: "Proactive Risk Management",
          popularTools: "Reactive approach",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes portfolio in real-time. The system provides portfolio analytics with concentration analysis, geographic exposure, catastrophe modeling, correlation analysis, and capital optimization. It includes risk monitoring with real-time exposure tracking, emerging risk identification, trend analysis, and early warning signals. The system includes an optimization engine for portfolio rebalancing, reinsurance optimization, capital allocation, and pricing adjustments. It performs catastrophe modeling for hurricane, earthquake, flood scenarios, probable maximum loss (PML), aggregate exposure, and reinsurance recovery. The system generates regulatory reporting with solvency calculations, risk-based capital, catastrophe reports, and concentration disclosures."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "Real-time",
          label: "Portfolio visibility"
        },
        {
          icon: RiBarChartLine,
          value: "60%",
          label: "Improvement in risk-adjusted returns"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$12M",
          label: "Annual improvement"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$8M",
          label: "Reinsurance optimization savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Portfolio Data Aggregation",
            description: "Collects all policy data"
          },
          {
            title: "Risk Calculation",
            description: "Computes portfolio metrics"
          },
          {
            title: "Concentration Analysis",
            description: "Identifies concentration risks"
          },
          {
            title: "Catastrophe Modeling",
            description: "Models disaster scenarios"
          },
          {
            title: "Optimization Recommendations",
            description: "Suggests portfolio adjustments"
          },
          {
            title: "Reinsurance Analysis",
            description: "Optimizes reinsurance program"
          },
          {
            title: "Capital Calculation",
            description: "Determines required capital"
          },
          {
            title: "Monitoring",
            description: "Tracks ongoing portfolio performance"
          }
        ]
      }}
    />
  );
}

