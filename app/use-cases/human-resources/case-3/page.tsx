"use client";

import CaseDetail from "@/components/case-detail";
import { RiArrowDownLine, RiCalendarLine, RiMoneyDollarCircleLine, RiBarChartLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Predictive Employee Retention Analytics"
      backHref="/use-cases/human-resources"
      backLabel="Back to Human Resources"
      businessChallenge={{
        title: "Business Challenge",
        description: "Financial institutions lose 15-20% of employees annually, with replacement costs averaging 150% of salary ($150K-$300K per employee depending on role). Exit interviews consistently reveal issues that could have been addressed 6-12 months earlier: compensation concerns (35% of exits), career development gaps (30% of exits), manager relationship issues (25% of exits), work-life balance problems (20% of exits), and cultural misalignment (15% of exits). The reactive nature of traditional retention efforts means interventions happen too late, after employees have already mentally checked out and begun job searching."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium predicts employee flight risk 6 months in advance with 85% accuracy, enabling proactive retention. The system analyzes 50+ retention factors including performance trends, engagement survey responses, compensation vs market benchmarks, promotion and raise history, manager relationship indicators, tenure and career progression, external market conditions, and peer departures. It monitors communications and surveys for sentiment shifts, identifies at-risk employees with risk scores (0-100), suggests specific retention interventions based on risk factors, monitors intervention effectiveness and outcomes, and tracks retention success rates and ROI."
      }}
      metrics={[
        {
          icon: RiArrowDownLine,
          value: "30%",
          label: "Reduction in voluntary turnover"
        },
        {
          icon: RiCalendarLine,
          value: "6 months",
          label: "Advance warning for at-risk employees"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2.5M",
          label: "Annual savings per 1000 employees"
        },
        {
          icon: RiBarChartLine,
          value: "45%",
          label: "Improvement in retention intervention success"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Data Collection",
            description: "Gathers performance, engagement, compensation, and market data"
          },
          {
            title: "ML Model Analysis",
            description: "Analyzes patterns and identifies risk factors"
          },
          {
            title: "Risk Score Calculation",
            description: "Assigns flight risk score (0-100) to each employee"
          },
          {
            title: "Alert Generation",
            description: "Notifies HR and managers of high-risk employees (score > 70)"
          },
          {
            title: "Manager Dashboard",
            description: "Provides insights into risk factors and trends"
          },
          {
            title: "Intervention Recommendations",
            description: "Suggests specific retention actions (compensation review, development plan, role change, etc.)"
          },
          {
            title: "Outcome Tracking",
            description: "Measures intervention effectiveness and retention success"
          }
        ]
      }}
    />
  );
}

