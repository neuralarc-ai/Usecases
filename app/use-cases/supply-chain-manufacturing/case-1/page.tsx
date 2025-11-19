"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Supplier Performance Management"
      backHref="/use-cases/supply-chain-manufacturing"
      backLabel="Back to Supply Chain"
      businessChallenge={{
        title: "Business Challenge",
        description: "Supplier management involves 200+ suppliers, manual performance tracking, quarterly reviews (too infrequent), 25% of suppliers underperforming, and $8M+ in supplier-related costs. Supplier challenges include quality issues, delivery delays, pricing problems, limited visibility, and poor communication."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium optimizes supplier relationships with performance monitoring including real-time metrics, quality tracking, delivery performance, pricing compliance, and responsiveness. The system provides automated scoring with composite performance score, category-specific metrics, trend analysis, and risk assessment. It includes issue detection with quality problems, delivery delays, pricing variances, and communication gaps. The system enables optimization recommendations with supplier consolidation, alternative sourcing, negotiation opportunities, and risk mitigation, plus collaboration tools with supplier portal, performance dashboards, issue resolution, and improvement planning."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "40%",
          label: "Improvement in supplier performance"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "50%",
          label: "Reduction in quality issues"
        },
        {
          icon: RiTimeLine,
          value: "30%",
          label: "Reduction in delivery delays"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$3M",
          label: "Annual cost savings"
        }
      ]}
    />
  );
}

