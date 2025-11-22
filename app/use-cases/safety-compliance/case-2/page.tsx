"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiTimeLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Safety Monitoring & Compliance Tracking"
      backHref="/use-cases/safety-compliance"
      backLabel="Back to Safety & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Safety monitoring involves manual checks with limited coverage",
          "Delayed issue detection and inconsistent compliance leading to regulatory risks",
          "Monitoring challenges include manual processes and limited visibility",
          "Delayed insights, inconsistent standards, and compliance gaps"
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
          capability: "Real-Time Monitoring",
          popularTools: "Manual checks",
          helium: true
        },
        {
          capability: "Compliance Tracking",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Automated Alerts",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "Reporting Automation",
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
        description: "Helium monitors safety continuously with real-time monitoring including safety condition tracking, hazard detection, behavior monitoring, and environment monitoring. The system provides compliance tracking with regulatory requirement monitoring, standard adherence, certification tracking, and audit preparation. It includes automated alerts with safety violation detection, compliance gap identification, priority routing, and escalation workflows. The system enables reporting automation with compliance reports, safety dashboards, trend analysis, and exception reporting, plus continuous improvement with trend monitoring, gap analysis, and improvement recommendations."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "Compliance tracking"
        },
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Monitoring"
        },
        {
          icon: RiBarChartLine,
          value: "Reduced",
          label: "Regulatory risks"
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
            title: "Real-Time Monitoring",
            description: "Tracks safety conditions continuously"
          },
          {
            title: "Hazard Detection",
            description: "Identifies safety hazards automatically"
          },
          {
            title: "Compliance Validation",
            description: "Checks adherence to regulatory requirements"
          },
          {
            title: "Gap Identification",
            description: "Identifies compliance gaps"
          },
          {
            title: "Automated Alert",
            description: "Notifies on violations and gaps"
          },
          {
            title: "Priority Routing",
            description: "Routes critical issues for immediate action"
          },
          {
            title: "Compliance Reporting",
            description: "Generates compliance reports automatically"
          },
          {
            title: "Continuous Improvement",
            description: "Tracks trends and recommends improvements"
          }
        ]
      }}
    />
  );
}

