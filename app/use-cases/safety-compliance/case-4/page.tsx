"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiShieldLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Risk Assessment & Mitigation"
      backHref="/use-cases/safety-compliance"
      backLabel="Back to Safety & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Risk assessment involves manual processes with limited analysis depth",
          "Delayed assessments and inconsistent methodology leading to ineffective mitigation",
          "Assessment challenges include time-consuming work and limited tools",
          "Poor methodology, delayed actions, and ineffective solutions"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
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
          capability: "AI-Powered Analysis",
          popularTools: "Manual processes",
          helium: true
        },
        {
          capability: "Comprehensive Assessment",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Mitigation Recommendations",
          popularTools: "Perplexity, ChatGPT, Claude",
          helium: true
        },
        {
          capability: "Action Tracking",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "End-to-End Assessment",
          popularTools: "Manual processes",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium accelerates risk assessment with AI-powered analysis including risk identification, probability calculation, impact assessment, and priority ranking. The system provides comprehensive assessment with multi-factor analysis, scenario modeling, relationship mapping, and trend analysis. It includes mitigation recommendations with specific actions, implementation plans, effectiveness prediction, and cost-benefit analysis. The system enables action tracking with implementation monitoring, effectiveness measurement, validation, and continuous improvement, plus knowledge capture with risk documentation, best practice capture, and prevention strategies."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "85%",
          label: "Faster risk identification"
        },
        {
          icon: RiShieldLine,
          value: "Effective",
          label: "Mitigation"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Reduced",
          label: "Safety risks"
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
            title: "Risk Identification",
            description: "Identifies all potential safety risks"
          },
          {
            title: "AI-Powered Analysis",
            description: "Analyzes risk probability and impact"
          },
          {
            title: "Multi-Factor Assessment",
            description: "Evaluates contributing factors"
          },
          {
            title: "Risk Scoring",
            description: "Ranks risks by severity"
          },
          {
            title: "Mitigation Recommendation",
            description: "Suggests specific risk reduction actions"
          },
          {
            title: "Implementation Planning",
            description: "Develops action plans"
          },
          {
            title: "Mitigation Execution",
            description: "Implements risk reduction measures"
          },
          {
            title: "Validation & Tracking",
            description: "Verifies effectiveness and monitors risks"
          }
        ]
      }}
    />
  );
}

