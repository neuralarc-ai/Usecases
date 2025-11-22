"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Automated Market Research & Data Synthesis"
      backHref="/use-cases/research-analysis"
      backLabel="Back to Research & Analysis"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Market research for client projects takes 40-60 hours per engagement with manual data gathering from 20+ sources",
          "Limited analysis depth and inconsistent quality leading to high research costs ($150K+ per project)",
          "Delayed insights from time-consuming data collection and information overload",
          "Research challenges include limited synthesis, inconsistent methodology, and high costs"
        ]
      }}
      toolsUsed={[
        {
          category: "Web Research & Analysis",
          tools: ["Perplexity", "ChatGPT", "Claude"]
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
          popularTools: "Manual gathering from 20+ sources",
          helium: true
        },
        {
          capability: "AI-Powered Synthesis",
          popularTools: "Perplexity, ChatGPT, Claude",
          helium: true
        },
        {
          capability: "Intelligent Summarization",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Source Validation",
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
        description: "Helium automates research with automated data collection including web scraping, database access, API integration, document processing, and multi-source aggregation. The system provides AI-powered synthesis with key insight extraction, pattern identification, trend analysis, and comparative analysis. It includes intelligent summarization with executive summaries, detailed reports, visual presentations, and custom formats. The system enables source validation with credibility assessment, fact-checking, citation management, and quality control, plus continuous monitoring with market updates, trend tracking, alert generation, and report refreshing."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "85%",
          label: "Reduction in research time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "3x",
          label: "Increase in data sources"
        },
        {
          icon: RiBarChartLine,
          value: "Higher",
          label: "Quality insights"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$120K",
          label: "Cost savings per project"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Research Brief",
            description: "Defines research objectives"
          },
          {
            title: "Automated Data Collection",
            description: "Gathers from multiple sources"
          },
          {
            title: "Data Processing",
            description: "Cleans and structures data"
          },
          {
            title: "AI Synthesis",
            description: "Extracts insights and patterns"
          },
          {
            title: "Report Generation",
            description: "Creates comprehensive reports"
          },
          {
            title: "Quality Validation",
            description: "Verifies accuracy"
          },
          {
            title: "Client Delivery",
            description: "Presents findings"
          },
          {
            title: "Continuous Monitoring",
            description: "Tracks ongoing developments"
          }
        ]
      }}
    />
  );
}

