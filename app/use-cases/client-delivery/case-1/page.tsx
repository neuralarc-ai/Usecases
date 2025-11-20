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
        description: "Project management for consulting engagements involves manual status tracking across 20+ projects, weekly status reports taking 10+ hours, limited real-time visibility, inconsistent project execution, and budget overruns (15% average). PM challenges include manual tracking, delayed updates, poor visibility, inconsistent processes, and high administrative burden."
      }}
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

