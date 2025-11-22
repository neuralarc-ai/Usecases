"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Benchmarking & Best Practice Identification"
      backHref="/use-cases/research-analysis"
      backLabel="Back to Research & Analysis"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Benchmarking for clients involves 40-60 hours per engagement with manual data collection",
          "Limited peer group identification and inconsistent methodologies leading to high costs",
          "Benchmarking needs include performance metrics, process efficiency, and cost structures",
          "Best practices and gap analysis require extensive manual work"
        ]
      }}
      toolsUsed={[
        {
          category: "Market Research",
          tools: ["Gartner", "Forrester", "IDC"]
        },
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Automated Data Collection",
          popularTools: "Manual collection",
          helium: true
        },
        {
          capability: "Peer Group Identification",
          popularTools: "Gartner, Forrester, IDC",
          helium: true
        },
        {
          capability: "Metric Calculation",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Gap Analysis",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "End-to-End Automation",
          popularTools: "Manual processes",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates benchmarking with automated data collection including public data sources, industry databases, survey data, financial filings, and research reports. The system provides peer group identification with similar company matching, industry classification, size and scope consideration, and geographic relevance. It includes metric calculation with performance metrics, efficiency ratios, cost benchmarks, and quality indicators. The system enables gap analysis with performance comparison, best practice identification, improvement opportunities, and priority ranking, plus recommendation development with specific actions, implementation roadmap, ROI estimation, and risk assessment."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "75%",
          label: "Reduction in benchmarking time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "More",
          label: "Comprehensive analysis"
        },
        {
          icon: RiBarChartLine,
          value: "Better",
          label: "Recommendations"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$90K",
          label: "Cost savings per project"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Client Profile",
            description: "Defines client characteristics"
          },
          {
            title: "Peer Group Identification",
            description: "Identifies comparable companies"
          },
          {
            title: "Data Collection",
            description: "Gathers benchmarking data"
          },
          {
            title: "Metric Calculation",
            description: "Computes performance metrics"
          },
          {
            title: "Gap Analysis",
            description: "Identifies performance gaps"
          },
          {
            title: "Best Practice Identification",
            description: "Finds leading practices"
          },
          {
            title: "Recommendation Development",
            description: "Suggests improvements"
          },
          {
            title: "Report Generation",
            description: "Creates comprehensive analysis"
          }
        ]
      }}
    />
  );
}

