"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Computer Vision Quality Inspection"
      backHref="/use-cases/quality-control"
      backLabel="Back to Quality Control"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Quality inspection involves manual sampling covering only 10% of production",
          "Delayed defect detection and inconsistent standards leading to high inspection costs",
          "Customer complaints from limited coverage and human error",
          "Inspection challenges include subjective standards, time-consuming processes, and reactive quality management"
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
          capability: "Computer Vision Inspection",
          popularTools: "Manual sampling (10% coverage)",
          helium: true
        },
        {
          capability: "100% Coverage",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Real-Time Alerts",
          popularTools: "UiPath, Automation Anywhere",
          helium: true
        },
        {
          capability: "Quality Analytics",
          popularTools: "Airtable, Notion, Coda",
          helium: true
        },
        {
          capability: "End-to-End Automation",
          popularTools: "Blue Prism",
          helium: true
        }
      ]}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates quality inspection with computer vision including automated defect detection, 100% inspection coverage, real-time analysis, and consistent standards. The system provides intelligent classification with defect categorization, severity assessment, pattern recognition, and trend analysis. It includes real-time alerts with immediate notification, priority routing, corrective action triggers, and escalation workflows. The system enables quality analytics with defect rates, trend tracking, root cause identification, and improvement recommendations, plus integration with production systems, quality management, and reporting platforms."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "Inspection coverage"
        },
        {
          icon: RiBarChartLine,
          value: "90%",
          label: "Reduction in defects"
        },
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Defect detection"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$10M",
          label: "Annual value"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Production Output",
            description: "Products move through production line"
          },
          {
            title: "Computer Vision Scanning",
            description: "Automated visual inspection of all products"
          },
          {
            title: "Defect Detection",
            description: "AI identifies defects and categorizes severity"
          },
          {
            title: "Pattern Recognition",
            description: "Analyzes defect patterns and trends"
          },
          {
            title: "Real-Time Alert",
            description: "Immediately notifies quality team"
          },
          {
            title: "Priority Routing",
            description: "Routes critical defects for immediate action"
          },
          {
            title: "Corrective Action",
            description: "Triggers process adjustments"
          },
          {
            title: "Quality Analytics",
            description: "Tracks trends and improvement opportunities"
          }
        ]
      }}
    />
  );
}

