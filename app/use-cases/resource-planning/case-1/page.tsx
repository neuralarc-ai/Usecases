"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine, RiFocus3Line } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Capacity Planning & Utilization Optimization"
      backHref="/use-cases/resource-planning"
      backLabel="Back to Resource Planning"
      businessChallenge={{
        title: "Business Challenge",
        description: "Resource planning involves manual capacity tracking, limited visibility, suboptimal utilization (65%), missed revenue ($5M+ annually), and burnout from overallocation. Planning challenges include no real-time visibility, manual processes, poor forecasting, inconsistent allocation, and bench time waste."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes resource planning with real-time capacity tracking including current utilization, future availability, skill inventory, and location considerations. The system provides demand forecasting with pipeline analysis, historical patterns, seasonal trends, and growth projections. It includes optimal allocation with skill matching, availability optimization, travel minimization, and development opportunities. The system enables utilization analytics with individual utilization, team utilization, skill utilization, and trend analysis, plus scenario planning with what-if analysis, capacity scenarios, hiring needs, and investment priorities."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "85%",
          label: "Target utilization"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5M",
          label: "Annual revenue increase"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Reduced",
          label: "Burnout from better balance"
        },
        {
          icon: RiFocus3Line,
          value: "Data-driven",
          label: "Hiring decisions"
        }
      ]}
    />
  );
}

