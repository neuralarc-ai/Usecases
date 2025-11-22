"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Competitive Intelligence & Analysis"
      backHref="/use-cases/research-analysis"
      backLabel="Back to Research & Analysis"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Competitive analysis for clients requires 30-40 hours per competitor with manual data gathering",
          "Limited real-time updates and inconsistent frameworks leading to high costs",
          "Competitive intelligence needs include strategy analysis, financial performance, and market positioning",
          "Product/service analysis and SWOT assessment require extensive manual work"
        ]
      }}
      toolsUsed={[
        {
          category: "Competitive Intelligence",
          tools: ["Crayon", "Klue", "Kompyte"]
        },
        {
          category: "Web Research & Analysis",
          tools: ["Perplexity", "ChatGPT", "Claude"]
        },
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Automated Monitoring",
          popularTools: "Manual data gathering",
          helium: true
        },
        {
          capability: "Analysis Framework",
          popularTools: "Crayon, Klue, Kompyte",
          helium: true
        },
        {
          capability: "Real-Time Updates",
          popularTools: "Perplexity, ChatGPT, Claude",
          helium: true
        },
        {
          capability: "Visualization",
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
        description: "Helium automates competitive intelligence with automated monitoring including company websites, financial filings, news and press releases, social media, and job postings. The system provides analysis framework with strategy assessment, financial analysis, market positioning, capability evaluation, and threat assessment. It includes insight generation with strength identification, weakness detection, opportunity assessment, and threat analysis. The system enables visualization with competitive matrices, positioning maps, trend charts, and comparison tables, plus continuous updates with real-time monitoring, change alerts, trend tracking, and report refreshing."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "80%",
          label: "Reduction in analysis time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Real-time",
          label: "Updates vs point-in-time"
        },
        {
          icon: RiBarChartLine,
          value: "More",
          label: "Comprehensive analysis"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$100K",
          label: "Cost savings per project"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Competitor Identification",
            description: "Defines competitors to track"
          },
          {
            title: "Automated Monitoring",
            description: "Collects data continuously"
          },
          {
            title: "Data Processing",
            description: "Structures and analyzes information"
          },
          {
            title: "Framework Application",
            description: "Applies analysis methodology"
          },
          {
            title: "Insight Generation",
            description: "Identifies key findings"
          },
          {
            title: "Visualization Creation",
            description: "Creates compelling visuals"
          },
          {
            title: "Report Generation",
            description: "Produces comprehensive analysis"
          },
          {
            title: "Continuous Updates",
            description: "Monitors ongoing changes"
          }
        ]
      }}
    />
  );
}

