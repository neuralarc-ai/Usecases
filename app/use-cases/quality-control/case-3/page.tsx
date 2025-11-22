"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiBarChartLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Automated Quality Testing & Validation"
      backHref="/use-cases/quality-control"
      backLabel="Back to Quality Control"
      businessChallenge={{
        title: "Business Challenge",
        challenges: [
          "Quality testing involves manual processes taking 40+ hours per batch",
          "Inconsistent standards and limited coverage leading to high costs",
          "Delayed results from manual work and time-consuming processes",
          "Testing challenges include inconsistent criteria, limited automation, and delayed feedback"
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
          category: "Database Management",
          tools: ["Airtable", "Notion", "Coda"]
        }
      ]}
      comparisonTable={[
        {
          capability: "Automated Test Execution",
          popularTools: "Manual processes (40+ hours)",
          helium: true
        },
        {
          capability: "Intelligent Analysis",
          popularTools: "UiPath, Automation Anywhere",
          helium: true
        },
        {
          capability: "Standard Compliance",
          popularTools: "Tableau, Power BI, Looker",
          helium: true
        },
        {
          capability: "Reporting Automation",
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
        description: "Helium automates quality testing with automated test execution including test plan generation, automated test runs, result collection, and validation. The system provides intelligent analysis with test result interpretation, pass/fail determination, trend analysis, and anomaly detection. It includes standard compliance with regulatory requirements, industry standards, customer specifications, and internal standards. The system enables reporting automation with test reports, compliance certificates, trend analysis, and exception reporting, plus continuous improvement with test optimization, standard refinement, and process enhancement."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "95%",
          label: "Automation of testing"
        },
        {
          icon: RiBarChartLine,
          value: "Consistent",
          label: "Quality standards"
        },
        {
          icon: RiFocus3Line,
          value: "Faster",
          label: "Results and feedback"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$6M",
          label: "Annual value"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Test Plan Generation",
            description: "Creates comprehensive test plans automatically"
          },
          {
            title: "Automated Test Execution",
            description: "Runs all required tests"
          },
          {
            title: "Result Collection",
            description: "Gathers all test data and measurements"
          },
          {
            title: "Intelligent Analysis",
            description: "Interprets results and determines pass/fail"
          },
          {
            title: "Standard Compliance",
            description: "Validates against regulatory and customer standards"
          },
          {
            title: "Anomaly Detection",
            description: "Identifies trends and exceptions"
          },
          {
            title: "Report Generation",
            description: "Creates compliance certificates and reports"
          },
          {
            title: "Continuous Improvement",
            description: "Optimizes test processes"
          }
        ]
      }}
    />
  );
}

