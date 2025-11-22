"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiEmotionHappyLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Automated Performance Review & Goal Tracking"
      backHref="/use-cases/human-resources"
      backLabel="Back to Human Resources"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Annual performance reviews consume 210 hours per manager annually (17.5 hours per month), with 65% of employees finding them unhelpful",
          "Traditional process suffers from recency bias (managers focus on last 2-3 months) and lack of continuous feedback (annual reviews feel like surprises)",
          "Misaligned goals (individual goals don't support business objectives) and subjective evaluations (inconsistent standards across managers)",
          "Missed development opportunities (no ongoing coaching) and low employee engagement (reviews feel like checkbox exercises)"
        ]
      }}
      toolsUsed={[
        {
          category: "Task & Project Management",
          tools: ["Asana", "Linear", "Monday.com"]
        },
        {
          category: "Knowledge Management",
          tools: ["Confluence", "Notion", "SharePoint"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Continuous Performance Tracking",
          popularTools: "Annual reviews only",
          helium: true
        },
        {
          capability: "Data-Driven Reviews",
          popularTools: "Asana, Linear, Monday.com",
          helium: true
        },
        {
          capability: "Goal Alignment",
          popularTools: "Confluence, Notion, SharePoint",
          helium: true
        },
        {
          capability: "Automated Review Generation",
          popularTools: "Manual preparation",
          helium: true
        },
        {
          capability: "Development Planning",
          popularTools: "Limited in most tools",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium transforms performance management from annual events to continuous, data-driven processes. The system captures achievements, feedback, and metrics throughout the year from project completions, customer feedback, peer and manager feedback, training completions, and quantitative metrics, creates comprehensive review drafts based on actual data (not manager memory), ensures individual goals cascade from and support business objectives, enables ongoing feedback capture and analysis, recommends personalized development paths based on performance gaps and career aspirations, and ensures consistency across teams and departments through calibration support."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "75%",
          label: "Reduction in review preparation time"
        },
        {
          icon: RiEmotionHappyLine,
          value: "90%",
          label: "Employee satisfaction with reviews"
        },
        {
          icon: RiBarChartLine,
          value: "40%",
          label: "Increase in goal achievement rates"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$180K",
          label: "Annual savings per 100 managers"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Continuous Data Collection",
            description: "Tracks achievements, feedback, and metrics year-round"
          },
          {
            title: "Achievement Tracking",
            description: "Documents accomplishments in real-time with evidence"
          },
          {
            title: "AI Review Generation",
            description: "Creates data-driven review drafts with specific examples"
          },
          {
            title: "Manager Refinement",
            description: "Managers add context, insights, and forward-looking guidance"
          },
          {
            title: "Employee Self-Assessment",
            description: "Employees provide their perspective and aspirations"
          },
          {
            title: "Calibration Analysis",
            description: "Ensures consistency across organization with peer comparisons"
          },
          {
            title: "Final Review",
            description: "Completed review with ratings, feedback, and development plan"
          },
          {
            title: "Development Planning",
            description: "Creates personalized growth roadmap with specific actions"
          }
        ]
      }}
    />
  );
}

