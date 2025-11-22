"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Project Management Automation & Tracking"
      backHref="/use-cases/client-delivery"
      backLabel="Back to Client Delivery"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Project management for consulting engagements involves manual status tracking across 20+ projects",
          "Weekly status reports taking 10+ hours with limited real-time visibility",
          "Inconsistent project execution and budget overruns (15% average)",
          "PM challenges include manual tracking, delayed updates, poor visibility, and inconsistent processes"
        ]
      }}
      toolsUsed={[
        {
          category: "Task & Project Management",
          tools: ["Asana", "Linear", "Monday.com"]
        },
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Automated Tracking",
          popularTools: "Manual status tracking",
          helium: true
        },
        {
          capability: "Real-Time Dashboards",
          popularTools: "Asana, Linear, Monday.com",
          helium: true
        },
        {
          capability: "Automated Reporting",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "Risk Detection",
          popularTools: "Airtable, Notion, Coda",
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
        description: "Helium automates project management with automated tracking including task completion, time tracking, budget monitoring, resource utilization, and milestone tracking. The system provides real-time dashboards with project status, budget vs actual, timeline tracking, risk indicators, and team performance. It includes automated reporting with status reports, executive summaries, client updates, and team communications. The system enables risk detection with budget overrun prediction, timeline risk, resource constraints, and quality issues, plus resource optimization with capacity planning, skill matching, workload balancing, and utilization tracking."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Reduction in status reporting time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Real-time",
          label: "Project visibility"
        },
        {
          icon: RiBarChartLine,
          value: "50%",
          label: "Reduction in budget overruns"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$500K",
          label: "Annual savings per 20 projects"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Project Setup",
            description: "Configures project parameters"
          },
          {
            title: "Automated Tracking",
            description: "Monitors all project activities"
          },
          {
            title: "Data Aggregation",
            description: "Consolidates from all sources"
          },
          {
            title: "Status Calculation",
            description: "Computes project health"
          },
          {
            title: "Risk Detection",
            description: "Identifies potential issues"
          },
          {
            title: "Alert Generation",
            description: "Notifies project team"
          },
          {
            title: "Report Generation",
            description: "Creates status reports"
          },
          {
            title: "Client Communication",
            description: "Delivers updates"
          }
        ]
      }}
    />
  );
}

