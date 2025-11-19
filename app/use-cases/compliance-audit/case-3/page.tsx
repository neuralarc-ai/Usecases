"use client";

import CaseDetail from "@/components/case-detail";
import { RiCheckboxCircleLine, RiTimeLine, RiMoneyDollarCircleLine, RiErrorWarningLine } from "react-icons/ri";

export default function Case3Page() {
  return (
    <CaseDetail
      title="Policy Compliance Verification & Testing"
      backHref="/use-cases/compliance-audit"
      backLabel="Back to Compliance & Audit"
      businessChallenge={{
        title: "Business Challenge",
        description: "Policy compliance testing covers only 15% of policies annually, with manual sampling and review, limited test coverage, delayed issue identification, compliance gaps, and regulatory findings. Testing requirements include rate compliance, form compliance, underwriting guidelines, coverage provisions, and regulatory requirements."
      }}
      heliumSolution={{
        title: "Helium Solution",
        description: "Helium automates compliance testing. The system enables automated testing with 100% policy coverage, rate verification, form compliance, underwriting adherence, and coverage validation. It includes exception detection for non-compliant policies, pricing errors, coverage gaps, and documentation issues. The system performs root cause analysis with issue identification, pattern recognition, system problems, and process gaps. It includes remediation workflow with issue assignment, correction tracking, validation, and documentation. The system generates reporting with compliance metrics, exception reports, trend analysis, and regulatory submissions."
      }}
      metrics={[
        {
          icon: RiCheckboxCircleLine,
          value: "100%",
          label: "Policy testing coverage"
        },
        {
          icon: RiTimeLine,
          value: "Real-time",
          label: "Issue identification"
        },
        {
          icon: RiErrorWarningLine,
          value: "Zero",
          label: "Regulatory findings"
        },
        {
          icon: RiMoneyDollarCircleLine,
          value: "$1.5M",
          label: "Annual savings"
        }
      ]}
    />
  );
}

