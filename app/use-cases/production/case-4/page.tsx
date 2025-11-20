"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiFocus3Line, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Downtime Reduction & OEE Improvement"
      backHref="/use-cases/production"
      backLabel="Back to Production"
      businessChallenge={{
        title: "Business Challenge",
        description: "Manufacturing downtime averages 15-20% of production time, $25M+ annual lost productivity, limited predictability, reactive maintenance, and poor root cause analysis. Downtime challenges include unplanned breakdowns, long repair times, limited spare parts, poor scheduling, and cascading impacts."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium minimizes downtime with real-time monitoring including equipment status, performance metrics, anomaly detection, and trend analysis. The system provides predictive maintenance with failure prediction, maintenance scheduling, spare parts planning, and resource allocation. It includes root cause analysis with failure investigation, pattern identification, contributing factors, and prevention strategies. The system enables OEE optimization with availability improvement, performance enhancement, quality optimization, and overall effectiveness, plus maintenance planning with optimal scheduling, resource coordination, spare parts management, and contractor coordination."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "60%",
          label: "Reduction in unplanned downtime"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$20M",
          label: "Annual productivity gain"
        },
        {
          icon: RiFocus3Line,
          value: "90%",
          label: "OEE improvement"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Extended",
          label: "Equipment life"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Equipment Monitoring",
            description: "Tracks all equipment continuously"
          },
          {
            title: "Anomaly Detection",
            description: "Identifies unusual patterns"
          },
          {
            title: "Failure Prediction",
            description: "Forecasts potential failures"
          },
          {
            title: "Maintenance Scheduling",
            description: "Plans optimal maintenance timing"
          },
          {
            title: "Resource Coordination",
            description: "Allocates technicians and parts"
          },
          {
            title: "Execution",
            description: "Performs maintenance"
          },
          {
            title: "Validation",
            description: "Verifies equipment performance"
          },
          {
            title: "Continuous Improvement",
            description: "Optimizes maintenance strategy"
          }
        ]
      }}
    />
  );
}

