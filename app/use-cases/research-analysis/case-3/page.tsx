"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Data Analysis & Visualization"
      backHref="/use-cases/research-analysis"
      backLabel="Back to Research & Analysis"
      businessChallenge={{
        title: "Business Challenge",
        description: "Data analysis for clients takes 50-80 hours per project, manual data cleaning (40% of time), limited visualization, inconsistent quality, and high costs. Analysis challenges include data quality issues, manual processing, limited tools, inconsistent methods, and time-consuming work."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium accelerates data analysis with automated data cleaning including quality validation, outlier detection, missing data handling, and standardization. The system provides advanced analytics with statistical analysis, predictive modeling, segmentation, and correlation analysis. It includes automated visualization with chart generation, dashboard creation, interactive reports, and custom formats. The system enables insight extraction with pattern identification, trend analysis, anomaly detection, and recommendation generation, plus report automation with template-based generation, narrative creation, executive summaries, and technical appendices."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "70%",
          label: "Reduction in analysis time"
        },
        {
          icon: RiBarChartLine,
          value: "Higher",
          label: "Quality insights"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Better",
          label: "Visualizations"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$80K",
          label: "Cost savings per project"
        }
      ]}
    />
  );
}

