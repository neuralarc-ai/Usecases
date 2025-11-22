"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Proposal Template Management & Automation"
      backHref="/use-cases/proposal-development"
      backLabel="Back to Proposal Development"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Proposal templates are outdated (50% over 2 years old) and inconsistent across teams",
          "Difficult to maintain with limited automation and poor version control",
          "Template challenges include manual updates and inconsistent branding",
          "Limited reuse, version confusion, and quality issues"
        ]
      }}
      toolsUsed={[
        {
          category: "Document Generation",
          tools: ["Jasper", "Copy.ai", "Writesonic"]
        },
        {
          category: "Presentation Creation",
          tools: ["Gamma", "Beautiful.ai", "Canva"]
        },
        {
          category: "Knowledge Management",
          tools: ["Confluence", "Notion", "SharePoint"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Template Library",
          popularTools: "Outdated templates",
          helium: true
        },
        {
          capability: "Automated Updates",
          popularTools: "Jasper, Copy.ai, Writesonic",
          helium: true
        },
        {
          capability: "Smart Assembly",
          popularTools: "Gamma, Beautiful.ai, Canva",
          helium: true
        },
        {
          capability: "Version Control",
          popularTools: "Confluence, Notion, SharePoint",
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
        description: "Helium manages templates intelligently with template library including 200+ proposal templates, industry-specific formats, service line templates, and customizable frameworks. The system provides automated updates with brand guideline changes, content refreshes, compliance updates, and version control. It includes smart assembly with automated template selection, section population, content insertion, and formatting automation. The system enables quality control with brand compliance, completeness checking, consistency validation, and error detection, plus usage analytics with template effectiveness, win rate by template, usage patterns, and improvement opportunities."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "70%",
          label: "Reduction in proposal assembly time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Consistent",
          label: "Branding across all proposals"
        },
        {
          icon: RiBarChartLine,
          value: "Higher",
          label: "Quality and win rates"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$500K",
          label: "Annual productivity gain"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Template Creation",
            description: "Develops new template"
          },
          {
            title: "Quality Review",
            description: "Validates quality and compliance"
          },
          {
            title: "Repository Storage",
            description: "Stores in central library"
          },
          {
            title: "Template Selection",
            description: "Chooses appropriate template"
          },
          {
            title: "Automated Assembly",
            description: "Populates with content"
          },
          {
            title: "Customization",
            description: "Tailors to specific opportunity"
          },
          {
            title: "Quality Validation",
            description: "Checks final proposal"
          },
          {
            title: "Usage Tracking",
            description: "Monitors effectiveness"
          }
        ]
      }}
    />
  );
}

