"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Automated RFP Analysis & Response"
      backHref="/use-cases/proposal-development"
      backLabel="Back to Proposal Development"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "RFP response takes 80-120 hours per proposal with manual requirement extraction",
          "Limited reuse and inconsistent quality leading to 20-30% win rate",
          "RFP challenges include time-consuming analysis and manual content creation",
          "Limited collaboration, tight deadlines, and high costs"
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
          category: "Task & Project Management",
          tools: ["Asana", "Linear", "Monday.com"]
        }
      ]}
      comparisonTable={[
        {
          capability: "AI-Powered RFP Analysis",
          popularTools: "Manual requirement extraction",
          helium: true
        },
        {
          capability: "Automated Response Generation",
          popularTools: "Jasper, Copy.ai, Writesonic",
          helium: true
        },
        {
          capability: "Collaboration Tools",
          popularTools: "Gamma, Beautiful.ai, Canva",
          helium: true
        },
        {
          capability: "Quality Assurance",
          popularTools: "Asana, Linear, Monday.com",
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
        description: "Helium accelerates RFP response with AI-powered RFP analysis including requirement extraction, question identification, compliance checking, and evaluation criteria analysis. The system provides automated response generation with content library matching, AI-powered drafting, template population, and customization. It includes collaboration tools with team coordination, section assignment, real-time editing, and review workflows. The system enables quality assurance with completeness checking, compliance validation, consistency review, and error detection, plus win/loss analysis with success factor identification, improvement recommendations, competitive intelligence, and strategy optimization."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "60%",
          label: "Reduction in response time"
        },
        {
          icon: RiBarChartLine,
          value: "40%",
          label: "Improvement in win rate"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Higher",
          label: "Quality responses"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2.5M",
          label: "Annual value per 10 proposals"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "RFP Receipt",
            description: "RFP document received"
          },
          {
            title: "AI Analysis",
            description: "Extracts requirements and questions"
          },
          {
            title: "Content Matching",
            description: "Finds relevant existing content"
          },
          {
            title: "Response Generation",
            description: "Creates initial draft"
          },
          {
            title: "Team Collaboration",
            description: "Refines and customizes"
          },
          {
            title: "Quality Validation",
            description: "Checks completeness and quality"
          },
          {
            title: "Approval",
            description: "Partner review and sign-off"
          },
          {
            title: "Submission",
            description: "Delivers proposal"
          }
        ]
      }}
    />
  );
}

