"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Supplier Performance Management"
      backHref="/use-cases/supply-chain-manufacturing"
      backLabel="Back to Supply Chain"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Supplier management involves 200+ suppliers with manual performance tracking",
          "Quarterly reviews (too infrequent) and 25% of suppliers underperforming",
          "$8M+ in supplier-related costs from quality issues and delivery delays",
          "Supplier challenges include pricing problems, limited visibility, and poor communication"
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
          capability: "Automated Tracking",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "Issue Detection",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Optimization Recommendations",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "End-to-End Management",
          popularTools: "Manual processes",
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
            title: "Performance Monitoring",
            description: "Tracks all supplier metrics in real-time"
          },
          {
            title: "Automated Scoring",
            description: "Calculates composite performance scores"
          },
          {
            title: "Issue Detection",
            description: "Identifies quality, delivery, and pricing problems"
          },
          {
            title: "Risk Assessment",
            description: "Evaluates supplier risk levels"
          },
          {
            title: "Supplier Portal",
            description: "Provides visibility and collaboration tools"
          },
          {
            title: "Issue Resolution",
            description: "Facilitates problem-solving with suppliers"
          },
          {
            title: "Optimization Recommendations",
            description: "Suggests improvements and alternatives"
          },
          {
            title: "Performance Tracking",
            description: "Monitors improvement progress"
          }
        ]
      }}
    />
  );
}

