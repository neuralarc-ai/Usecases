"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCalendarLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Operational Risk Event Prediction & Prevention"
      backHref="/use-cases/risk-management"
      backLabel="Back to Risk Management"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Operational risk events (fraud, errors, system failures, compliance violations) cost banks $25M+ annually in direct losses, regulatory fines, penalties, and reputational damage",
          "Customer attrition and remediation costs from operational risk events",
          "Reactive approach means issues discovered after occurrence, with limited predictive capability",
          "Incomplete risk assessment, inadequate controls, and poor risk culture contribute to ongoing exposure"
        ]
      }}
      toolsUsed={[
        {
          category: "Data Analysis & Visualization",
          tools: ["Tableau", "Power BI", "Looker"]
        },
        {
          category: "Market Research",
          tools: ["Gartner", "Forrester", "IDC"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Predictive Risk Analytics",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Early Warning System",
          popularTools: "Gartner, Forrester, IDC",
          helium: true
        },
        {
          capability: "Continuous Control Testing",
          popularTools: "Annual testing only",
          helium: true
        },
        {
          capability: "Risk Event Prediction",
          popularTools: "Reactive monitoring",
          helium: true
        },
        {
          capability: "Proactive Risk Management",
          popularTools: "Limited in most tools",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium predicts and prevents operational risk events. The system uses ML models analyzing leading indicators for risk event prediction, performs continuous control testing with gap identification, remediation tracking, and effectiveness measurement, provides risk assessment (inherent risk scoring, residual risk calculation, control adequacy, risk appetite alignment), enables scenario analysis (what-if modeling, stress testing, impact assessment, mitigation planning), and generates risk reporting (risk dashboards, heat maps, trend analysis, executive summaries)."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "75%",
          label: "Reduction in operational losses"
        },
        {
          icon: RiCalendarLine,
          value: "6 months",
          label: "Advance warning"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$15M",
          label: "Annual loss prevention"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Proactive",
          label: "Risk management"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Gathers operational data and events"
          },
          {
            title: "Risk Identification",
            description: "Identifies potential risks"
          },
          {
            title: "Predictive Analysis",
            description: "Forecasts likelihood and impact"
          },
          {
            title: "Control Assessment",
            description: "Evaluates control effectiveness"
          },
          {
            title: "Alert Generation",
            description: "Notifies of high-risk areas"
          },
          {
            title: "Mitigation Planning",
            description: "Recommends risk reduction actions"
          },
          {
            title: "Implementation Tracking",
            description: "Monitors mitigation progress"
          },
          {
            title: "Effectiveness Measurement",
            description: "Validates risk reduction"
          }
        ]
      }}
    />
  );
}

