"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Product Performance Analytics & Optimization"
      backHref="/use-cases/analytics-insights"
      backLabel="Back to Analytics & Insights"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Product performance analysis is monthly reviews (too infrequent) limited to sales metrics",
          "Missing profitability insights and poor markdown optimization leading to $8M+ in lost margin",
          "Product challenges include slow-moving inventory and suboptimal pricing",
          "Poor assortment, missed trends, and inefficient markdowns"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        },
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Performance Analytics",
          popularTools: "Monthly reviews",
          helium: true
        },
        {
          capability: "Profitability Analysis",
          popularTools: "Sales metrics only",
          helium: true
        },
        {
          capability: "Markdown Optimization",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Trend Detection",
          popularTools: "Airtable, Notion, Coda",
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
        description: "Helium optimizes product performance with performance analytics including sales velocity, margin analysis, inventory turnover, customer ratings, and return rates. The system provides profitability analysis with true product profitability, cost allocation, margin optimization, and pricing recommendations. It includes markdown optimization with optimal timing, discount levels, clearance strategy, and margin protection. The system enables assortment optimization with product mix analysis, category performance, new product introduction, and discontinuation recommendations, plus trend detection with emerging trends, declining products, seasonal patterns, and competitive threats."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Product insights vs monthly reviews"
        },
        {
          icon: RiBarChartLine,
          value: "25%",
          label: "Improvement in gross margin"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "40%",
          label: "Reduction in slow-moving inventory"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$8M",
          label: "Annual margin improvement"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Gathers sales, cost, and inventory data"
          },
          {
            title: "Performance Calculation",
            description: "Computes all metrics"
          },
          {
            title: "Profitability Analysis",
            description: "Determines true profitability"
          },
          {
            title: "Trend Detection",
            description: "Identifies patterns"
          },
          {
            title: "Optimization Recommendations",
            description: "Suggests actions"
          },
          {
            title: "Markdown Planning",
            description: "Optimizes clearance strategy"
          },
          {
            title: "Assortment Adjustment",
            description: "Modifies product mix"
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

