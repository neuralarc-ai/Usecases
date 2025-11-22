"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Automated Safety Training & Certification"
      backHref="/use-cases/safety-compliance"
      backLabel="Back to Safety & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Safety training involves manual administration with inconsistent delivery",
          "Limited tracking and certification gaps leading to compliance risks",
          "Training challenges include manual processes and time-consuming administration",
          "Inconsistent quality, limited tracking, and compliance gaps"
        ]
      }}
      toolsUsed={[
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
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
          capability: "Automated Administration",
          popularTools: "Manual administration",
          helium: true
        },
        {
          capability: "Personalized Training",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "Certification Management",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Performance Tracking",
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
        description: "Helium automates safety training with automated administration including training assignment, scheduling, delivery, and tracking. The system provides personalized training with role-specific content, skill-based learning, adaptive delivery, and progress tracking. It includes certification management with automated certification, renewal tracking, compliance validation, and audit preparation. The system enables performance tracking with completion rates, assessment scores, knowledge retention, and effectiveness measurement, plus continuous improvement with content updates, delivery optimization, and effectiveness enhancement."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "90%",
          label: "Training automation"
        },
        {
          icon: RiBarChartLine,
          value: "100%",
          label: "Certification compliance"
        },
        {
          icon: RiTimeLine,
          value: "Reduced",
          label: "Administrative burden"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1.5M",
          label: "Annual value"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Training Assignment",
            description: "Automatically assigns required training"
          },
          {
            title: "Personalized Content",
            description: "Delivers role-specific training"
          },
          {
            title: "Progress Tracking",
            description: "Monitors completion and comprehension"
          },
          {
            title: "Assessment & Certification",
            description: "Tests knowledge and issues certifications"
          },
          {
            title: "Renewal Tracking",
            description: "Monitors certification expiration"
          },
          {
            title: "Compliance Validation",
            description: "Ensures all certifications current"
          },
          {
            title: "Automated Reporting",
            description: "Generates compliance reports"
          },
          {
            title: "Continuous Improvement",
            description: "Optimizes training effectiveness"
          }
        ]
      }}
    />
  );
}

