"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiCalendarLine, RiMoneyDollarCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Operational Risk Event Prediction & Prevention"
      backHref="/use-cases/risk-management"
      backLabel="Back to Risk Management"
      businessChallenge={{
        title: "Business Challenge",
        description: "Operational risk events (fraud, errors, system failures, compliance violations) cost banks $25M+ annually in direct losses, regulatory fines and penalties, reputational damage, customer attrition, and remediation costs. Reactive approach means issues discovered after occurrence, limited predictive capability, incomplete risk assessment, inadequate controls, and poor risk culture."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium predicts and prevents operational risk events. The system uses ML models analyzing leading indicators for risk event prediction, performs continuous control testing with gap identification, remediation tracking, and effectiveness measurement, provides risk assessment (inherent risk scoring, residual risk calculation, control adequacy, risk appetite alignment), enables scenario analysis (what-if modeling, stress testing, impact assessment, mitigation planning), and generates risk reporting (risk dashboards, heat maps, trend analysis, executive summaries)."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "75%",
          label: "Reduction in operational losses"
        },
        {
          icon: RiCalendarLine,
          value: "6 months",
          label: "Advance warning"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$15M",
          label: "Annual loss prevention"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Proactive",
          label: "Risk management"
        }
      ]}
    />
  );
}

