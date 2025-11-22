"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Supplier Performance Management & Optimization"
      backHref="/use-cases/supply-chain"
      backLabel="Back to Supply Chain"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Supplier management involves 500+ suppliers with manual performance tracking and quarterly reviews (too infrequent)",
          "20% of suppliers underperforming leading to $10M+ in supplier-related costs",
          "Supplier challenges include quality issues, delivery delays, and pricing problems",
          "Limited visibility and poor communication creating operational inefficiencies"
        ]
      }}
      toolsUsed={[
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        },
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Performance Monitoring",
          popularTools: "Quarterly reviews",
          helium: true
        },
        {
          capability: "Automated Scoring",
          popularTools: "Manual tracking",
          helium: true
        },
        {
          capability: "Issue Detection",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "Optimization Recommendations",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "End-to-End Management",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes supplier relationships with performance monitoring including real-time metrics, quality tracking, delivery performance, pricing compliance, and responsiveness. The system provides automated scoring with composite performance score, category-specific metrics, trend analysis, and risk assessment. It includes issue detection with quality problems, delivery delays, pricing variances, and communication gaps. The system enables optimization recommendations with supplier consolidation, alternative sourcing, negotiation opportunities, and risk mitigation, plus collaboration tools with supplier portal, performance dashboards, issue resolution, and improvement planning."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "40%",
          label: "Improvement in supplier performance"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "50%",
          label: "Reduction in quality issues"
        },
        {
          icon: RiTimeLine,
          value: "30%",
          label: "Reduction in delivery delays"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$3M",
          label: "Annual cost savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Gathers supplier performance data"
          },
          {
            title: "Performance Calculation",
            description: "Computes metrics"
          },
          {
            title: "Scoring",
            description: "Assigns performance scores"
          },
          {
            title: "Issue Detection",
            description: "Identifies problems"
          },
          {
            title: "Alert Generation",
            description: "Notifies procurement team"
          },
          {
            title: "Resolution Workflow",
            description: "Manages issue resolution"
          },
          {
            title: "Optimization Analysis",
            description: "Identifies improvement opportunities"
          },
          {
            title: "Supplier Communication",
            description: "Shares feedback and plans"
          }
        ]
      }}
    />
  );
}

