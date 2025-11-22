"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Quality Control & Review Automation"
      backHref="/use-cases/client-delivery"
      backLabel="Back to Client Delivery"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Quality review of deliverables takes 20-30 hours per engagement with manual checking",
          "Inconsistent standards and limited coverage leading to high costs",
          "Quality challenges include time-consuming reviews and inconsistent criteria",
          "Limited automation, high partner time, and delayed delivery"
        ]
      }}
      toolsUsed={[
        {
          category: "Document Generation",
          tools: ["Jasper", "Copy.ai", "Writesonic"]
        },
        {
          category: "Task & Project Management",
          tools: ["Asana", "Linear", "Monday.com"]
        },
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Automated Quality Checks",
          popularTools: "Manual checking",
          helium: true
        },
        {
          capability: "Content Analysis",
          popularTools: "Jasper, Copy.ai, Writesonic",
          helium: true
        },
        {
          capability: "Issue Detection",
          popularTools: "Asana, Linear, Monday.com",
          helium: true
        },
        {
          capability: "Approval Workflow",
          popularTools: "Zapier, Make, n8n",
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
        description: "Helium automates quality assurance with automated quality checks including completeness validation, consistency checking, accuracy verification, brand compliance, and format validation. The system provides content analysis with logical flow, argument strength, evidence support, and recommendation quality. It includes benchmarking with best practice comparison, historical quality, peer review, and standard adherence. The system enables issue detection with error identification, gap detection, inconsistency flagging, and improvement suggestions, plus approval workflow with automated routing, review tracking, comment management, and sign-off collection."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "70%",
          label: "Reduction in review time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Higher",
          label: "Quality with consistent standards"
        },
        {
          icon: RiBarChartLine,
          value: "Faster",
          label: "Delivery"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$100K",
          label: "Annual value per project"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Deliverable Submission",
            description: "Team submits for review"
          },
          {
            title: "Automated Quality Checks",
            description: "Validates completeness and quality"
          },
          {
            title: "Content Analysis",
            description: "Analyzes logic and arguments"
          },
          {
            title: "Issue Detection",
            description: "Identifies problems"
          },
          {
            title: "Review Routing",
            description: "Assigns to appropriate reviewer"
          },
          {
            title: "Collaborative Review",
            description: "Team addresses issues"
          },
          {
            title: "Approval",
            description: "Partner sign-off"
          },
          {
            title: "Quality Tracking",
            description: "Monitors quality metrics"
          }
        ]
      }}
    />
  );
}

