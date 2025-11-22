"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Best Practice Capture & Sharing"
      backHref="/use-cases/knowledge-management"
      backLabel="Back to Knowledge Management"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Best practices are trapped in individual minds and poorly documented",
          "Difficult to find and inconsistently applied leading to knowledge loss when employees leave",
          "Best practice challenges include limited capture and poor organization",
          "Difficult search, low reuse, and knowledge loss"
        ]
      }}
      toolsUsed={[
        {
          category: "Knowledge Management",
          tools: ["Confluence", "Notion", "SharePoint"]
        },
        {
          category: "Web Research & Analysis",
          tools: ["Perplexity", "ChatGPT", "Claude"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Best Practice Capture",
          popularTools: "Trapped in individual minds",
          helium: true
        },
        {
          capability: "Intelligent Organization",
          popularTools: "Confluence, Notion, SharePoint",
          helium: true
        },
        {
          capability: "Easy Search & Discovery",
          popularTools: "Perplexity, ChatGPT, Claude",
          helium: true
        },
        {
          capability: "Knowledge Reuse",
          popularTools: "Airtable, Notion, Coda",
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
        description: "Helium captures and shares best practices with automated capture including project learnings, success patterns, innovation identification, and expert knowledge. The system provides intelligent organization with categorization, tagging, relationship mapping, and searchability. It includes recommendation engine with context-aware suggestions, similar situation matching, expert identification, and relevant content. The system enables collaboration tools with discussion forums, expert Q&A, peer review, and rating and feedback, plus analytics with usage tracking, value measurement, gap identification, and improvement opportunities."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "3x",
          label: "Increase in best practice reuse"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Reduced",
          label: "Knowledge loss"
        },
        {
          icon: RiTimeLine,
          value: "Faster",
          label: "Problem solving"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2M",
          label: "Annual value"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Project Completion",
            description: "Engagement concludes"
          },
          {
            title: "Learning Capture",
            description: "Documents key learnings"
          },
          {
            title: "AI Processing",
            description: "Extracts best practices"
          },
          {
            title: "Organization",
            description: "Categorizes and tags"
          },
          {
            title: "Expert Identification",
            description: "Links to subject matter experts"
          },
          {
            title: "Recommendation",
            description: "Suggests to relevant users"
          },
          {
            title: "Usage Tracking",
            description: "Monitors application"
          },
          {
            title: "Value Measurement",
            description: "Quantifies impact"
          }
        ]
      }}
    />
  );
}

