"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Process Optimization & Efficiency"
      backHref="/use-cases/production"
      backLabel="Back to Production"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Manufacturing processes have 20-30% efficiency gaps with limited optimization",
          "Manual improvement efforts and $15M+ in waste from slow improvement cycles",
          "Process challenges include no systematic optimization and limited data analysis",
          "Manual identification, slow implementation, and inconsistent results"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "RPA & Process Automation",
          tools: ["UiPath", "Automation Anywhere", "Blue Prism"]
        },
        {
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Process Monitoring",
          popularTools: "Manual tracking",
          helium: true
        },
        {
          capability: "AI-Powered Analysis",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Optimization Recommendations",
          popularTools: "UiPath, Automation Anywhere",
          helium: true
        },
        {
          capability: "Simulation",
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
        description: "Helium optimizes processes continuously with process monitoring including real-time data collection, performance tracking, bottleneck detection, and waste identification. The system provides AI-powered analysis with efficiency calculation, root cause analysis, optimization opportunities, and impact assessment. It includes optimization recommendations with specific improvements, implementation plans, ROI estimation, and priority ranking. The system enables simulation with process modeling, what-if analysis, impact prediction, and risk assessment, plus continuous improvement with automated monitoring, trend tracking, best practice identification, and knowledge capture."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "30%",
          label: "Efficiency improvement"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$15M",
          label: "Annual productivity gain"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Reduced",
          label: "Waste (material and time)"
        },
        {
          icon: RiTimeLine,
          value: "Faster",
          label: "Improvement cycles"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Gathers process data"
          },
          {
            title: "Performance Analysis",
            description: "Calculates efficiency metrics"
          },
          {
            title: "Bottleneck Identification",
            description: "Finds constraints"
          },
          {
            title: "Optimization Analysis",
            description: "Identifies improvements"
          },
          {
            title: "Simulation",
            description: "Models proposed changes"
          },
          {
            title: "Recommendation",
            description: "Suggests specific actions"
          },
          {
            title: "Implementation",
            description: "Executes improvements"
          },
          {
            title: "Monitoring",
            description: "Tracks results"
          }
        ]
      }}
    />
  );
}

