"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Industry Trend Analysis & Forecasting"
      backHref="/use-cases/research-analysis"
      backLabel="Back to Research & Analysis"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Trend analysis for clients requires 30-50 hours per industry with manual research and synthesis",
          "Limited predictive capability and inconsistent frameworks leading to high costs",
          "Trend analysis needs include market dynamics, technology trends, and regulatory changes",
          "Competitive landscape and future scenarios require extensive manual work"
        ]
      }}
      toolsUsed={[
        {
          category: "Web Research & Analysis",
          tools: ["Perplexity", "ChatGPT", "Claude"]
        },
        {
          category: "Market Research",
          tools: ["Gartner", "Forrester", "IDC"]
        },
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Automated Monitoring",
          popularTools: "Manual research",
          helium: true
        },
        {
          capability: "Trend Identification",
          popularTools: "Perplexity, ChatGPT, Claude",
          helium: true
        },
        {
          capability: "Predictive Forecasting",
          popularTools: "Gartner, Forrester, IDC",
          helium: true
        },
        {
          capability: "Synthesis & Reporting",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "End-to-End Intelligence",
          popularTools: "Manual processes",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides trend intelligence with automated monitoring including news and publications, research reports, social media, patent filings, and regulatory changes. The system provides trend identification with pattern recognition, signal detection, momentum analysis, and impact assessment. It includes predictive forecasting with trend projection, scenario modeling, impact analysis, and timeline estimation. The system enables synthesis & reporting with insight generation, implication analysis, recommendation development, and visual presentation, plus continuous updates with real-time monitoring, alert generation, report refreshing, and trend tracking."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "75%",
          label: "Reduction in research time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Real-time",
          label: "Trend monitoring"
        },
        {
          icon: RiFocus3Line,
          value: "Better",
          label: "Predictive insights"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$75K",
          label: "Cost savings per project"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Industry Definition",
            description: "Defines scope and focus"
          },
          {
            title: "Automated Monitoring",
            description: "Collects relevant information"
          },
          {
            title: "Trend Detection",
            description: "Identifies emerging patterns"
          },
          {
            title: "Impact Analysis",
            description: "Assesses implications"
          },
          {
            title: "Forecasting",
            description: "Projects future developments"
          },
          {
            title: "Synthesis",
            description: "Generates insights"
          },
          {
            title: "Report Creation",
            description: "Produces comprehensive analysis"
          },
          {
            title: "Continuous Updates",
            description: "Monitors ongoing trends"
          }
        ]
      }}
    />
  );
}

