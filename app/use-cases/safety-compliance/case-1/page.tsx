"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiShieldLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Incident Prediction & Prevention"
      backHref="/use-cases/safety-compliance"
      backLabel="Back to Safety & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Safety management involves reactive approach with 50+ incidents annually",
          "Limited prediction capability and high costs from employee injuries",
          "Safety challenges include reactive management and limited prevention",
          "Poor prediction, delayed response, and high incident rates"
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
          category: "Workflow Automation",
          tools: ["Zapier", "Make", "n8n"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Predictive Safety",
          popularTools: "Reactive management",
          helium: true
        },
        {
          capability: "Incident Prediction",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Real-Time Monitoring",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Preventive Measures",
          popularTools: "Zapier, Make, n8n",
          helium: true
        },
        {
          capability: "End-to-End Safety Management",
          popularTools: "Manual processes",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium prevents incidents proactively with predictive analytics including risk factor analysis, incident pattern recognition, probability calculation, and early warning systems. The system provides real-time monitoring with safety condition tracking, hazard detection, behavior monitoring, and environment monitoring. It includes automated alerts with early warning, priority routing, preventive action recommendations, and escalation workflows. The system enables preventive actions with risk mitigation, safety improvements, training recommendations, and process changes, plus continuous learning with pattern recognition, model improvement, and optimization."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "80%",
          label: "Reduction in incidents"
        },
        {
          icon: RiShieldLine,
          value: "Proactive",
          label: "Prevention vs reactive"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Improved",
          label: "Employee safety"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5M",
          label: "Annual value"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Risk Factor Analysis",
            description: "Analyzes safety conditions and behaviors"
          },
          {
            title: "Pattern Recognition",
            description: "Identifies incident patterns and trends"
          },
          {
            title: "Incident Probability Calculation",
            description: "Predicts likelihood of safety incidents"
          },
          {
            title: "Early Warning System",
            description: "Alerts on high-risk situations"
          },
          {
            title: "Preventive Action Recommendation",
            description: "Suggests specific safety improvements"
          },
          {
            title: "Risk Mitigation",
            description: "Implements safety improvements"
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

