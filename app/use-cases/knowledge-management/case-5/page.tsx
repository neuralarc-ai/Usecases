"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiShieldLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Knowledge Retention & Succession Planning"
      backHref="/use-cases/knowledge-management"
      backLabel="Back to Knowledge Management"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Employee departures result in critical knowledge loss and project disruption",
          "Client relationship damage and reduced capability with $2M+ annual impact",
          "Knowledge retention challenges include undocumented expertise and limited knowledge transfer",
          "Poor succession planning, relationship dependencies, and capability gaps"
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
          category: "Task & Project Management",
          tools: ["Asana", "Linear", "Monday.com"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Knowledge Capture",
          popularTools: "Undocumented expertise",
          helium: true
        },
        {
          capability: "Succession Planning",
          popularTools: "Confluence, Notion, SharePoint",
          helium: true
        },
        {
          capability: "Knowledge Transfer",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Relationship Mapping",
          popularTools: "Asana, Linear, Monday.com",
          helium: true
        },
        {
          capability: "End-to-End Retention",
          popularTools: "Manual processes",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium preserves institutional knowledge with knowledge capture including automated documentation, expert interviews, project learnings, and client insights. The system provides succession planning with critical role identification, successor identification, knowledge transfer plans, and readiness assessment. It includes knowledge transfer with structured programs, mentoring facilitation, documentation, and validation. The system enables relationship mapping with client relationships, internal networks, expertise connections, and transition planning, plus risk assessment with departure risk, knowledge concentration, capability gaps, and mitigation planning."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "90%",
          label: "Knowledge retention"
        },
        {
          icon: RiShieldLine,
          value: "Smoother",
          label: "Transitions"
        },
        {
          icon: RiFocus3Line,
          value: "Better",
          label: "Succession planning"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2M",
          label: "Annual value protection"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Critical Role Identification",
            description: "Identifies key positions"
          },
          {
            title: "Knowledge Assessment",
            description: "Evaluates knowledge concentration"
          },
          {
            title: "Successor Identification",
            description: "Finds potential successors"
          },
          {
            title: "Knowledge Capture",
            description: "Documents expertise"
          },
          {
            title: "Transfer Planning",
            description: "Develops transfer plan"
          },
          {
            title: "Execution",
            description: "Implements knowledge transfer"
          },
          {
            title: "Validation",
            description: "Verifies transfer success"
          },
          {
            title: "Continuous Monitoring",
            description: "Tracks knowledge retention"
          }
        ]
      }}
    />
  );
}

