"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="AI-Powered Lead Scoring & Prioritization"
      backHref="/use-cases/sales-distribution"
      backLabel="Back to Sales & Distribution"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Insurance agents handle 500+ leads monthly, with only 5-10% conversion rate and no prioritization (first-come, first-served)",
          "60% of agent time wasted on low-quality leads and $5M+ in lost revenue from missed opportunities",
          "Poor lead follow-up and inability to identify high-value opportunities",
          "Lead challenges include inconsistent lead quality, limited lead intelligence, no scoring or prioritization, manual qualification, and delayed follow-up"
        ]
      }}
      toolsUsed={[
        {
          category: "Customer Data Platform",
          tools: ["Segment", "mParticle", "Tealium"]
        },
        {
          category: "Competitive Intelligence",
          tools: ["Crayon", "Klue", "Kompyte"]
        }
      ]}
      comparisonTable={[
        {
          capability: "AI-Powered Lead Scoring",
          popularTools: "Segment, mParticle, Tealium",
          helium: true
        },
        {
          capability: "Intelligent Prioritization",
          popularTools: "First-come, first-served",
          helium: true
        },
        {
          capability: "Lead Enrichment",
          popularTools: "Limited lead intelligence",
          helium: true
        },
        {
          capability: "Automated Qualification",
          popularTools: "Manual qualification",
          helium: true
        },
        {
          capability: "Follow-Up Automation",
          popularTools: "Delayed follow-up",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium scores and prioritizes leads intelligently. The system provides lead scoring with ML models analyzing 200+ factors, conversion probability, revenue potential, urgency assessment, and channel effectiveness. It includes intelligent prioritization with score-based ranking, agent capacity matching, specialization alignment, and geographic routing. The system enables lead enrichment with third-party data, social media insights, property information, financial indicators, and behavioral signals. It includes automated qualification with needs assessment, budget verification, timeline identification, and decision-maker confirmation. The system provides follow-up automation with automated reminders, nurture campaigns, re-engagement triggers, and optimal timing."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "300%",
          label: "Improvement in conversion rate"
        },
        {
          icon: RiTimeLine,
          value: "60%",
          label: "Reduction in wasted time"
        },
        {
          icon: RiTimeLine,
          value: "Faster",
          label: "Lead response"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$15M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Lead Capture",
            description: "Lead enters system from any source"
          },
          {
            title: "Data Enrichment",
            description: "Adds third-party data"
          },
          {
            title: "AI Scoring",
            description: "Calculates conversion probability and value"
          },
          {
            title: "Prioritization",
            description: "Ranks leads by score"
          },
          {
            title: "Agent Assignment",
            description: "Routes to best-fit agent"
          },
          {
            title: "Automated Outreach",
            description: "Initiates contact"
          },
          {
            title: "Follow-Up Management",
            description: "Tracks and reminds"
          },
          {
            title: "Conversion Tracking",
            description: "Measures outcomes"
          }
        ]
      }}
    />
  );
}

