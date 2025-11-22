"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiFocus3Line, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Demand Forecasting & Pipeline Analysis"
      backHref="/use-cases/resource-planning"
      backLabel="Back to Resource Planning"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Demand forecasting involves manual pipeline analysis with limited accuracy",
          "Poor visibility into future needs and reactive resource planning",
          "Missed opportunities from manual processes and limited data",
          "Forecasting challenges include poor accuracy, delayed insights, and suboptimal planning"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        },
        {
          category: "Task & Project Management",
          tools: ["Asana", "Linear", "Monday.com"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Pipeline Analysis",
          popularTools: "Manual analysis",
          helium: true
        },
        {
          capability: "Predictive Analytics",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Scenario Planning",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Resource Planning",
          popularTools: "Asana, Linear, Monday.com",
          helium: true
        },
        {
          capability: "End-to-End Forecasting",
          popularTools: "Manual processes",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium improves demand forecasting with pipeline analysis including opportunity tracking, probability assessment, timeline estimation, and resource requirements. The system provides predictive analytics with historical pattern analysis, seasonal trend identification, growth projections, and demand forecasting. It includes scenario planning with multiple scenarios, what-if analysis, capacity planning, and risk assessment. The system enables resource planning with demand-based allocation, hiring planning, skill development, and investment priorities, plus continuous monitoring with real-time updates, trend tracking, accuracy measurement, and plan adjustment."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "Improved",
          label: "Forecasting accuracy"
        },
        {
          icon: RiFocus3Line,
          value: "Better",
          label: "Capacity planning"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Proactive",
          label: "Resource planning"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1.5M",
          label: "Annual value"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Pipeline Analysis",
            description: "Analyzes sales pipeline and opportunities"
          },
          {
            title: "Probability Assessment",
            description: "Evaluates win probability for each opportunity"
          },
          {
            title: "Resource Requirement Calculation",
            description: "Determines resources needed for each project"
          },
          {
            title: "Historical Pattern Analysis",
            description: "Identifies demand patterns from past data"
          },
          {
            title: "Demand Forecasting",
            description: "Predicts future resource requirements"
          },
          {
            title: "Scenario Planning",
            description: "Models different demand scenarios"
          },
          {
            title: "Capacity Planning",
            description: "Plans resource capacity accordingly"
          },
          {
            title: "Continuous Refinement",
            description: "Improves forecast accuracy over time"
          }
        ]
      }}
    />
  );
}

