"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Maintenance Scheduling & Optimization"
      backHref="/use-cases/maintenance"
      backLabel="Back to Maintenance"
      businessChallenge={{
        title: "Business Challenge",
        description: "Maintenance scheduling involves manual planning, suboptimal timing, limited resource coordination, high costs, and production disruptions. Scheduling challenges include manual processes, poor optimization, limited coordination, high costs, and production impact."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes maintenance scheduling with intelligent scheduling including optimal timing calculation, resource availability, production impact minimization, and cost optimization. The system provides resource coordination with technician assignment, skill matching, tool availability, and spare parts coordination. It includes production integration with production schedule consideration, downtime minimization, capacity planning, and impact assessment. The system enables cost optimization with maintenance cost minimization, resource efficiency, spare parts optimization, and total cost reduction, plus continuous improvement with schedule effectiveness, optimization, and refinement."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "40%",
          label: "Reduction in maintenance costs"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Optimal",
          label: "Scheduling"
        },
        {
          icon: RiBarChartLine,
          value: "Minimized",
          label: "Production impact"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$4M",
          label: "Annual savings"
        }
      ]}
    />
  );
}

