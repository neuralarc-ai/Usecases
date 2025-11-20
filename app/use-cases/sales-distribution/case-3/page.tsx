"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiMoneyDollarCircleLine, RiTimeLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Agent Performance Analytics & Coaching"
      backHref="/use-cases/sales-distribution"
      backLabel="Back to Sales & Distribution"
      businessChallenge={{
        title: "Business Challenge",
        description: "Agent performance varies widely, with top 20% producing 60% of revenue, bottom 30% underperforming significantly, limited performance visibility, generic training programs, high agent turnover (25% annually), and $5M+ in lost productivity. Performance challenges include inconsistent metrics, delayed feedback, limited coaching, no predictive analytics, and poor development plans."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes agent performance. The system provides performance analytics with real-time metrics, comparative analysis, trend identification, and predictive scoring. It includes coaching recommendations with skill gap identification, personalized training, best practice sharing, and improvement tracking. The system enables predictive analytics with performance forecasting, attrition risk, potential identification, and career pathing. It includes gamification with leaderboards, achievement badges, contests and incentives, and team challenges. The system generates automated reporting with individual scorecards, team dashboards, executive summaries, and trend reports."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "35%",
          label: "Improvement in average agent productivity"
        },
        {
          icon: RiBarChartLine,
          value: "50%",
          label: "Reduction in performance variance"
        },
        {
          icon: RiTimeLine,
          value: "40%",
          label: "Reduction in agent turnover"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$8M",
          label: "Annual revenue increase"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Gathers agent activity and results"
          },
          {
            title: "Performance Calculation",
            description: "Computes metrics"
          },
          {
            title: "Comparative Analysis",
            description: "Benchmarks against peers"
          },
          {
            title: "Gap Identification",
            description: "Identifies improvement areas"
          },
          {
            title: "Coaching Recommendations",
            description: "Suggests specific actions"
          },
          {
            title: "Training Assignment",
            description: "Assigns relevant training"
          },
          {
            title: "Progress Tracking",
            description: "Monitors improvement"
          },
          {
            title: "Recognition",
            description: "Celebrates achievements"
          }
        ]
      }}
    />
  );
}

