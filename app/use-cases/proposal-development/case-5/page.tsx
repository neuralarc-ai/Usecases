"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiBarChartLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case5Page() {
  return (
    <CaseDetail
      title="Win/Loss Analysis & Continuous Improvement"
      backHref="/use-cases/proposal-development"
      backLabel="Back to Proposal Development"
      businessChallenge={{
        title: "Business Challenge",
        description: "Win/loss analysis is manual and infrequent, limited to basic metrics, poor root cause analysis, delayed insights, and limited action. Analysis challenges include time-consuming work, inconsistent methodology, limited data, poor insights, and no continuous improvement."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates win/loss analysis with automated data collection including proposal details, pricing information, competitor intelligence, client feedback, and outcome tracking. The system provides root cause analysis with win factor identification, loss reason analysis, pattern recognition, and competitive assessment. It includes predictive analytics with win probability modeling, success factor identification, risk assessment, and improvement opportunities. The system enables continuous improvement with best practice identification, process optimization, training recommendations, and strategy refinement, plus competitive intelligence with competitor strengths, competitive positioning, differentiation opportunities, and response strategies."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "Continuous",
          label: "Insights vs quarterly reviews"
        },
        {
          icon: RiBarChartLine,
          value: "20%",
          label: "Improvement in win rate"
        },
        {
          icon: RiFocus3Line,
          value: "Better",
          label: "Competitive positioning"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Outcome Capture",
            description: "Records win or loss"
          },
          {
            title: "Data Collection",
            description: "Gathers all relevant data"
          },
          {
            title: "Analysis",
            description: "Analyzes factors contributing to outcome"
          },
          {
            title: "Pattern Identification",
            description: "Identifies success patterns"
          },
          {
            title: "Insight Generation",
            description: "Extracts key learnings"
          },
          {
            title: "Recommendation Development",
            description: "Suggests improvements"
          },
          {
            title: "Action Planning",
            description: "Develops implementation plans"
          },
          {
            title: "Tracking",
            description: "Monitors improvement initiatives"
          }
        ]
      }}
    />
  );
}

