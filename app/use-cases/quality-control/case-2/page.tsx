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
        description: "Quality management is reactive, detecting defects after production, limited prediction capability, high scrap costs, and customer dissatisfaction. Quality challenges include reactive approach, delayed detection, limited prevention, high costs, and poor customer experience."
      }}
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
    />
  );
}

