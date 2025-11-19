"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Process Optimization & Efficiency"
      backHref="/use-cases/production"
      backLabel="Back to Production"
      businessChallenge={{
        title: "Business Challenge",
        description: "Manufacturing processes have 20-30% efficiency gaps, limited optimization, manual improvement efforts, $15M+ in waste, and slow improvement cycles. Process challenges include no systematic optimization, limited data analysis, manual identification, slow implementation, and inconsistent results."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes processes continuously with process monitoring including real-time data collection, performance tracking, bottleneck detection, and waste identification. The system provides AI-powered analysis with efficiency calculation, root cause analysis, optimization opportunities, and impact assessment. It includes optimization recommendations with specific improvements, implementation plans, ROI estimation, and priority ranking. The system enables simulation with process modeling, what-if analysis, impact prediction, and risk assessment, plus continuous improvement with automated monitoring, trend tracking, best practice identification, and knowledge capture."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "30%",
          label: "Efficiency improvement"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$15M",
          label: "Annual productivity gain"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Reduced",
          label: "Waste (material and time)"
        },
        {
          icon: RiTimeLine,
          value: "Faster",
          label: "Improvement cycles"
        }
      ]}
    />
  );
}

