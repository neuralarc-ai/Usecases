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
        challenges: [
          "Banking operations involve 500+ processes across departments, with limited visibility into process bottlenecks, delays, resource utilization, and capacity",
          "Limited insight into error rates, rework, cycle times, SLAs, cost per transaction, and improvement opportunities",
          "Manual process analysis takes 3-6 months per process, covers only 10-15% of processes, and provides point-in-time snapshots",
          "Misses 70% of optimization opportunities, requires expensive consultants, and delivers limited ongoing value"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Process Discovery & Mapping",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Bottleneck Identification",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "Continuous Monitoring",
          popularTools: "Point-in-time analysis",
          helium: true
        },
        {
          capability: "Optimization Recommendations",
          popularTools: "Manual analysis",
          helium: true
        },
        {
          capability: "Predictive Process Analytics",
          popularTools: "Limited in most tools",
          helium: true
        }
      ]}
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

