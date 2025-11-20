"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiTimeLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Skill Matching & Resource Allocation"
      backHref="/use-cases/resource-planning"
      backLabel="Back to Resource Planning"
      businessChallenge={{
        title: "Business Challenge",
        description: "Resource allocation involves manual skill matching, suboptimal assignments, limited visibility into skills, poor utilization of expertise, and missed project opportunities. Allocation challenges include time-consuming matching, skill gaps, limited database, poor fit, and inefficient use of talent."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes resource allocation with intelligent skill matching including skill inventory, experience analysis, certification tracking, and availability checking. The system provides optimal assignment with skill-fit scoring, project requirements matching, development opportunity consideration, and workload balancing. It includes skill gap analysis with gap identification, training recommendations, hiring needs, and development planning. The system enables performance tracking with assignment success rates, skill utilization, project outcomes, and continuous improvement, plus analytics with skill demand trends, utilization patterns, gap analysis, and investment priorities."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "Optimal",
          label: "Skill matching"
        },
        {
          icon: RiTimeLine,
          value: "Reduced",
          label: "Bench time"
        },
        {
          icon: RiBarChartLine,
          value: "Better",
          label: "Project outcomes"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2M",
          label: "Annual value"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Skill Inventory",
            description: "Maintains comprehensive skill database"
          },
          {
            title: "Project Requirements Analysis",
            description: "Identifies required skills for each project"
          },
          {
            title: "Skill-Fit Scoring",
            description: "Matches resources to project needs"
          },
          {
            title: "Availability Check",
            description: "Verifies resource availability"
          },
          {
            title: "Optimal Assignment",
            description: "Assigns best-fit resources"
          },
          {
            title: "Workload Balancing",
            description: "Ensures balanced distribution"
          },
          {
            title: "Performance Tracking",
            description: "Monitors assignment success"
          },
          {
            title: "Continuous Optimization",
            description: "Refines matching algorithms"
          }
        ]
      }}
    />
  );
}

