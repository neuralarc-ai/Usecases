"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Expert Location & Collaboration"
      backHref="/use-cases/knowledge-management"
      backLabel="Back to Knowledge Management"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Finding the right expert takes 2-3 hours per search with limited visibility into expertise",
          "Missed collaboration opportunities and duplicated work",
          "Inefficient resource use from no expertise directory",
          "Expert location challenges include limited search, outdated information, poor visibility, and siloed knowledge"
        ]
      }}
      toolsUsed={[
        {
          category: "Knowledge Management",
          tools: ["Confluence", "Notion", "SharePoint"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        },
        {
          category: "Web Research & Analysis",
          tools: ["Perplexity", "ChatGPT", "Claude"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Expertise Mapping",
          popularTools: "No expertise directory",
          helium: true
        },
        {
          capability: "Intelligent Search",
          popularTools: "Confluence, Notion, SharePoint",
          helium: true
        },
        {
          capability: "Collaboration Facilitation",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Expertise Development",
          popularTools: "Perplexity, ChatGPT, Claude",
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
        description: "Helium connects people and expertise with expertise mapping including skill identification, project history, publication tracking, and certification management. The system provides intelligent search with natural language queries, expertise matching, availability checking, and location consideration. It includes collaboration facilitation with expert introduction, project matching, team formation, and knowledge sharing. The system enables expertise development with skill gap identification, training recommendations, career pathing, and succession planning, plus analytics with expertise utilization, collaboration patterns, knowledge gaps, and investment priorities."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in expert search time"
        },
        {
          icon: RiBarChartLine,
          value: "50%",
          label: "Increase in collaboration"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Better",
          label: "Resource utilization"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1M",
          label: "Annual productivity gain"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Expertise Capture",
            description: "Documents skills and experience"
          },
          {
            title: "Profile Creation",
            description: "Builds expert profiles"
          },
          {
            title: "Search Query",
            description: "User searches for expertise"
          },
          {
            title: "Matching",
            description: "Identifies relevant experts"
          },
          {
            title: "Introduction",
            description: "Facilitates connection"
          },
          {
            title: "Collaboration",
            description: "Enables knowledge sharing"
          },
          {
            title: "Tracking",
            description: "Monitors collaboration value"
          },
          {
            title: "Expertise Update",
            description: "Keeps profiles current"
          }
        ]
      }}
    />
  );
}

