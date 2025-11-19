"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiTimeLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Real-Time Regulatory Risk Monitoring"
      backHref="/use-cases/legal-compliance"
      backLabel="Back to Legal & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        description: "Compliance teams manually monitor 200+ regulatory requirements across multiple jurisdictions (federal, state, international). Reactive approach leads to violations discovered during audits (not proactively), $2M+ annual fines and penalties, regulatory scrutiny and consent orders, reputational damage, limited visibility into compliance status, and quarterly compliance reviews (too infrequent)."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium provides continuous, real-time compliance monitoring. The system establishes monitoring for all 200+ requirements with control objectives, testing procedures, and evidence requirements, tracks compliance status 24/7 across transactions, system access logs, policy adherence, training completion, and documentation, validates controls automatically through sampling and testing, calculates compliance risk across business units and product lines, identifies potential issues before they occur using trend analysis and pattern recognition, and generates audit-ready documentation."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "95%",
          label: "Reduction in compliance violations"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Real-time",
          label: "Compliance visibility"
        },
        {
          icon: RiTimeLine,
          value: "70%",
          label: "Reduction in audit preparation time"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2.5M",
          label: "Annual savings"
        }
      ]}
    />
  );
}

