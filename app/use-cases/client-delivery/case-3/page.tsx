"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiHeartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Client Communication & Engagement"
      backHref="/use-cases/client-delivery"
      backLabel="Back to Client Delivery"
      businessChallenge={{
        title: "Business Challenge",
        description: "Client communication involves manual status updates, inconsistent communication, limited proactive engagement, poor visibility for clients, and relationship management challenges. Communication challenges include time-consuming updates, inconsistent frequency, generic messaging, limited automation, and poor tracking."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates client engagement with automated updates including project status, milestone completion, issue alerts, and next steps. The system provides client portal with real-time project visibility, document access, communication log, and feedback submission. It includes proactive engagement with scheduled check-ins, issue escalation, opportunity identification, and relationship building. The system enables communication analytics with engagement tracking, satisfaction monitoring, issue detection, and improvement opportunities, plus multi-channel communication with email, portal, mobile app, video conferencing, and collaboration tools."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "80%",
          label: "Reduction in communication time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Real-time",
          label: "Client visibility"
        },
        {
          icon: RiHeartLine,
          value: "45%",
          label: "Improvement in client satisfaction"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$200K",
          label: "Annual savings per 20 projects"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Milestone Completion",
            description: "Project reaches key stage"
          },
          {
            title: "Automated Update Generation",
            description: "Creates status update"
          },
          {
            title: "Client Notification",
            description: "Sends via preferred channel"
          },
          {
            title: "Portal Update",
            description: "Refreshes client dashboard"
          },
          {
            title: "Engagement Tracking",
            description: "Monitors client interaction"
          },
          {
            title: "Issue Detection",
            description: "Identifies concerns"
          },
          {
            title: "Proactive Outreach",
            description: "Addresses issues"
          },
          {
            title: "Satisfaction Measurement",
            description: "Tracks client satisfaction"
          }
        ]
      }}
    />
  );
}

