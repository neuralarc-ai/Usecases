"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiBarChartLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="AI-Powered Production Scheduling"
      backHref="/use-cases/production"
      backLabel="Back to Production"
      businessChallenge={{
        title: "Business Challenge",
        description: "Production scheduling involves manual planning taking 20+ hours weekly, suboptimal schedules causing 15% downtime, limited demand responsiveness, $10M+ in lost productivity, and inefficient resource use. Scheduling challenges include complex constraints, demand variability, resource limitations, manual optimization, and delayed adjustments."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes production scheduling with demand-aware scheduling including real-time demand integration, priority optimization, capacity balancing, and constraint management. The system provides AI optimization with ML-powered scheduling, multi-objective optimization, scenario analysis, and what-if modeling. It includes real-time adjustment with dynamic rescheduling, disruption handling, resource reallocation, and priority changes. The system enables performance analytics with schedule adherence, efficiency metrics, bottleneck identification, and improvement opportunities, plus integration with ERP systems, MES platforms, demand planning, and supply chain."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "25%",
          label: "Reduction in downtime"
        },
        {
          icon: RiBarChartLine,
          value: "20%",
          label: "Improvement in throughput"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Better",
          label: "Resource utilization"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$10M",
          label: "Annual productivity gain"
        }
      ]}
    />
  );
}

