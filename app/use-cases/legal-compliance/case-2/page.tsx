"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Intelligent Contract Review & Risk Assessment"
      backHref="/use-cases/legal-compliance"
      backLabel="Back to Legal & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Contract review takes 4-6 hours per document, with legal teams handling 500+ contracts monthly (vendor agreements, customer contracts, employment agreements, NDAs, partnerships)",
          "Manual review process misses 25% of non-standard clauses and creates financial exposure ($2M+ annually from unfavorable terms)",
          "Delays business deals (average 2-3 week turnaround) and provides inconsistent risk assessment across attorneys",
          "Limited obligation tracking (missed deadlines, renewals) and costs $600K+ annually"
        ]
      }}
      toolsUsed={[
        {
          category: "Web Research & Analysis",
          tools: ["Perplexity", "ChatGPT", "Claude"]
        },
        {
          category: "Document Generation",
          tools: ["Jasper", "Copy.ai", "Writesonic"]
        }
      ]}
      comparisonTable={[
        {
          capability: "AI-Powered Contract Analysis",
          popularTools: "Perplexity, ChatGPT, Claude",
          helium: true
        },
        {
          capability: "Automated Clause Extraction",
          popularTools: "Manual review",
          helium: true
        },
        {
          capability: "Risk Assessment",
          popularTools: "Jasper, Copy.ai, Writesonic",
          helium: true
        },
        {
          capability: "Obligation Tracking",
          popularTools: "Limited in most tools",
          helium: true
        },
        {
          capability: "Intelligent Search",
          popularTools: "Basic keyword search",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium accelerates contract review with AI-powered analysis. The system extracts all clauses and terms automatically from any format, identifies key provisions (liability, termination, payment terms, IP, confidentiality, dispute resolution, renewals, warranties), assesses deviation from standard terms, suggests modifications to reduce risk, monitors payment deadlines, renewal dates, deliverable requirements, and reporting obligations, and enables intelligent search across contract repository."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "80%",
          label: "Reduction in initial review time"
        },
        {
          icon: RiBarChartLine,
          value: "95%",
          label: "Accuracy in risk identification"
        },
        {
          icon: RiTimeLine,
          value: "50%",
          label: "Faster contract negotiation cycles"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$600K",
          label: "Annual savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Contract Upload",
            description: "Submit contract for review"
          },
          {
            title: "AI Parsing & Analysis",
            description: "Extracts all terms and clauses"
          },
          {
            title: "Clause Extraction",
            description: "Identifies key provisions"
          },
          {
            title: "Risk Assessment",
            description: "Scores risk level (low/medium/high)"
          },
          {
            title: "Deviation Identification",
            description: "Flags non-standard terms"
          },
          {
            title: "Redline Generation",
            description: "Suggests modifications"
          },
          {
            title: "Legal Review",
            description: "Attorney reviews AI analysis and recommendations"
          },
          {
            title: "Approval Workflow",
            description: "Routes for appropriate signatures"
          },
          {
            title: "Contract Execution & Storage",
            description: "Executes signed contract and archives in repository for future reference"
          }
        ]
      }}
    />
  );
}

