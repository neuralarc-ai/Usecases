"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiBarChartLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Equipment Performance Monitoring"
      backHref="/use-cases/maintenance"
      backLabel="Back to Maintenance"
      businessChallenge={{
        title: "Business Challenge",
        description: "Equipment monitoring involves manual checks, limited visibility, delayed issue detection, poor performance tracking, and reactive maintenance. Monitoring challenges include manual processes, limited data, delayed insights, poor visibility, and reactive approach."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium monitors equipment continuously with real-time monitoring including equipment status, performance metrics, efficiency tracking, and health indicators. The system provides performance analytics with efficiency calculation, trend analysis, benchmark comparison, and optimization opportunities. It includes predictive insights with performance forecasting, degradation prediction, maintenance needs, and optimization recommendations. The system enables automated alerts with anomaly detection, threshold monitoring, priority routing, and escalation workflows, plus integration with CMMS, production systems, and analytics platforms."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "Real-time",
          label: "Monitoring"
        },
        {
          icon: RiBarChartLine,
          value: "90%",
          label: "Performance visibility"
        },
        {
          icon: RiFocus3Line,
          value: "Proactive",
          label: "Maintenance vs reactive"
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
            title: "Real-Time Data Collection",
            description: "Gathers equipment performance data continuously"
          },
          {
            title: "Performance Metrics Calculation",
            description: "Computes efficiency and health indicators"
          },
          {
            title: "Trend Analysis",
            description: "Identifies performance patterns and degradation"
          },
          {
            title: "Benchmark Comparison",
            description: "Compares against standards and historical data"
          },
          {
            title: "Performance Forecasting",
            description: "Predicts future performance trends"
          },
          {
            title: "Anomaly Detection",
            description: "Identifies performance issues"
          },
          {
            title: "Alert Generation",
            description: "Notifies maintenance team of issues"
          },
          {
            title: "Optimization Recommendations",
            description: "Suggests performance improvements"
          }
        ]
      }}
    />
  );
}

