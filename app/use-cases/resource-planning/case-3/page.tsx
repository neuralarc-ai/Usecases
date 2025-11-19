"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiFocus3Line, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Demand Forecasting & Pipeline Analysis"
      backHref="/use-cases/resource-planning"
      backLabel="Back to Resource Planning"
      businessChallenge={{
        title: "Business Challenge",
        description: "Demand forecasting involves manual pipeline analysis, limited accuracy, poor visibility into future needs, reactive resource planning, and missed opportunities. Forecasting challenges include manual processes, limited data, poor accuracy, delayed insights, and suboptimal planning."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium improves demand forecasting with pipeline analysis including opportunity tracking, probability assessment, timeline estimation, and resource requirements. The system provides predictive analytics with historical pattern analysis, seasonal trend identification, growth projections, and demand forecasting. It includes scenario planning with multiple scenarios, what-if analysis, capacity planning, and risk assessment. The system enables resource planning with demand-based allocation, hiring planning, skill development, and investment priorities, plus continuous monitoring with real-time updates, trend tracking, accuracy measurement, and plan adjustment."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "Improved",
          label: "Forecasting accuracy"
        },
        {
          icon: RiFocus3Line,
          value: "Better",
          label: "Capacity planning"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Proactive",
          label: "Resource planning"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1.5M",
          label: "Annual value"
        }
      ]}
    />
  );
}

