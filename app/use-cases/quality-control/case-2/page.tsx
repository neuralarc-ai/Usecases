"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiTimeLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Predictive Quality & Defect Prevention"
      backHref="/use-cases/quality-control"
      backLabel="Back to Quality Control"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Quality management is reactive detecting defects after production",
          "Limited prediction capability and high scrap costs",
          "Customer dissatisfaction from reactive approach and delayed detection",
          "Quality challenges include limited prevention, high costs, and poor customer experience"
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
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Predictive Quality",
          popularTools: "Reactive detection",
          helium: true
        },
        {
          capability: "Real-Time Detection",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Preventive Measures",
          popularTools: "UiPath, Automation Anywhere",
          helium: true
        },
        {
          capability: "Quality Analytics",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "End-to-End Quality Control",
          popularTools: "Blue Prism",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium prevents defects proactively with predictive quality including process parameter monitoring, defect prediction models, early warning systems, and preventive action recommendations. The system provides real-time monitoring with continuous process tracking, anomaly detection, drift identification, and trend analysis. It includes automated adjustments with parameter optimization, process control, corrective actions, and validation. The system enables quality forecasting with defect probability prediction, risk assessment, impact analysis, and prevention strategies, plus continuous learning with model improvement, pattern recognition, and optimization."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "80%",
          label: "Reduction in defects"
        },
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Prevention vs reactive"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Improved",
          label: "Customer satisfaction"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$8M",
          label: "Annual value"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Process Monitoring",
            description: "Continuously tracks all process parameters"
          },
          {
            title: "Anomaly Detection",
            description: "Identifies unusual patterns and drift"
          },
          {
            title: "Defect Prediction",
            description: "ML models forecast potential quality issues"
          },
          {
            title: "Early Warning",
            description: "Alerts before defects occur"
          },
          {
            title: "Preventive Action",
            description: "Recommends specific corrective measures"
          },
          {
            title: "Process Adjustment",
            description: "Automatically optimizes parameters"
          },
          {
            title: "Validation",
            description: "Verifies prevention effectiveness"
          },
          {
            title: "Continuous Learning",
            description: "Improves prediction models"
          }
        ]
      }}
    />
  );
}

