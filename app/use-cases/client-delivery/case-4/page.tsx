"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Quality Control & Review Automation"
      backHref="/use-cases/client-delivery"
      backLabel="Back to Client Delivery"
      businessChallenge={{
        title: "Business Challenge",
        description: "Quality review of deliverables takes 20-30 hours per engagement, manual checking, inconsistent standards, limited coverage, and high costs. Quality challenges include time-consuming reviews, inconsistent criteria, limited automation, high partner time, and delayed delivery."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates quality assurance with automated quality checks including completeness validation, consistency checking, accuracy verification, brand compliance, and format validation. The system provides content analysis with logical flow, argument strength, evidence support, and recommendation quality. It includes benchmarking with best practice comparison, historical quality, peer review, and standard adherence. The system enables issue detection with error identification, gap detection, inconsistency flagging, and improvement suggestions, plus approval workflow with automated routing, review tracking, comment management, and sign-off collection."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "70%",
          label: "Reduction in review time"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Higher",
          label: "Quality with consistent standards"
        },
        {
          icon: RiBarChartLine,
          value: "Faster",
          label: "Delivery"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$100K",
          label: "Annual value per project"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Deliverable Submission",
            description: "Team submits for review"
          },
          {
            title: "Automated Quality Checks",
            description: "Validates completeness and quality"
          },
          {
            title: "Content Analysis",
            description: "Analyzes logic and arguments"
          },
          {
            title: "Issue Detection",
            description: "Identifies problems"
          },
          {
            title: "Review Routing",
            description: "Assigns to appropriate reviewer"
          },
          {
            title: "Collaborative Review",
            description: "Team addresses issues"
          },
          {
            title: "Approval",
            description: "Partner sign-off"
          },
          {
            title: "Quality Tracking",
            description: "Monitors quality metrics"
          }
        ]
      }}
    />
  );
}

