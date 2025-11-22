"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Maintenance Scheduling & Optimization"
      backHref="/use-cases/maintenance"
      backLabel="Back to Maintenance"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Maintenance scheduling involves manual planning with suboptimal timing",
          "Limited resource coordination and high costs leading to production disruptions",
          "Scheduling challenges include manual processes and poor optimization",
          "Limited coordination, high costs, and production impact"
        ]
      }}
      toolsUsed={[
        {
          category: "RPA & Process Automation",
          tools: ["UiPath", "Automation Anywhere", "Blue Prism"]
        },
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
          capability: "Intelligent Scheduling",
          popularTools: "Manual planning",
          helium: true
        },
        {
          capability: "Resource Coordination",
          popularTools: "UiPath, Automation Anywhere",
          helium: true
        },
        {
          capability: "Production Integration",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Cost Optimization",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "End-to-End Optimization",
          popularTools: "Blue Prism",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes maintenance scheduling with intelligent scheduling including optimal timing calculation, resource availability, production impact minimization, and cost optimization. The system provides resource coordination with technician assignment, skill matching, tool availability, and spare parts coordination. It includes production integration with production schedule consideration, downtime minimization, capacity planning, and impact assessment. The system enables cost optimization with maintenance cost minimization, resource efficiency, spare parts optimization, and total cost reduction, plus continuous improvement with schedule effectiveness, optimization, and refinement."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "40%",
          label: "Reduction in maintenance costs"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Optimal",
          label: "Scheduling"
        },
        {
          icon: RiBarChartLine,
          value: "Minimized",
          label: "Production impact"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$4M",
          label: "Annual savings"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Maintenance Needs Assessment",
            description: "Identifies required maintenance activities"
          },
          {
            title: "Optimal Timing Calculation",
            description: "Determines best maintenance windows"
          },
          {
            title: "Production Schedule Integration",
            description: "Considers production impact"
          },
          {
            title: "Resource Availability Check",
            description: "Verifies technician and parts availability"
          },
          {
            title: "Schedule Optimization",
            description: "Creates optimal maintenance schedule"
          },
          {
            title: "Resource Assignment",
            description: "Assigns technicians and coordinates parts"
          },
          {
            title: "Execution Tracking",
            description: "Monitors maintenance completion"
          },
          {
            title: "Effectiveness Measurement",
            description: "Validates schedule optimization"
          }
        ]
      }}
    />
  );
}

