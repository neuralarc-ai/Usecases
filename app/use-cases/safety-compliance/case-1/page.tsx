"use client";

import CaseDetail from "@/components/case-detail";
import { RiBarChartLine, RiShieldLine, RiCheckboxCircleLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case1Page() {
  return (
    <CaseDetail
      title="Incident Prediction & Prevention"
      backHref="/use-cases/safety-compliance"
      backLabel="Back to Safety & Compliance"
      businessChallenge={{
        title: "Business Challenge",
        description: "Safety management involves reactive approach, 50+ incidents annually, limited prediction capability, high costs, and employee injuries. Safety challenges include reactive management, limited prevention, poor prediction, delayed response, and high incident rates."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium prevents incidents proactively with predictive analytics including risk factor analysis, incident pattern recognition, probability calculation, and early warning systems. The system provides real-time monitoring with safety condition tracking, hazard detection, behavior monitoring, and environment monitoring. It includes automated alerts with early warning, priority routing, preventive action recommendations, and escalation workflows. The system enables preventive actions with risk mitigation, safety improvements, training recommendations, and process changes, plus continuous learning with pattern recognition, model improvement, and optimization."
      }}
      metrics={[
        {
          icon: RiBarChartLine,
          value: "80%",
          label: "Reduction in incidents"
        },
        {
          icon: RiShieldLine,
          value: "Proactive",
          label: "Prevention vs reactive"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Improved",
          label: "Employee safety"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$5M",
          label: "Annual value"
        }
      ]}
    />
  );
}

