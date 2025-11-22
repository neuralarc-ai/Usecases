"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Intelligent Document Organization & Retrieval"
      backHref="/use-cases/knowledge-management"
      backLabel="Back to Knowledge Management"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Consulting firms have 100,000+ documents with poor organization taking 30+ minutes to find relevant documents",
          "Limited search capability and knowledge loss when employees leave",
          "Knowledge challenges include information overload and poor categorization",
          "Limited search, version control issues, and access problems"
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
          capability: "AI-Powered Classification",
          popularTools: "Manual organization",
          helium: true
        },
        {
          capability: "Intelligent Search",
          popularTools: "Confluence, Notion, SharePoint",
          helium: true
        },
        {
          capability: "Knowledge Graph",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Version Control",
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
        description: "Helium organizes knowledge intelligently with AI-powered classification including automatic categorization, tagging and indexing, relationship mapping, and duplicate detection. The system provides intelligent search with natural language queries, semantic understanding, relevance ranking, and similar document finding. It includes knowledge graph with relationship visualization, connected insights, expert identification, and topic clustering. The system enables version control with automated versioning, change tracking, approval workflows, and audit trail, plus access control with role-based permissions, client confidentiality, data security, and compliance."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in search time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Better",
          label: "Knowledge reuse"
        },
        {
          icon: RiFocus3Line,
          value: "Reduced",
          label: "Knowledge loss"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1.5M",
          label: "Annual productivity gain"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Document Upload",
            description: "New document added"
          },
          {
            title: "AI Classification",
            description: "Categorizes automatically"
          },
          {
            title: "Tagging",
            description: "Applies relevant tags"
          },
          {
            title: "Indexing",
            description: "Makes searchable"
          },
          {
            title: "Relationship Mapping",
            description: "Links to related content"
          },
          {
            title: "Access Control",
            description: "Sets permissions"
          },
          {
            title: "Search",
            description: "Users find documents easily"
          },
          {
            title: "Usage Tracking",
            description: "Monitors document value"
          }
        ]
      }}
    />
  );
}

