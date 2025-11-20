"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiHeartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Yield Improvement & Defect Reduction"
      backHref="/use-cases/production"
      backLabel="Back to Production"
      businessChallenge={{
        title: "Business Challenge",
        description: "Manufacturing yield averages 85-90% (10-15% defect rate), $20M+ annual scrap costs, limited root cause analysis, reactive quality management, and customer returns and complaints. Yield challenges include multiple defect sources, limited visibility, delayed detection, manual analysis, and slow improvement."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium improves yield systematically with real-time quality monitoring including in-line inspection, defect detection, pattern recognition, and trend analysis. The system provides root cause analysis with AI-powered investigation, factor correlation, process parameter analysis, and equipment performance. It includes predictive quality with defect prediction, process drift detection, preventive actions, and quality forecasting. The system enables process control with automated adjustments, parameter optimization, alert generation, and corrective actions, plus continuous improvement with yield tracking, improvement initiatives, best practice capture, and knowledge sharing."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "50%",
          label: "Reduction in defect rate"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$12M",
          label: "Annual scrap cost savings"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Improved",
          label: "Customer satisfaction"
        },
        {
          icon: RiHeartLine,
          value: "Reduced",
          label: "Returns and complaints"
        }
      ]}
      processFlow={{
        title: "Process Flow",
        steps: [
          {
            title: "Quality Monitoring",
            description: "Tracks all production quality"
          },
          {
            title: "Defect Detection",
            description: "Identifies quality issues"
          },
          {
            title: "Root Cause Analysis",
            description: "Determines defect causes"
          },
          {
            title: "Predictive Analysis",
            description: "Forecasts potential issues"
          },
          {
            title: "Process Adjustment",
            description: "Optimizes parameters"
          },
          {
            title: "Validation",
            description: "Verifies improvements"
          },
          {
            title: "Continuous Monitoring",
            description: "Tracks ongoing quality"
          },
          {
            title: "Improvement Tracking",
            description: "Measures yield gains"
          }
        ]
      }}
    />
  );
}

