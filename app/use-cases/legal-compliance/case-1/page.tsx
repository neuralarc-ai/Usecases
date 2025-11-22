"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiCalendarLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Automated Regulatory Document Analysis"
      backHref="/use-cases/legal-compliance"
      backLabel="Back to Legal & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Legal teams review 10,000+ pages of regulatory updates monthly from multiple regulators (SEC, FINRA, OCC, Federal Reserve, State banking regulators, CFPB)",
          "Manual review process takes 200+ hours per month (5+ full-time employees) and misses 15-20% of critical updates",
          "Creates compliance risks and potential violations, delays policy updates by 30-60 days, and causes audit findings",
          "Costs $350K+ annually in legal time and creates significant compliance exposure"
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
          capability: "Automated Document Monitoring",
          popularTools: "Perplexity, ChatGPT, Claude",
          helium: true
        },
        {
          capability: "AI Classification & Analysis",
          popularTools: "Manual review",
          helium: true
        },
        {
          capability: "Change Detection",
          popularTools: "Jasper, Copy.ai, Writesonic",
          helium: true
        },
        {
          capability: "Impact Assessment",
          popularTools: "Limited in most tools",
          helium: true
        },
        {
          capability: "Real-Time Alerts",
          popularTools: "Manual monitoring",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates regulatory document monitoring and analysis. The system automatically collects updates from all regulatory sources, uses AI to classify documents by regulatory topic, urgency level, and business impact, detects changes (new requirements, modifications, repealed rules), assesses effect on current policies and operations, cross-references with existing compliance framework, ranks changes by urgency and business impact, and notifies legal team through multiple channels."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in document review time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "Capture of relevant regulatory changes"
        },
        {
          icon: RiCalendarLine,
          value: "60 days",
          label: "Advance warning for compliance updates"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "$350K",
          label: "Annual cost savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Regulatory Document Ingestion",
            description: "Collects from all regulatory sources daily"
          },
          {
            title: "AI Classification",
            description: "Categorizes by topic, urgency, and impact"
          },
          {
            title: "Change Detection",
            description: "Identifies new requirements and modifications"
          },
          {
            title: "Impact Analysis",
            description: "Assesses effect on current policies and operations"
          },
          {
            title: "Policy Mapping",
            description: "Links to existing compliance framework"
          },
          {
            title: "Priority Scoring",
            description: "Ranks by urgency and business impact"
          },
          {
            title: "Legal Team Alerts",
            description: "Notifies of critical changes requiring action"
          },
          {
            title: "Action Tracking",
            description: "Monitors policy updates and implementation"
          }
        ]
      }}
    />
  );
}

