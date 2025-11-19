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
        description: "Annual performance reviews consume 210 hours per manager annually (17.5 hours per month), with 65% of employees finding them unhelpful. The traditional annual review process suffers from recency bias (managers focus on last 2-3 months, forgetting earlier achievements), lack of continuous feedback (annual reviews feel like surprises), misaligned goals (individual goals don't support business objectives), subjective evaluations (inconsistent standards across managers), missed development opportunities (no ongoing coaching or development), and low employee engagement (reviews feel like checkbox exercises)."
      }}
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
    />
  );
}

