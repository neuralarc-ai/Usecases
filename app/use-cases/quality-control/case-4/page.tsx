"use client";

import CaseDetail from "@/components/case-detail";
import { RiTimeLine, RiCheckboxCircleLine, RiFocus3Line, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Case4Page() {
  return (
    <CaseDetail
      title="Root Cause Analysis & Corrective Actions"
      backHref="/use-cases/quality-control"
      backLabel="Back to Quality Control"
      businessChallenge={{
        title: "Business Challenge",
        description: "Root cause analysis takes 20-30 hours per issue, limited analysis depth, inconsistent methodology, delayed corrective actions, and recurring problems. Analysis challenges include time-consuming investigation, limited tools, poor methodology, delayed actions, and ineffective solutions."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium accelerates root cause analysis with AI-powered investigation including data aggregation, pattern analysis, factor correlation, and cause identification. The system provides comprehensive analysis with multi-factor analysis, timeline reconstruction, relationship mapping, and impact assessment. It includes corrective action recommendations with specific actions, implementation plans, effectiveness prediction, and validation methods. The system enables action tracking with implementation monitoring, effectiveness measurement, validation, and continuous improvement, plus knowledge capture with case documentation, best practice capture, and prevention strategies."
      }}
      metrics={[
        {
          icon: RiTimeLine,
          value: "90%",
          label: "Faster root cause identification"
        },
        {
          icon: RiCheckboxCircleLine,
          value: "Effective",
          label: "Corrective actions"
        },
        {
          icon: RiFocus3Line,
          value: "Reduced",
          label: "Recurring problems"
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

