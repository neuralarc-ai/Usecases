"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiTimeLine, RiBarChartLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case2Page() {
  return (
    <CaseDetail
      title="Safety Monitoring & Compliance Tracking"
      backHref="/use-cases/safety-compliance"
      backLabel="Back to Safety & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        description: "Safety monitoring involves manual checks, limited coverage, delayed issue detection, inconsistent compliance, and regulatory risks. Monitoring challenges include manual processes, limited visibility, delayed insights, inconsistent standards, and compliance gaps."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium monitors safety continuously with real-time monitoring including safety condition tracking, hazard detection, behavior monitoring, and environment monitoring. The system provides compliance tracking with regulatory requirement monitoring, standard adherence, certification tracking, and audit preparation. It includes automated alerts with safety violation detection, compliance gap identification, priority routing, and escalation workflows. The system enables reporting automation with compliance reports, safety dashboards, trend analysis, and exception reporting, plus continuous improvement with trend monitoring, gap analysis, and improvement recommendations."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "Compliance tracking"
        },
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Monitoring"
        },
        {
          icon: RiBarChartLine,
          value: "Reduced",
          label: "Regulatory risks"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$2M",
          label: "Annual value"
        }
      ]}
    />
  );
}

