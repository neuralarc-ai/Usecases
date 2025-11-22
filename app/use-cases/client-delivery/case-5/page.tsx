"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiHeartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Post-Engagement Follow-Up & Value Tracking"
      backHref="/use-cases/client-delivery"
      backLabel="Back to Client Delivery"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Post-engagement activities are manual and inconsistent with limited value tracking",
          "Poor follow-up and missed opportunities leading to low repeat business (30%)",
          "Follow-up challenges include time constraints and lack of automation",
          "No value measurement, limited relationship building, and missed cross-sell"
        ]
      }}
      toolsUsed={[
        {
          category: "Email & Communication",
          tools: ["Superhuman", "Front", "Intercom"]
        },
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        },
        {
          category: "Customer Data Platform",
          tools: ["Segment", "mParticle", "Tealium"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Automated Follow-Up",
          popularTools: "Manual activities",
          helium: true
        },
        {
          capability: "Value Tracking",
          popularTools: "Superhuman, Front, Intercom",
          helium: true
        },
        {
          capability: "Opportunity Identification",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "Relationship Management",
          popularTools: "Segment, mParticle, Tealium",
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
        description: "Helium automates follow-up with automated follow-up including scheduled check-ins, value validation, satisfaction surveys, and relationship building. The system provides value tracking with implementation monitoring, outcome measurement, ROI calculation, and success stories. It includes opportunity identification with additional needs, cross-sell opportunities, referral potential, and expansion possibilities. The system enables relationship management with engagement tracking, touchpoint management, executive relationships, and account planning, plus referral generation with satisfaction-based requests, testimonial collection, case study development, and reference management."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "80%",
          label: "Increase in repeat business"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Better",
          label: "Client relationships"
        },
        {
          icon: RiHeartLine,
          value: "Higher",
          label: "Satisfaction"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Engagement Completion",
            description: "Project concludes"
          },
          {
            title: "Automated Follow-Up",
            description: "Schedules check-ins"
          },
          {
            title: "Value Tracking",
            description: "Monitors implementation and outcomes"
          },
          {
            title: "Satisfaction Survey",
            description: "Collects feedback"
          },
          {
            title: "Opportunity Identification",
            description: "Identifies additional needs"
          },
          {
            title: "Relationship Building",
            description: "Maintains engagement"
          },
          {
            title: "Referral Request",
            description: "Asks for referrals"
          },
          {
            title: "Cross-Sell",
            description: "Presents additional services"
          }
        ]
      }}
    />
  );
}

