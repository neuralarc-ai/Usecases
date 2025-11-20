"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine, RiFocus3Line } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Process Optimization & Bottleneck Identification"
      backHref="/use-cases/operations"
      backLabel="Back to Operations"
      businessChallenge={{
        title: "Business Challenge",
        description: "Banking operations involve 500+ processes across departments, with limited visibility into process bottlenecks and delays, resource utilization and capacity, error rates and rework, cycle times and SLAs, cost per transaction, and improvement opportunities. Manual process analysis takes 3-6 months per process, covers only 10-15% of processes, provides point-in-time snapshots, misses 70% of optimization opportunities, requires expensive consultants, and delivers limited ongoing value."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides continuous process intelligence. The system automatically discovers actual processes through event log analysis, process flow mapping, variant identification, and bottleneck detection, provides performance analytics (cycle time analysis, resource utilization, error rate tracking, cost per transaction, SLA compliance), identifies bottlenecks through queue analysis, wait time calculation, resource constraints, and system limitations, suggests optimization opportunities (automation opportunities, resource reallocation, process redesign, technology improvements), provides continuous monitoring with real-time dashboards, trend analysis, alert generation, and performance tracking, and models process changes to predict outcomes, calculate ROI, and assess risk."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "40%",
          label: "Improvement in process efficiency"
        },
        {
          icon: RiTimeLine,
          value: "60%",
          label: "Reduction in cycle times"
        },
        {
          icon: RiFocus3Line,
          value: "Real-time",
          label: "Bottleneck visibility"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$8M",
          label: "Annual operational savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Captures process events from all systems"
          },
          {
            title: "Process Discovery",
            description: "Maps actual processes automatically"
          },
          {
            title: "Performance Analysis",
            description: "Calculates metrics and identifies issues"
          },
          {
            title: "Bottleneck Identification",
            description: "Pinpoints constraints and delays"
          },
          {
            title: "Optimization Recommendations",
            description: "Suggests improvements with ROI"
          },
          {
            title: "Impact Simulation",
            description: "Models outcomes of changes"
          },
          {
            title: "Implementation Tracking",
            description: "Monitors improvement initiatives"
          },
          {
            title: "Continuous Monitoring",
            description: "Tracks ongoing performance"
          }
        ]
      }}
    />
  );
}

