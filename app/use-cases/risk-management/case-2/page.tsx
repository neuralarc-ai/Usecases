"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine, RiTimeLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Credit Portfolio Optimization & Monitoring"
      backHref="/use-cases/risk-management"
      backLabel="Back to Risk Management"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Credit portfolio management involves 50,000+ loans across multiple products, with concentration risks (industry, geography, borrower), correlation risks, economic sensitivity, and regulatory capital requirements",
          "Manual analysis includes quarterly reviews (too infrequent), limited scenario analysis, and reactive risk management",
          "Suboptimal portfolio composition and $20M+ in unnecessary capital due to conservative assumptions",
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
          capability: "Portfolio Optimization",
          popularTools: "Gartner, Forrester, IDC",
          helium: true
        },
        {
          capability: "Stress Testing",
          popularTools: "Quarterly reviews only",
          helium: true
        },
        {
          capability: "Capital Optimization",
          popularTools: "Manual calculations",
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
        description: "Helium optimizes credit portfolio in real-time. The system provides portfolio analytics (concentration analysis, correlation modeling, stress testing, scenario analysis, capital optimization), monitors risk (credit quality trends, early warning signals, migration analysis, default prediction), includes an optimization engine (portfolio rebalancing, capital allocation, pricing optimization, hedging strategies), performs catastrophe modeling, and generates regulatory reporting (capital calculations, stress test results, concentration reports, risk disclosures)."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "Real-time",
          label: "Portfolio risk visibility"
        },
        {
          icon: RiBarChartLine,
          value: "70%",
          label: "Improvement in returns"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$20M",
          label: "Capital optimization"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Proactive",
          label: "Risk management"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Portfolio Data Aggregation",
            description: "Collects all loan data"
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
            title: "Stress Testing",
            description: "Models adverse scenarios"
          },
          {
            title: "Optimization Recommendations",
            description: "Suggests portfolio adjustments"
          },
          {
            title: "Capital Calculation",
            description: "Determines regulatory capital"
          },
          {
            title: "Monitoring",
            description: "Tracks ongoing portfolio performance"
          },
          {
            title: "Reporting",
            description: "Generates regulatory and management reports"
          }
        ]
      }}
    />
  );
}

